import express from 'express'

const app = express()
const port = 8000

app.get('/api/ping', (req, res) => {
  res.send('pong')
})

app.listen(port, () => {
  console.log(`app running on port: ${port}`)
})