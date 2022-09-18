import express from 'express'

const app = express()

app.get('/', (req, res) => {
  const data = { email: 'same' }
  res.json(data)
})

export default app
