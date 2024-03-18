import styles from "./footer.module.css";

import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyRight}>&copy; 2024 IQTEST.AI</div>

      <div className={styles.social}>
        <button>
          <Instagram />
        </button>
        <button>
          <Facebook />
        </button>
        <button>
          <Twitter />
        </button>
        <button>
          <LinkedIn />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
