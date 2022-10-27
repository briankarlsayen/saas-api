import * as express from 'express';
let router = express.Router();
import {createUser, displayUsers} from '../controllers/user.controller'

router.route("/").post(createUser);
router.route("/").get(displayUsers);

export default router;  