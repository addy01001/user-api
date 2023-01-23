import { UserModel } from "../../models/user";
import { IUser } from "../../models/user/interface";
import { Generic } from "../generic";

export default class UserDal extends Generic<IUser> {
  constructor() {
    super(UserModel, "_id")
  }

}