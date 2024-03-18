import { Link } from "react-router-dom";

import styles from "./main.module.css";

function Main({ title, link1, link2, link3 }) {
  return (
    <div className={styles.main}>
      <p>{title}</p>
      <Link to="" className="opacity-50">
        {link1}
      </Link>
      <Link to="" className="opacity-50">
        {link2}
      </Link>
      <Link to="" className="opacity-50">
        {link3}
      </Link>
    </div>
  );
}

export default Main;
