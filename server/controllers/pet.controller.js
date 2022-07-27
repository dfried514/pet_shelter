const Pet = require('../models/pet.model');

module.exports.findAllRecords = (req, res) => {
    Pet.find()
        .then(allRecords => res.json({ records: allRecords }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneRecord = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(oneRecord => res.json({ record: oneRecord }))
        .catch(error => res.status(400).send(error));
}
 
module.exports.createNewRecord = (req, res) => {
    Pet.create(req.body)
        .then(newRecord => res.json({ record: newRecord }))
        .catch(error => res.status(400).send(error));
}

module.exports.updateExistingRecord = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedRecord => res.json({ record: updatedRecord }))
        .catch(error => res.status(400).send(error));
}
 
module.exports.deleteExistingRecord = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
