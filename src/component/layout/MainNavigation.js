import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>MY ALL TRIPS</div>
      <nav>
        <ul>
          <li>
            <Link href="/triplist">All Trips</Link>
          </li>
          <li>
            <Link href="/newtrip">Add New Trip</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
