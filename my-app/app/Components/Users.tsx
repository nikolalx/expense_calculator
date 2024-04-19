import PocketBase from 'pocketbase';
import React from 'react'

// export const pb = new PocketBase('http://127.0.0.1:8090');

export async function getAllUsers() {
  const res = await fetch('https://nikolalx.pockethost.io/api/collections/users/records')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

var realData: Array<String> = []

const data = async () => {

  const jsonData = await getAllUsers()

  const data = jsonData

  realData = data

  return realData
}

const Page = () => {

  data()
  
  return <>
  <div>
    {realData.map(record => {
      <p>{record.name}</p>
    })}
  </div>
  </>
}


  // fetch a paginated records list
  // const resultList = await pb.collection('users').getList(1, 50, {
  //     filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
  // });

  // you can also fetch all records at once via getFullList
  // export async function getAllUsers() {
  //     const records = await pb.collection('users').getFullList({
  //         sort: '-created',
  //     });
  //     return records;

// or fetch only the first record that matches the specified filter
// const record = await pb.collection('users').getFirstListItem('someField="test"', {
//     expand: 'relField1,relField2.subRelField',
// });

export default Page

