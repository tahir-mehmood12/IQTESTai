import styles from "./input.module.css";

function Input() {
  return (
    <div className={styles.main}>
      <h2>Stay up to date</h2>
      <div className={styles.input}>
        <input type="email" placeholder="Enter your Email" />
        <button>Subscribe</button>
      </div>
      <p>By subscribing you agree with our Privacy Policy</p>
    </div>
  );
}

export default Input;
