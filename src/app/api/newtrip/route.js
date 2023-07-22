import { MongoClient } from "mongodb";
export async function POST(req) {
  const data = await req.json();
  const client = await MongoClient.connect(
    "mongodb+srv://Jijnashu:Jijnashu99@cluster0.6ifdblb.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();
  const tripCollection = db.collection("trip");
  const result = tripCollection.insertOne(data);

  return new Response("Ok", { status: 200 });
}
// export async function GET() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://Jijnashu:Jijnashu99@cluster0.6ifdblb.mongodb.net/?retryWrites=true&w=majority"
//   );
//   const db = client.db();
//   const allTripCollection = db.collection("trip");
//   const result = allTripCollection.find().toArray();
//   return result;
// }
