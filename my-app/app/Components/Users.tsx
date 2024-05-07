'use client'

import PocketBase from 'pocketbase';
import React from 'react'
import { useState } from 'react';
import { json } from 'stream/consumers';
// export const pb = new PocketBase('http://127.0.0.1:8090');

// export async function getAllUsers() {
//   const res = await fetch('https://nikolalx.pockethost.io/api/collections/users/records/page')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   console.log(res)
//   return res
// }


async function getAllData() {
  const url = 'https://nikolalx.pockethost.io/'
  const client = new PocketBase(url)

  const records = await client.collection('users').getFullList({
    sort: '-created',
  });

  return records
}

const auth = async () => {
const pb = new PocketBase('https://nikolalx.pockethost.io/');
const authData = await pb.collection('users').authWithPassword(
  'Lucia',
  'solo1234',
);

// after the above you can also access the auth data from the authStore
console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.model?.id);
}

const Page = () => {
  const [text, setText] = useState('')

  const dataSetter = async () => {

    const jsonData = await getAllData()

    console.log(jsonData[0])

    setText(jsonData[1].name)
  }

  return (
    <div>
      <button onClick={() => auth()}>Click Me!</button>
      <p>{text}</p>
    </div>
  )
}

export default Page

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


