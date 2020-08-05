const models = require('../models');

module.exports = {
    get: (req, res, next) => {
      const length = req.query.length ? parseInt(req.query.length) : 20
        models.Designs.find().limit(length).populate('creator')
            .then((designs) => res.send(designs))
            .catch(next);
    },

    post: (req, res, next) => {
        const { title , img , category} = req.body;
        const { _id } = req.user;

        models.Designs.create({  title , img , category, creator: _id })
            .then((createdDesign) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { createdPosts: createdDesign } }),
                    models.Designs.findOne({ _id: createdDesign._id })
                ]);
            })
            .then(([modifiedObj, designObj]) => {
                res.send(designObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const {  title , img , category } = req.body;
        models.Designs.updateOne({ _id: id }, { title , img , category  })
            .then((updatedDesign) => res.send(updatedDesign))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Designs.deleteOne({ _id: id })
            .then((removedDesign) => res.send(removedDesign))
            .catch(next)
    }
};