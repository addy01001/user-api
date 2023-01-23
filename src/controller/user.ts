import { Request } from "express";
import { Types } from "mongoose";
import UserDal from "../dal/user";
import { apiResponse } from "../helper/apiResponse";
import { IUser } from "../models/user/interface";

export default class UserController {
    private user:UserDal
    constructor(userDal:UserDal | any=UserDal){
        this.user=new userDal()
    }
    public createUser=async(req:Request)=>{
        try{
            let payload=req.body as IUser
            let result=await this.user.create(payload)
            if(!result){
                return apiResponse(400, false, undefined, "Not found")
            }
            return apiResponse(200, true, result._id, "Successful")

        }catch(err){
            console.log(err)
            return apiResponse(500, false, undefined, err instanceof Error? err.message: "Server error")
        }
    }

    public getById=async(req:Request)=>{
        try{
            let id= req.params.id
            if(!Types.ObjectId.isValid(id)){
                return apiResponse(400, false, undefined, "Invalid Id")
            }
            let result= await this.user.get(id)
            if(!result){
                return apiResponse(404, false, undefined, "Not found")
            }
            return apiResponse(200, true, result, "Successful")
        }catch(err){
            console.log(err)
            return apiResponse(500, false, undefined, err instanceof Error? err.message: "Server error")
        }   
    }
        
    public delete=async(req:Request)=>{
        try{
            let id= req.params.id
            if(!Types.ObjectId.isValid(id)){
                return apiResponse(400, false, undefined, "Invalid Id")
            }
            let result= await this.user.delete(id)
            if(!result){
                return apiResponse(404, false, undefined, "Not found")
            }
            return apiResponse(200, true, result, "Delete successful")
        }catch(err){
            console.log(err)
            return apiResponse(500, false, undefined, err instanceof Error? err.message: "Server error")
        }   
    }

}