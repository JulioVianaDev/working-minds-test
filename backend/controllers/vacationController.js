const Vacation = require('../models/Vacation')
const User = require('../models/User')
module.exports = class VacationController{
  static async getVacations(req,res){
    const allVacations = await Vacation.find()
    res.json(allVacations)
  }

  static async createVacantion(req,res){
    const {
      start,
      end,
      days,
      userId,
      userName,
      imageUrl
    }= req.body
    console.log(req.body)
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDifferenceInDays = Math.ceil((endDate - startDate) / (24 * 60 * 60 * 1000));

    if (timeDifferenceInDays < days - 1) {
      return res.status(400).json({ message: "Invalid date range. Difference between start and end should be at least 1 day greater than 'days'." });
    }
    const vacancy = new Vacation({
      start,
      end,
      days,
      userId,
      userName,
      imageUrl
    })
    const user = User.findById(userId)

    try {
      await vacancy.save()
      let subtract = user.days - days
      user.days = subtract
      await user.save()
      res.status(201).json({message: "Ferias cadastrada com sucesso",vacancy: vacancy})
    } catch (error) {
      res.status(500).json({message: "Ocorreu um erro ao cadastrar as ferias, tente novamente mais tarde",error})
    }
  }
  static async deleteVacation(req,res){
    try {
      const vacation = await Vacation.findByIdAndRemove(req.params.id)
      if (!vacation) {
        return res.status(404).json({ message: "ferias não encontrado" });
      }
       res.status(200).json({ message: "ferias excluído com sucesso" });
    } catch (error) {
      console.error(error);
       res.status(500).json({ message: "Ocorreu um erro ao excluir o ferias" });
    }
  }
  
  static async getVacationsForUser(req,res){
    const vacations = await Vacation.find({userId:  req.params.id})
    res.status(200).json(vacations)
  }
  static async getUsersWithVacations(req,res){
    try {
      const vacations = await Vacation.find()
      const users = await User.find()
      const uniqueUserIdsSet = new Set();
      vacations.forEach(vacation => {
        uniqueUserIdsSet.add(vacation.userId);
      });

      // Convert the set to an array
      const userIDList = Array.from(uniqueUserIdsSet);
      const filteredUsers = users.filter(user => userIDList.includes(user._id.toString()));
      res.json(filteredUsers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error while fetching users with vacations.' });
    }
  }
}