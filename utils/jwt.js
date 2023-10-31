const jwt= require("jsonwebtoken")


const generateToken=(user)=>{
    console.log('generateToken=>',user);
    const expirationToken = new Date();
    //De la variable que tiene la fecha actual y hora se consulta la hora y se le suma una hora
    expirationToken.setHours(expirationToken.getHours() +1)
    //Generamos el payload del jwt
    const payload = {
        id: user._id,
        email:user._email,
        iat:Date.now,
        exp:parseInt(expirationToken.getTime()/1000)
    }
    //Generamos el token
    const token=jwt.sign(JSON.stringify(payload),proccess.env.SECRET_KEY)
    console.log(token)

}
const refreshToken=(user)=>{
    console.log(user);
    const expirationToken=new Date()
    expirationToken.setMonth(expirationToken.getMonth()+1);
    const payload = {
        id: user._id,
        email:user._email,
        iat:Date.now,
        exp:expirationToken.getTime(),
    }
    const refresh=jwt.sign(JSON.stringify(payload),proccess.env.SECRET_KEY)
    return refresh
}
const decodeAccessToken=()=>{
    const verifyToken=jwt.verify(token,proccess.env.SECRET_KEY)
    return verifyToken;
}

//registro
//login
//funcion de generar Token
module.exports = {
    generateToken,
    refreshToken,
    decodeAccessToken,
};