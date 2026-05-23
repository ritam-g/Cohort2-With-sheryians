import mongoose from "mongoose";
import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";

import app from "../app.js";
import userModel from "../model/user.model.js";

let mongoServer;

beforeAll(async () => {

    mongoServer = await MongoMemoryServer.create();

    const uri = mongoServer.getUri();

    await mongoose.connect(uri);

});

afterAll(async () => {

    await mongoose.connection.dropDatabase();

    await mongoose.connection.close();

    await mongoServer.stop();

});

afterEach(async () => {

    await userModel.deleteMany();

});


describe("POST /users", () => {
    it("should create a new user", async () => {
        const userData = {
            name: "Test User",
            email: "test@example",
            password: "password123",
        };

        const response = await request(app)
            .post("/users")
            .send(userData)
            .expect(201);

        expect(response.body.success).toBe(true);

        expect(response.body.user).toHaveProperty("_id");

        expect(response.body.user.name)
            .toBe(userData.name);

        expect(response.body.user.email)
            .toBe(userData.email);

        expect(response.body.user.password)
            .toBe(userData.password);

    })
})