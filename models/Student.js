import mongoose from "mongoose"

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 50 },
    fees: { type: mongoose.Decimal128, validate: v => v > 4000.10 }
})

const StudentModel = new mongoose.model('student', studentSchema)

export default StudentModel 