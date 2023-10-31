const userModel = require("../models/user");
const {generateToken} = require("../utils/jwt");
const bcrypt= require("bcrypt")

// Crear la funcion para el registro sign in
const signin= async (req, res) => {
    const {firstName,lastname,email,current_password}=req.body
    try{
        if(!email){
            res.status(400).json({message: "Invalid email"})
        }
        if(!current_password){
            res.status(400).json({message: "Invalid current password"})
        }
        const emailLowerCase = email.toLowerCase()
        const salt= await bcrypt.genSalt(10)
        const current_password_hash= await bcrypt.hash(current_password,salt)

        console.log(emailLowerCase,current_password_hash)

        const newUser=await userModel.create({
            firstName,
            lastName,
            email:emailLowerCase,
            current_password:current_password_hash,
        })
        const userStorage=await newUser.save()
        res.status(201).json(userStorage)

    }
    catch(err){
        res.status(404).json({message: err.message});
    }
}

const login= async (req, res) => {
    const{email,current_password} = req.body
    console.log(req.body)

    try{    
        if(!email||!current_password){
            throw new Error("E l email y la contraseña son obligatorios")
        }
        const emailLowerCase = email.toLowerCase()
        console.log(emailLowerCase)

        const userStore= await userModel.findOne({ email: emailLowerCase }).exec()
        if(userStore){
            throw new Error("El usuario no existe");
        }
        const token=await userStore.generateToken(userStore);
        console.log(token)
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
}
const getMe= async (req, res) => {
    try{
        const {id}

    }
    catch(err){
    }
}

module.exports={
    signin,
    login,
    
}