import { SALT } from '@/api-constants/index.constants'
import { IPayloadInput, TJwtPayloadResponse } from '@/api-interfaces/auth.interfaces'
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

  static createJWT(payload: IPayloadInput): string {
    try {
      return jwt.sign(payload, 'JWT_SECRET', { expiresIn: '3d' })
    } catch (error) {
      // getErrorMessage(error)
      console.log(error)
      return ''
    }
  }

  static verifyJWT(token: string): TJwtPayloadResponse | null {
    try {
      return jwt.verify(token, 'JWT_SECRET') as unknown as TJwtPayloadResponse
    } catch (error) {
      // getErrorMessage(error)
      console.log(error)
      return null
    }
  }
}
