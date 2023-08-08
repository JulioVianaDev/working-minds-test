const router = require('express').Router()
const vacationController = require('../controllers/vacationController')

router.get('/',vacationController.getVacations)
router.post('/createVacation',vacationController.createVacantion)
router.delete('/deleteVacation/:id',vacationController.deleteVacation)
router.patch('/editVacation/:id',vacationController.editUser)


module.exports  = router