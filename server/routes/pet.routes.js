const PetController = require('../controllers/pet.controller');
 
module.exports = app => {
    app.get('/api/pets', PetController.findAllRecords);
    app.get('/api/pets/:id', PetController.findOneRecord);
    app.put('/api/pets/:id', PetController.updateExistingRecord);
    app.post('/api/pets', PetController.createNewRecord);
    app.delete('/api/pets/:id', PetController.deleteExistingRecord);
}
