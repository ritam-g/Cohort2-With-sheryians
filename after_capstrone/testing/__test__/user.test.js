import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import userModel from '../model/user.model.js';

let mongoServer;

export const connect = async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
};

export const disconnect = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
    await mongoServer.stop();
};

export const clearCollections = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
};


beforeAll(async () => await connect());
afterAll(async  () => await disconnect());
afterEach(async () => await clearCollections()); // clean slate per test


describe('User Model Test', () => {
    it(`create & save user succesfully`,async()=>{
        const userData={name:`Test User`, email:`test@example.com`, password:`password123`}
        const validUser=await userModel.create(userData)
        expect(validUser._id).toBeDefined();
        expect(validUser.name).toBe(userData.name);
        expect(validUser.email).toBe(userData.email);
        expect(validUser.password).toBe(userData.password);
    })
})