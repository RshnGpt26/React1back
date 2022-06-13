import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studentName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },    
})

const studentModel = mongoose.model('student', studentSchema)

export default studentModel