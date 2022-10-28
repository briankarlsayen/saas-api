import { Request, Response } from 'express'
import AppKey from '../models/appkey'
import { AppKeyParams } from '../types';

const convertDate = () => {

}

export async function createKey(req: Request<{}, AppKeyParams>, res: Response) {
  try {
    // const user = await AppKey.create(req.body);
    console.log('hey', req.body)
    return res.status(201).json({message: "Success"})
  } catch(error) {
    return res.status(422).json({message: `error: ${error}`})
  }
}

export async function displayUsers(req: Request, res: Response) {
  try {
    const users = await AppKey.findAll();
    return res.status(200).json(users)
  } catch(error) {
    return res.status(422).json({message: `error: ${error}`})
  }
}

export async function viewUser(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const users = await AppKey.findOne({ where: { id }});
    return res.status(200).json(users)
  } catch(error) {
    return res.status(422).json({message: `error: ${error}`})
  }
}

export async function updateUser(req: Request<{id: number}, AppKeyParams>, res: Response) {
  const id = req.params.id;
  try {
    const getUser = await AppKey.findOne({ where: { id }});
    if(!getUser) return res.status(422).json({message: "AppKey not found"});
    await AppKey.update(req.body, { where: { id }});
    return res.status(200).json({ message: "Successfully update"})
  } catch(error) {
    return res.status(422).json({message: `error: ${error}`})
  }
}

export async function archiveUser(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const getUser = await AppKey.findOne({ where: { id }});
    if(!getUser) return res.status(422).json({message: "AppKey not found"});
    await AppKey.update({ is_deleted: true }, { where: { id }});
    return res.status(200).json({ message: "Successfully update"})
  } catch(error) {
    return res.status(422).json({message: `error: ${error}`})
  }
}