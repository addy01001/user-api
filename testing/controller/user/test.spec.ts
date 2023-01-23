import { expect } from "chai";
import UserController from "../../../src/controller/user";
import { createUser, deleteUser, negativedeleteUser, UserDalStubbed } from "./mock.spec";
const user=new UserController(UserDalStubbed)

describe("User Controller test", () => {
    describe("User create test", () => {
        it("Positive test", async() => {
            let res= await user.createUser(createUser())
            expect(res.code).to.be.equal(200)
        })
    })

    describe("User delete test", () => {
        it("Positive test", async() => {
            let res= await user.delete(deleteUser())
            expect(res.code).to.be.equal(200)
        })

        it("Negative test- Invalid id", async() => {
            let res= await user.delete(negativedeleteUser())
            console.log(res)
        })
        

    })
    describe("User get test", () => {
        it("Positive test", async() => {
            let res= await user.delete(deleteUser())
            expect(res.code).to.be.equal(200)
        })

        it("Negative test- Invalid id", async() => {
            let res= await user.delete(negativedeleteUser())
            console.log(res)
        })
    })
})