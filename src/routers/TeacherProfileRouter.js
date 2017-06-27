import express from 'express';
import TeacherProfileController from '../controllers/TeacherProfileController';

const router = express.Router();
/* eslint-disable no-unused-vars */
const TeacherProfilesPath = '/api/teachers';
// const teacherName = 'yonderWay';
// const subjectName = 'theatre1';
// const TeacherProfileNumber = '/:id';

//  the data access should look something like this:
// '/api/teachers/{name}/{class}/{TeacherProfile#}'

router.post(TeacherProfilesPath, TeacherProfileController.create);
router.get(TeacherProfilesPath, TeacherProfileController.list);
router.get(TeacherProfilesPath + '/:id', TeacherProfileController.listOne);
router.put(TeacherProfilesPath + '/:id', TeacherProfileController.update);
router.delete(TeacherProfilesPath + '/:id', TeacherProfileController.delete);

export default router;
