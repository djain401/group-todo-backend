'use strict'
// imports
const express = require('express')
const cors = require('cors')

require('dotenv').config()

const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3001

mongoose.connect(`${process.env.DB_URL}/todoapp`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const todoSchema = new mongoose.Schema({
  title: String,
  status: Boolean
})

// Listening on Port
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})

const todoModel = mongoose.model('todo', todoSchema)

// Routes
app.get('/', homeHandler)
app.get('/todo', getTaskHandler)
app.post('/todo', addTaskHandler)
app.put('/todo/:id', updateTaskHandler)
app.delete('/todo/:id', deleteTaskHandler)

function homeHandler (request, response) {
  response.status(200).send('Home')
}

async function getTaskHandler (request, response) {
  try {
    const tasks = await todoModel.find({})
    response.send(tasks)
  } catch (error) {
    console.error('DB error: ' + error)
  }
}

// Create
async function addTaskHandler (request, response) {
  const { title, status } = request.body

  await todoModel.create({
    title,
    status
  })

  try {
    const todoList = await todoModel.find({})
    response.status(200).send(todoList)
  } catch (error) {
    console.error('DB error: ' + error)
  }
}

// Delete by Id
async function deleteTaskHandler (request, response) {
  const index = request.params.id
  await todoModel.findByIdAndDelete(index)
  try {
    const todoList = await todoModel.find({})
    response.status(200).send(todoList)
  } catch (error) {
    console.error('DB error: ' + error)
  }
}

// Update by Id
async function updateTaskHandler (request, response) {
  const index = request.params.id
  const { title, status } = request.body

  await todoModel.findByIdAndUpdate(index, { title, status })

  try {
    const todoList = await todoModel.find({})
    response.status(200).send(todoList)
  } catch (error) {
    console.error('DB error: ' + error)
  }
}
