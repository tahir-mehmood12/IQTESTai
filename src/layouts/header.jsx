import { NavLink } from "react-router-dom";

import styles from "./header.module.css";
import { KeyboardArrowDown } from "@mui/icons-material";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <NavLink to="/" className={styles.logo}>
          <img src="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_0_457)'%3e%3cmask%20id='mask0_0_457'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='40'%20height='40'%3e%3cpath%20d='M40%200H0V40H40V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_0_457)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20%200H0L20%2020H0L20%2040H40L20%2020H40L20%200Z'%20fill='%235235E8'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_457'%3e%3crect%20width='40'%20height='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" />
          IQTEST.ai
        </NavLink>
      </div>

      <nav className={styles.navlink}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLinks
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/test"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLinks
          }
        >
          Start Test
        </NavLink>
        <NavLink
          to="/certificate"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLinks
          }
        >
          Check Certificate
        </NavLink>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.navLinks
          }
        >
          Pro Pricing
        </NavLink>
      </nav>

      <div className={styles.navButton}>
        <div className={styles.options}>
          <button>
            English
            <KeyboardArrowDown />
          </button>
        </div>
        <button>Login</button>
      </div>
    </header>
  );
}

export default Header;
