const User = require('../models/User.js')
const jwt = require("jsonwebtoken")
const bcrypt = require ("bcryptjs")
const keys = require("../config/keys.js")

module.exports.login = async function(req, res){
    const candidate = await User.findOne({email: req.body.email})
    if (candidate){
        // Проверка пароля
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            // Пароли совпали
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.jwt, {expiresIn: 60 * 60})

            res.status(200).json({
                token: `Bearer ${token}`
            })
        }


        else{
            // Пароли не совпали
            res.status(401).json({
                message: "Пароль не верен. Попробуйте снова."
            })
        }
    }else{
        // Пользователя нет, ошибка
        res.status(404).json({
            message: "Пользователь не найден"
        })
    }
}

module.exports.register = async function (req, res){

    const candidate = await User.findOne({email: req.body.email}) 
    

    if (candidate){
        res.status(409).json({
            message: "Email уже занят!"
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })

        try {
            await user.save()
            res.status(201).json(user) // обрабатывает ошибку
        } catch(e) {
            
        }
    }
}
