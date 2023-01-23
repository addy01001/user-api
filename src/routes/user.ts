import express from 'express'
import UserController from '../controller/user'

export default class UserRoute {
    private userCtrl= new UserController
    private router = express.Router()
    constructor() {
        this.initRoutes()
    }
    public initRoutes() {
        this.router.route('/user').post(async (req, res) => {
            let response=await this.userCtrl.createUser(req)
            res.status(200).send({status: response.status, message: response.message, data: response.data})
        })

        this.router.route('/user/:id').get(async (req, res) => {
            let response=await this.userCtrl.getById(req)
            res.status(200).send({status: response.status, message: response.message, data: response.data})
        })

        this.router.route('/user/:id').delete(async (req, res) => {
            let response=await this.userCtrl.delete(req)
            res.status(200).send({status: response.status, message: response.message, data: response.data})
        })
            
    }
}