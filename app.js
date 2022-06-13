import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'

import connectDB from './db/connectdb.js'
import web from './routes/web.js'

const app = express()
app.use(cors())
const port = process.env.PORT

const DATABASE_URL = process.env.DATABASE_URL

connectDB(DATABASE_URL)

app.use(express.json())

app.use('/api', web)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})