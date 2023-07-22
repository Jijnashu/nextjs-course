import Trip from "./Trip";
import classes from "./AllTripList.module.css";

function AllTripList(props) {
  // console.log(props.meetups);
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <Trip
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default AllTripList;
