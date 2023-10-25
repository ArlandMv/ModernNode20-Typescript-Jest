import { log } from 'console'
import express, { Request, Response, NextFunction } from 'express'
import mysql, { Connection } from 'mysql2/promise'
//MysqlError, QueryFunction

// import { getNotes, getNote, createNote } from './database.js'
import { getVotes, createVote } from './database/connection.js'

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1>Hello World!<h1/>')
})

app.get('/votes', async (req: Request, res: Response) => {
  const votes = await getVotes()
  res.send(votes)
})

app.post('/votes', async (req: Request, res: Response) => {
  try {
    const { email, vote } = req.body
    const cert = await createVote(email, vote)
    res.status(201).send(cert)
  } catch (error) {
    console.error('Error in POST /votes:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Error')
})

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`)
})
