import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

async function createTTLIndex() {
    const uri = process.env.DATABASE_URL; 
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const db = client.db('Cluster0'); 
        const collection = db.collection('User'); 

        // Create the TTL index on the 'createdAt' field, with a 30-day expiration (in seconds)
        await collection.createIndex({ createdAt: 1 }, { expireAfterSeconds: 30 * 24 * 60 * 60 });

        console.log('TTL index created successfully!'); 
    } catch (err) {
        console.error('Error creating TTL index:', err);
    } finally {
        await client.close();
    }
}

// Call the function to create the TTL index
createTTLIndex();

export {prisma}
