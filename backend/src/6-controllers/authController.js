import express from "express"
import authLogic from "../5-logic/authLogic.js"


const router = express.Router()

router.post("/auth/register", async(request, response, next)=> {
    try {
        const token = await authLogic.register(request.body)
        response.status(201).json(token)
    }
    catch(err) {
        console.log(err)
        next(err)
    }
})

router.post("/auth/login", async(request, response, next)=> {
    try {
        const userInfo = await authLogic.login(request.body)
        response.json(userInfo)
    }
    catch(err) {
        next(err)
    }
})


export default router