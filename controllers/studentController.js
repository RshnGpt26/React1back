import studentModel from "../models/Student.js"

class studentController {
    static getAllDocs = async (req, res) => {
        try {
            const result = await studentModel.find()
            res.send(result)
        } catch (err) {
            console.log(err)
        }
        res.send('All students')
    }
}

export default studentController