import SubjectModel from '../models/SubjectModel';

const SubjectController = {
  create: (request, response, next) => {
    const addedSubject = new SubjectModel(request.body);

    addedSubject.save()
      .then(() => {
        return response.json(addedSubject);
      })
      .catch(err => {
        return next(err);
      });
  },

  list: (request, response, next) => {
    SubjectModel.find({}).exec()
      .then(data => {
        console.log('Subject DB fetched');
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  },

  listOne: (request, response, next) => {
    const query = request.params.id;

    SubjectModel.findById(query)
      .then(data => {
        console.log('Subject DB, individual was requested,');
        return response.json(data);
      })
      .catch(err => {
        return next(err);
      });
  },

  update: (request, response, next) => {
    const itemBody = request.body;
    // @TODO need to change this data structure to match what the Subject plan will look like
    SubjectModel.findById(request.params.id).exec()
      .then(data => {
        data.username = itemBody.username || data.username;
        data.title = itemBody.title || data.title;
        data.gradeLevel = itemBody.gradeLevel || data.gradeLevel;
        data.summary = itemBody.summary || data.summary;
        console.log('Subject ', request.params.id, ' was updated');
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

    SubjectModel.findByIdAndRemove(query).exec()
      .then(data => {
        console.log('Subject ', query, 'was deleted');
        return response.json(data);
      })
      .catch(err => {
        console.log('This is from SubjectController, 69', query);
        console.log('This is from SubjectController, 70', err.message);
        return next(err);
      });
  }
};

export default SubjectController;
