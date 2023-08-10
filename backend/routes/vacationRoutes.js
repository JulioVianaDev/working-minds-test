const router = require('express').Router()
const vacationController = require('../controllers/vacationController')

router.get('/',vacationController.getVacations)
router.post('/createVacation',vacationController.createVacantion)
router.delete('/deleteVacation/:id',vacationController.deleteVacation)
router.get('/vacationsUser/:id',vacationController.getVacationsForUser)
router.get('/usersWithVacations',vacationController.getUsersWithVacations)


module.exports  = router