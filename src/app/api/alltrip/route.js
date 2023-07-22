import { MongoClient } from "mongodb";
import { title } from "process";
export async function GET(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://Jijnashu:Jijnashu99@cluster0.6ifdblb.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const allTripCollection = db.collection("trip");
  const result = await allTripCollection.find().toArray();
  const data = result.map((result) => {
    return {
      title: result.title,
      image: result.image,
      id: result._id.toString(),
      address: result.address,
    };
  });
  const resData = JSON.stringify(data);
  //   return new Response(data);
  return new Response(resData);
}
