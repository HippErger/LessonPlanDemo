import express from 'express';
import LessonController from '../controllers/LessonController';

const router = express.Router();
const LessonsPath = '/api/lessonplans';

router.post(LessonsPath, LessonController.create);
router.get(LessonsPath, LessonController.list);
router.get(LessonsPath + '/:id', LessonController.listOne);
router.put(LessonsPath + '/:id', LessonController.update);
router.delete(LessonsPath + '/:id', LessonController.delete);

export default router;
