import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [doctors, setDoctors] = useState([])
  const [patients, setPatients] = useState([])
  const [beds, setBeds] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/doctors').then(res => setDoctors(res.data))
    axios.get('http://localhost:5000/patients').then(res => setPatients(res.data))
    axios.get('http://localhost:5000/beds').then(res => setBeds(res.data))
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h2>Doctors</h2>
      <pre>{JSON.stringify(doctors, null, 2)}</pre>

      <h2>Patients</h2>
      <pre>{JSON.stringify(patients, null, 2)}</pre>

      <h2>Beds</h2>
      <pre>{JSON.stringify(beds, null, 2)}</pre>
    </div>
  )
}

export default App
