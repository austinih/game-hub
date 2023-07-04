import axios from "axios"

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '33a07b0541fd4c83be6a11f7947fb880'
  }
})