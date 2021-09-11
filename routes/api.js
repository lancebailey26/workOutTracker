const router = require("express").Router();
const db = require("../models");
require('mongoose')

//create
router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//read
router.get("/api/workouts", (req, res) => {
    db.Workout.find()
        .then((dbData) => {
            res.json(dbData);
        })
        .catch((err) => {
            res.json(err);
        });
});

//update
router.put("/api/workouts/:id", ({body, params}, res) => {
    const id = params.id;
    let workouts = [];
    db.Workout.find({_id: id})
        .then(dbWorkout => {
            currentExercises = dbWorkout.exercises;
            res.json(dbWorkout[0].exercises);
            let fullList = [...workouts, body]
            update(fullList)
        })
        .catch(err => {
            res.json(err);
        });
    function update(exercises){
        db.Workout.findByIdAndUpdate(id, {exercises: exercises}, function(err, doc){
        if(err){
            console.log(err)
        }})
    }     
});
//range
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find().limit(7)
        .then((dbData) => {
            res.json(dbData);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;
