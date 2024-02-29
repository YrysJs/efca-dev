import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:8000',
  headers: {
    'Cache-Control': 'public, max-age=600',
  }
})

export default instance