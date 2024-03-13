//TODO -------------------------installation
/*
REACT APP
npx create-react-app my-app
cd my-app
npm start

VITE REACT
npm create vite@latest
.then(follow instruction)

TAILWIND
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

"./index.html",
"./src/** /*.{js,ts,jsx,tsx}",

@tailwind base;
@tailwind components;
@tailwind utilities;

html body #root {
  width: 100%;
  height: 100%;
}

REACT ROUTER DOM
npm install react-router-dom@latest

REDUX
npm i redux react-redux @reduxjs/toolkit 
@types/react-redux

maCgts0G5eyUltuY(ecommerce)
IRMC6Ara1sX4ABWF(kanban)
tgo0MGRWpnTm8R1y

npm init -y (inside server directory)
npm install express mongoose cors nodemon ts-node dotenv @types/express

nodemon
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "nodemon index.js"
},
npm start
*/

//TODO ---------------------------GITHUB
/*
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin URLHERE
git push -u origin main

git add .
git commit -m "resume update"
git branch -M main
git push -u origin main

*/
//TODO ------------------------CSS starter font family
/*
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
  font-family: 'Poppins';
}
*/
//TODO -----------------------Tailwind desktop first responsive design
// Config tailwind to desktop first approach
/*
screens: {
    xl: { max: "1279px" },
    // => @media (max-width: 1279px) { ... }

    lg: { max: "1023px" },
    // => @media (max-width: 1023px) { ... }

    md: { max: "767px" },
    // => @media (max-width: 767px) { ... }

    sm: { max: "639px" },
    // => @media (max-width: 639px) { ... }
},
*/

//TODO -----------------------Google fonts
/*
    Poppins
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Ubuntu:wght@400;500;700&display=swap"
        rel="stylesheet">
*/

//TODO -------------------------Mongodb
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect(
  'mongodb+srv://jinyoung5497:tgo0MGRWpnTm8R1y@testcluster.mp49cin.mongodb.net/school?retryWrites=true&w=majority'
)

app.get('/getUsers', async (req, res) => {
  UserModel.find().then((err, result) => {
    console.log('results')
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
})

app.post('/createUser', async (req, res) => {
  const user = req.body
  const newUser = new UserModel(user)
  await newUser.save()

  res.json(user)
})

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})
//--------------------------------------------
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
})

const UserModel = mongoose.model('users', UserSchema)
module.exports = UserModel

//TODO ------------------------Fetch Post
// Post
const logging = useEffect(() => {
  fetch('http://sefdb02.qut.edu.au:3000/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })
}, [buttonClicked])

//TODO ------------------------useContext
import React, { useState, createContext, useContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = (user) => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

//Todo ------------------------UseState Array (Complex state:arrays scrimba)

// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//     /**
//      * Challenge: See if you can do it all again by yourself :)
//      */
//     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
//     function addItem() {
//         // Build from scratch :)
//         setThingsArray(itemArray => [...itemArray, `Thing ${thingsArray.length +1}`])
//     }

//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

//     return (
//         <div>
//             <button onClick = {addItem}>Add Item</button>
//             {thingsElements}
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));

//Todo ------------------------MAP DO and DONT DO
//TODO DO THIS
{
  fetch.boardArray.map((value) => <h1 key={value._id}>{value.name}</h1>)
}
//TODO DONT DO THIS
{
  fetch.boardArray.map((value) => {
    ;<h1 key={value._id}>{value.name}</h1>
  })
}

//TODO -----------------------verge of understanding truly remarkable
// update a Board
const updateBoard = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'No valid id' })
  }

  const boards = await board.findOneAndUpdate(
    { 'boards._id': id },
    {
      // ...req.body
      $set: { 'boards.$.name': 'trustone' },
    }
  )

  if (!boards) {
    return res.status(400).json({ error: 'No such Board' })
  }

  res.status(200).json(boards)
}

//TODO -----------------------verge of understanding truly remarkable
//? $[] updates all related data so it's useless
//* Create new board {"$set":{"boards": {"name": "trustthree"}}}
//* Set new {"$set":{"boards.$.name": "trustnew"}}
//* {"$set":{"boards.$.columns": {"name": "trustnew"}}}
//* Create new column {"$push":{"boards.$.columns": {"name": "trustthree"}}}
//* Create new tasks { "$push": { "boards.$[].columns.$[].tasks": { "title": "newTask" } } }
//* Create new subtasks {"$push": { "boards.$[].columns.$[].tasks.$[].subtasks": { "title": "newSubtask" } }}

//* Update board name {"boards.$.name": "newBoardName"} in new column
//* Update Column name {"boards.$[].columns.$[].name": "newColumnName"} in new tasks
//* Update Task title {"boards.$[].columns.$[].tasks.$[].title": "newTaskName"} in new subtasks
//* Update Subtask title {"boards.$[].columns.$[].tasks.$[].subtasks.$[].title": "newSubTaskName"} in update subtasks field

//* Delete board field by id {"$pull":{"boards": {"_id": "6459d699de8a2cceb28ed604"}}}  in new column
//* Delete column field by id { "$pull": { "boards.$[].columns": { "_id": "645b149b8bfd14671ae16f35" } } } in new tasks
//* Delete task field by id {"$pull": { "boards.$[].columns.$[].tasks": { "_id": "645b10991192ff930104f3ef" } }} in new subtasks
//* Delete Subtask field by id {"$pull": { "boards.$[].columns.$[].tasks.$[].subtasks": { "_id": "645b117d8bfd14671ae16f24" } }} in update subtasks field
