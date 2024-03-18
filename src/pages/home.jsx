import { Drafts } from "@mui/icons-material";

import styles from "./home.module.css";
import Input from "../components/input";
import Iqtest from "../components/iqtest";
import Support from "../components/support";
import Legal from "../components/legal";

function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div>
          <button>
            <Drafts />
          </button>
          <p>Keep up with the latest</p>
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
        </div>

        <Input />
      </div>

      <hr />

      <div>
        <div>
          <h2>IQTEST.ai</h2>
          <p>Test your IQ in a very easy and simple step not complex.</p>
        </div>
        <Iqtest />
        <Support />
        <Legal />
      </div>
    </main>
  );
}

export default Home;
