import { MongoClient, ObjectId } from "mongodb";
import TripDetail from "../../component/meetups/TripDetail";
const tripDetailsHandler = async (id) => {
  const client = await MongoClient.connect(
    "mongodb+srv://Jijnashu:Jijnashu99@cluster0.6ifdblb.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const tripCollection = db.collection("trip");
  const result = await tripCollection.findOne({ _id: new ObjectId(id) });

  const data = {
    id: result._id.toString(),
    title: result.title,
    address: result.address,
    image: result.image,
    description: result.description,
  };
  return data;
};
async function News({ params }) {
  // console.log(params.tripId);
  const data = await tripDetailsHandler(params.tripId);
  // console.log("My data:", data);
  return (
    <TripDetail
      image={data.image}
      title={data.title}
      address={data.address}
      description={data.description}
    />
  );
}
export default News;
