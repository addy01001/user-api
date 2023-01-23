import express from 'express'

export default class DefaultRoute {
    private router = express.Router()
    constructor() {
        this.initRoutes()
    }
    public initRoutes() {
        this.router.route('/').get(async (_, res) => {
            res.status(200).send("Service is running")
        })
    }
}