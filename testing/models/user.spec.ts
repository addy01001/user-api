import { expect } from "chai";
import { UserModel } from "../../src/models/user";
import { negativeData, positiveData1 } from "./user.mock";

describe("User Model test", () => {
    it("Positive test", (done) => {
        let user=new UserModel(positiveData1)
        expect(user.name).to.be.not.undefined
        expect(user.email).to.be.not.undefined
        expect(user.dob).to.be.instanceOf(Date)
        done()
    })

    it("Negative test", (done) => {
        let user=new UserModel(negativeData)
        expect(user.name).to.be.not.undefined
        expect(user.email).to.be.not.undefined
        expect(user.dob).to.be.undefined
        done()
    })

})