import React from 'react';
import { useState } from 'react'

// import {useState} from 'react'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}


function MyButton({count, onClick}){
  // function handleClick(){
  //   setCount(count+1);
  //   // alert('clicked on Button'+ count);
  // } this function can have seperate counter for each buttons
 
  return (
    <button onClick = {onClick}> I'm a button {count}</button>)
}

function App() {
      const [count, setCount] = useState(0)
 function handleClick(){
    setCount(count+1);
    // alert('clicked on Button'+ count);
  }
  return (
    <div>
      <h1> Welcome to my APP</h1>
      <MyButton count = {count} onClick = {handleClick}/>
      <MyButton count = {count} onClick = {handleClick}/>
      <Profile/>
      <ShoppingList/>
    </div>)
 
}

export default App
