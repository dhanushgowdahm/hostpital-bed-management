const express = require('express')
const { MongoClient } = require('mongodb')
const cors = require('cors')

const app = express()
app.use(cors())

const uri = "mongodb+srv://dhanush:dhanush1@cluster0.7j3av.mongodb.net/"
const client = new MongoClient(uri)
const dbName = "hospitalDB"

app.get('/doctors', async (req, res) => {
  try {
    await client.connect()
    const db = client.db(dbName)
    const data = await db.collection('doctors').find().toArray()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch doctors' })
  }
})

app.get('/patients', async (req, res) => {
  try {
    await client.connect()
    const db = client.db(dbName)
    const data = await db.collection('patients').find().toArray()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch patients' })
  }
})

app.get('/beds', async (req, res) => {
  try {
    await client.connect()
    const db = client.db(dbName)
    const data = await db.collection('beds').find().toArray()
    res.json(data)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch beds' })
  }
})

app.listen(5000, () => console.log('🔁 Server running on http://localhost:5000'))
