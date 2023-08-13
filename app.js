import express from "express"
import connectDB from "./db/connectDB.js"
import { join } from "path"
import router from "./routers/url.js"

const main = express()


// urlencoded
main.use(express.urlencoded({extended: false}))

// static files
main.use('/student', express.static(join(process.cwd(), 'public')))

// load router
main.use('/student', router)

// set template engine
main.set('view engine', 'ejs')

// database connection
const DATABASE_URL = 'mongodb://127.0.0.1'
connectDB(DATABASE_URL)

const port = process.env.PORT || 8000
const protocol = 'http://'
const host = 'localhost'

main.listen(port, () => {
    console.log(`Server running on ${protocol}${host}:${port}`)
})