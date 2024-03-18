import { NavLink } from "react-router-dom";

function Legal() {
  return (
    <div>
      <p>Legal</p>
      <NavLink to="">Privacy Policy</NavLink>
      <NavLink to="">Terms of Service</NavLink>
      <NavLink to="">Cookies Policy</NavLink>
    </div>
  );
}

export default Legal;
