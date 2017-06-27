import express from 'express';
import SubjectController from '../controllers/SubjectController';

const router = express.Router();
/* eslint-disable no-unused-vars */
const SubjectsPath = '/api/subjects';
const SubjectNumber = '/:id';

//  the data access should look something like this:
// '/api/teachers/{name}/{class}/{Subject#}'

router.post(SubjectsPath, SubjectController.create);
router.get(SubjectsPath, SubjectController.list);
router.get(SubjectsPath + '/:id', SubjectController.listOne);
router.put(SubjectsPath + '/:id', SubjectController.update);
router.delete(SubjectsPath + '/:id', SubjectController.delete);

export default router;
