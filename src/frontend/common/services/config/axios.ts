import axios from 'axios'

import { BASE_API_URL } from '@/front-constants'

export const axiosClient = axios.create({
  baseURL: BASE_API_URL
})
