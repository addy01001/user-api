import { model, Schema } from "mongoose";
import { IUser } from "./interface";

const schema=new Schema<IUser>({
    name: String,
    email: {type: String, unique: true},
    dob: {type: Date},
})

export const UserModel=model("users", schema)