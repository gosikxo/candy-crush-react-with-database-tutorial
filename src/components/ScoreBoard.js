import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ScoreBoard = ({ score }) => {
  const [data, setData] = useState(null)

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/scores')
    setData(response.data.data)
  }

  console.log(data)

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='score-board'>
      <h2>Score: {score}</h2>
    </div>
  )
}
