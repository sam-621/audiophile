import { axiosClient } from 'frontend/common/services/config/axios'
import { SignUpDto } from '../interfaces/dtos'

export const signUp = (dto: SignUpDto) => {
  return axiosClient.post('/sign-up', dto)
}
