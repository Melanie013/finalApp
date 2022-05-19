const { post } = require("./auth");
const User = require('../models/User')
const ToDo = require('../models/ToDo');
const { findOneAndDelete } = require("../models/User");




const router = require("express").Router();

router.get("/:id", (req, res, next) => {
    const userId = req.params.id
    console.log('userId', userId)
    ToDo.find({owner: userId})
    .then(todosFromDb => {
        console.log('todosFromDb', todosFromDb)
    res.status(200).json(todosFromDb)
    }) 
});


router.post("/add", (req, res, next) => {
    const {title, user } = req.body
    ToDo.create({title, completed: false, owner: user, active: false})
    .then(createdToDo => {
        console.log(createdToDo)
        res.status(201).json(createdToDo)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error' })
    })
    
    
  }); 

  router.put("/active/:id", (req, res, next) => {
      const id = req.params.id
      const {active} = req.body
      console.log(active)
      ToDo.findByIdAndUpdate(id, {active: active})

      .then(updatedTodo => {
          console.log(updatedTodo)
      })
    .catch(err => {
        console.log(err)
    })
  })

  router.put("/completed/:id", (req, res, next) => {
    const id = req.params.id
    const {completed} = req.body
    console.log(completed)
    ToDo.findByIdAndUpdate(id, {completed: completed})

    .then(updatedCompletedTodo => {
        console.log(updatedCompletedTodo)
    })
  .catch(err => {
      console.log(err)
  })
  })

  router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id
    console.log('delete')
    ToDo.findByIdAndDelete(id)
    .then(deletedToDo => {
        console.log(deletedToDo)
    })
    .catch(err => {
        console.log(err)
    })
  })



// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;