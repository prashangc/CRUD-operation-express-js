import StudentModel from "../models/Student.js"

class StudentController {

    static createDoc = async (req, res) => {
        try {
            const { name, age, fees } = req.body
            const doc = new StudentModel({
                name: name,
                age: age,
                fees: fees,
            })

            const result = await doc.save()
            res.redirect('/student')
        } catch (e) {
            console.log("Error posting data => ", e);
        }
    }

    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find()
            res.render("index", { data: result })
        } catch (e) {
            console.log("Error fetching data => ", e);
        }
    }

    static editDoc = async (req, res) => {
        try {
            const result = await StudentModel.findById(req.params.id)
            res.render('edit', { data: result })

        } catch (e) {
            console.log("Error fetching data => ", e);
        }
    }

    static updateDocById = async (req, res) => {
        try {
            await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/student')

        } catch (e) {
            console.log("Error fetching data => ", e);
        }
    }

    static deleteDocById = async (req, res) => {
        try {
            await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect('/student')

        } catch (e) {
            console.log("Error deleting data => ", e);
        }
    }
}

export { StudentController }