import { Request, Response } from 'express'
import User from '../models/user'
import { UserParams } from '../types'

export async function createUser(req: Request<{}, UserParams>, res: Response) {
  try {
    const user = await User.create(req.body);
    console.log('hey', user)
    return res.status(201).json({message: "Success"})
  } catch(error) {
    return res.status(422).json({message: `error: ${error}`})
  }
}

export async function displayUsers(req: Request, res: Response) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users)
  } catch(error) {
    return res.status(422).json({message: `error: ${error}`})
  }
}

export async function viewUser(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const users = await User.findOne({ where: { id }});
    return res.status(200).json(users)
  } catch(error) {
    return res.status(422).json({message: `error: ${error}`})
  }
}

export async function updateUser(req: Request<{id: number}, UserParams>, res: Response) {
  const id = req.params.id;
  try {
    const getUser = await User.findOne({ where: { id }});
    if(!getUser) return res.status(422).json({message: "User not found"});
    await User.update(req.body, { where: { id }});
    return res.status(200).json({ message: "Successfully update"})
  } catch(error) {
    return res.status(422).json({message: `error: ${error}`})
  }
}

export async function archiveUser(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const getUser = await User.findOne({ where: { id }});
    if(!getUser) return res.status(422).json({message: "User not found"});
    await User.update({ is_deleted: true }, { where: { id }});
    return res.status(200).json({ message: "Successfully update"})
  } catch(error) {
    return res.status(422).json({message: `error: ${error}`})
  }
}

