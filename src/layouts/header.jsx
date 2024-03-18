import { NavLink } from "react-router-dom";

import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        IQTEST.ai
      </NavLink>

      <nav className={styles.navlink}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/test">Start Test</NavLink>
        <NavLink to="/certificate">Check Certificate</NavLink>
        <NavLink to="/pricing">Pro Pricing</NavLink>
      </nav>

      <div className={styles.navButton}>
        <button>English</button>
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;
