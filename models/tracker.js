const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter workout type: resistance or cardio"
            },
            name: {
                type: String,
                trim: true,
                required: "Exercise"
            },
            duration: {
                type: Number,
                required: "10"
            },
            weight: {
                type: Number,
                required: "100"
            },
            reps: {
                type: Number,
                required: "10"
            },
            sets: {
                type: Number,
                required: "3"
            },
        }]
}
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
