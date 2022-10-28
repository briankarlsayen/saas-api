import * as express from 'express';
let router = express.Router();
import {createUser, displayUsers, viewUser, updateUser, archiveUser} from '../controllers/user.controller'

router.route("/").post(createUser);
router.route("/").get(displayUsers);
router.route("/:id").get(viewUser);
router.route("/:id").put(updateUser);
router.route("/:id").delete(archiveUser);

export default router;  
