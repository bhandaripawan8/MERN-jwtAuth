
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

module.exports.createSecretToken = (id) =>{
    return jwt.sign({id}, process.env.TOKEN_KEY, {
        expiresIn: 3 * 24 * 60 * 60,
    })
}