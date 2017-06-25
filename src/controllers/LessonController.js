import LessonModel from '../models/LessonModel';

const LessonController = {
  create: (request, response, next) => {
    const addedLesson = new LessonModel(request.body);

    addedLesson.save()
      .then(() => {
        return response.json(addedLesson);
      })
      .catch(err => {
        return next(err);
      });
  },

  list: (request, response, next) => {
    LessonModel.find({}).exec()
      .then(data => {
        console.log('Lesson DB fetched');
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  },

  listOne: (request, response, next) => {
    const query = request.params.id;

    LessonModel.findById(query)
      .then(data => {
        console.log('Lesson DB, individual was requested,');
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  },

  update: (request, response, next) => {
    const itemBody = request.body;
// @TODO need to change this data structure to match what the lesson plan will look like
    LessonModel.findById(request.params.id).exec()
      .then(data => {
        data.creator = itemBody.creator || data.creator;
        data.title = itemBody.title || data.title;
        data.subject = itemBody.subject || data.subject;
        data.teks = itemBody.teks || data.teks;
        data.materialsRequired = itemBody.materialsRequired || data.materialsRequired;
        data.summary = itemBody.summary || data.summary;
        data.timeEstimate = itemBody.timeEstimate || data.timeEstimate;
        data.learningGoal = itemBody.learningGoal || data.learningGoal;
        data.hook = itemBody.hook || data.hook;
        data.instruction = itemBody.instruction || data.instruction;
        data.differentiation = itemBody.differentiation || data.differentiation;
        data.assessment = itemBody.assessment || data.assessment;
        console.log('Lesson ', request.params.id, ' was updated');

        return data.save();
      })
        .then(data => {
          return response.json(data);
        })
        .catch(err => {
          return next(err);
        });
  },

  delete: (request, response, next) => {
    const query = request.params.id;

    LessonModel.findByIdAndRemove(query).exec()
      .then(data => {
        console.log('Lesson ', query, 'was deleted');
        return response.json(data);
      })
      .catch(err => {
        console.log('This is from LPController, 78', query);
        console.log('This is from LPController, 79', err.message);
        return next(err);
      });
  }
};

export default LessonController;
