import { Drafts } from "@mui/icons-material";

import styles from "./home.module.css";
import Input from "../components/input";
import MainComponent from "../components/mainComponent";

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainUpper}>
        <div className={styles.latestUpdate}>
          <button>
            <Drafts />
          </button>
          <h2>Keep up with the latest</h2>
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
        </div>

        <Input />
      </div>

      <hr className="mt-16 mb-16" />

      <div className={styles.mainLower}>
        <div className={styles.ourSupport}>
          <div className="flex justify-center items-center gap-3">
            <img src="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_0_457)'%3e%3cmask%20id='mask0_0_457'%20style='mask-type:luminance'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='40'%20height='40'%3e%3cpath%20d='M40%200H0V40H40V0Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_0_457)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20%200H0L20%2020H0L20%2040H40L20%2020H40L20%200Z'%20fill='%235235E8'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_0_457'%3e%3crect%20width='40'%20height='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" />
            <h2>IQTEST.ai</h2>
          </div>
          <p>Test your IQ in a very easy and simple step not complex.</p>
        </div>
        <div className={styles.components}>
          <MainComponent
            title="IQTEST"
            link1="Quiz"
            link2="Results"
            link3="Pricing"
          />
          <MainComponent
            title="Support"
            link1="Help"
            link2="FAQ"
            link3="Contact"
          />
          <MainComponent
            title="Legal"
            link1="Privacy Policy"
            link2="Term of Service"
            link3="Cookies Policy"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
