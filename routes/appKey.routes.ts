import * as express from 'express';
let router = express.Router();
import {createKey } from '../controllers/appKey.controller'

router.route("/").post(createKey);

export default router;  