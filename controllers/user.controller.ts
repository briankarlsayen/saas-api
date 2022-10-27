import { Request, Response } from 'express'
import Model from '../models'

export async function createUser(req: Request, res: Response) {
  try {
    return res.status(201).json({message: "Success"})
  } catch(error) {
    // next(error)
    console.log('error')
  }
}

export async function displayUsers(req: Request, res: Response) {
  try {
    const users = User.findAll();
    return res.status(201).json({message: "Success"})
  } catch(error) {
    // next(error)
    console.log('error')
  }
}

export async function viewUser(req: Request, res: Response) {
  try {
    User
    return res.status(201).json({message: "Success"})
  } catch(error) {
    // next(error)
    console.log('error')
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    return res.status(201).json({message: "Success"})
  } catch(error) {
    // next(error)
    console.log('error')
  }
}

export async function archiveUser(req: Request, res: Response) {
  try {
    return res.status(201).json({message: "Success"})
  } catch(error) {
    // next(error)
    console.log('error')
  }
}

