import Image from "next/image";
import classes from "./TripDetail.module.css";
export default function TripDetail(props) {
  return (
    <section className={classes.detail}>
      <Image src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
