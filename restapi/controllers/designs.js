const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Designs.find().populate('creator')
            .then((designs) => res.send(designs))
            .catch(next);
    },

    post: (req, res, next) => {
        const {image , category} = req.body;
        const { _id } = req.user;
        console.log(image)
        console.log(category)
        console.log(_id )

        models.Designs.create({ image , category, creator: _id })
            .then((createdDesign) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { created: createdDesign } }),
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
        const { image , category } = req.body;
        models.Designs.updateOne({ _id: id }, { image , category  })
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