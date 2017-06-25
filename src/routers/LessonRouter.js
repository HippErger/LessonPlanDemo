import express from 'express';
import LessonController from '../controllers/LessonController';

const router = express.Router();
/* eslint-disable no-unused-vars */
const LessonsPath = '/api/lessonplans';
const teacherName = 'yonderWay';
const subjectName = 'theatre1';
const lessonNumber = '/:id';


// '/api/teachers/{name}/{class}/{lesson#}'

router.post(LessonsPath, LessonController.create);
router.get(LessonsPath, LessonController.list);
router.get(LessonsPath + '/:id', LessonController.listOne);
router.put(LessonsPath + '/:id', LessonController.update);
router.delete(LessonsPath + '/:id', LessonController.delete);

export default router;
