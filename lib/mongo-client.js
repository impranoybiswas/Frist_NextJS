import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;

let cachedClient = null;

export default async function connectDB(collectionName) {
  if (!uri) throw new Error("MONGODB_URI is not defined in environment variables");

  // Use cached client if available
  if (cachedClient) {
    return cachedClient.db(dbName).collection(collectionName);
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  cachedClient = client;

  return client.db(dbName).collection(collectionName);
}

