import { SALT } from '@/api-constants/index.constants'
import { IPayload } from '@/api-interfaces/auth.interfaces'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export class SecurityService {
  static async hashPassword(password: string): Promise<string> {
    try {
      return await bcrypt.hash(password, SALT)
    } catch (error) {
      // getErrorMessage(error)
      console.log(error)
      return ''
    }
  }

  static async comparePasswords(password: string, hash: string): Promise<boolean> {
    try {
      return await bcrypt.compare(password, hash)
    } catch (error) {
      // getErrorMessage(error)
      console.log(error)
      return false
    }
  }

  static createJWT(payload: IPayload): string {
    try {
      return jwt.sign(payload, 'JWT_SECRET', { expiresIn: '3d' })
    } catch (error) {
      // getErrorMessage(error)
      console.log(error)
      return ''
    }
  }

  static async verifyJWT(token: string) {
    try {
      return jwt.verify(token, 'JWT_SECRET')
    } catch (error) {
      // getErrorMessage(error)
      console.log(error)
    }
  }
}
