import mongoose from "mongoose";
import { User } from "src/user/schema/user.schema";

export const userStub = (): User => {
    return {
        _id: new mongoose.Types.ObjectId("63255d5dc828255fd670f896"),
       email: 'test@example.com',
       password:'12345678',
    }
}