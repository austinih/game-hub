import axios, { AxiosRequestConfig } from "axios"

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '33a07b0541fd4c83be6a11f7947fb880'
  }
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)
  }
}

export default APIClient