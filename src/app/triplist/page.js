import { MongoClient } from "mongodb";
import AllTripList from "../../component/meetups/AllTripList";
async function getAllTripListHandler() {
  // const res = await fetch("http://localhost:3000/api/alltrip", {
  //   method: "GET",
  // });
  // console.log(res);
  // return res.json();
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
  return data;
  // const resData = JSON.stringify(data);
}
export default async function HomePage() {
  const loadedTrips = await getAllTripListHandler();
  return <AllTripList meetups={loadedTrips} />;
}

/* NOT WORKING */
// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_TRIP,
//     },
//   };
// }
// // console.log(await getStaticProps());
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_TRIP,
//     },
//   };
// }
// export default HomePage;
