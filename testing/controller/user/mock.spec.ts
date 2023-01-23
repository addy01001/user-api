import { Request } from "express"
import { Document, Types } from "mongoose"
import { IUser } from "../../../src/models/user/interface"

export const createUser = () => {
    let req = {} as Request
    req.body = {
        name: "John",
        email: "johnny@yopmail.com",
        dob: "Johny1"
    }
    return req
}

export const deleteUser = () => {
    let req = {} as Request
    req.params = {
        id: "507f191e810c19729de860ea"
    }
    return req
}

export const negativedeleteUser = () => {
    let req = {} as Request
    req.params = {
        id: "4122"
    }
    return req
}


export const LoginDoc = () => {
    let doc = {} as Document<unknown, any, IUser> & IUser & { _id: Types.ObjectId | undefined }
    doc.name = "John"
    return doc
}

export class UserDalStubbed {
    public create=async()=>{
        return {_id: 829379123}
    }

    public delete=async()=>{
        return {_id: 829379123}
    }
    public get=async()=>{
        return {_id: 829379123}
    }
}
