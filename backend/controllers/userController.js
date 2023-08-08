const User = require('../models/User')
const fs = require('fs').promises;


module.exports = class userController{
  static async allUsers(req,res){
    try{
      const users = await User.find();
      res.json(users);
    }catch(erro){
        console.log(erro);
        res.status(500).json({message: "Erro ao pegar todos os produtos."})
    }
  }
  static async registerUser(req,res){
    const {
      name,
      hiring,
      days
    }= req.body

    let image = ""
    if(req.file){
      
      image = `${req.file.filename}`
    }
    const currentDate = new Date(); // Current date
    const hiringDate = new Date(hiring); // Date received in the API

    const timeDifference = currentDate - hiringDate; // Difference in milliseconds
    const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000;

    const yearsDifference = Math.floor(timeDifference / oneYearInMilliseconds);

    const daysToAdd = yearsDifference * 30;
    const imageProtocol =`${req.protocol}://${req.get('host')}/uploads/${image}`

    const user = new User({
      name,
      hiring,
      days: daysToAdd,
      imageUrl:  imageProtocol
    })

    try {
      await user.save()
      res.status(201).json({message: "Usuário cadastrado com sucesso",user})
    } catch (error) {
      res.status(500).json({message: "Ocorreu um erro ao cadastrar o usuário, tente novamente mais tarde"})
    }
  }

  static async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndRemove(req.params.id)
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      // Delete the associated image
      if (user.image) {
        const imagePath = `uploads/${user.image}`;
        await fs.unlink(imagePath);
      }

      res.json({ message: "Usuário excluído com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ocorreu um erro ao excluir o usuário" });
    }
  }
  static async editUser(req, res) {
    try {
      const { name, hiring } = req.body;
  
      let image = "";
      if (req.file) {
        image = req.file.filename;
      }
  
      const user = await User.findById(req.params.id); // Fetch the user by ID
  
    const currentDate = new Date(); // Current date
    const hiringDate = new Date(hiring); // Date received in the API

    const timeDifference = currentDate - hiringDate; // Difference in milliseconds
    const oneYearInMilliseconds = 365 * 24 * 60 * 60 * 1000;

    const yearsDifference = Math.floor(timeDifference / oneYearInMilliseconds);

    const daysToAdd = yearsDifference * 30;
  
      if (image !== "") {
        user.image = image;
      }
      user.days = daysToAdd
      const imageURL = `${req.protocol}://${req.get('host')}/uploads/${user.image}`;
      user.imageUrl = imageURL
      await user.save(); // Save the updated user
  
      res.json({ user });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao editar o usuário." });
    }
  }
  
  

}