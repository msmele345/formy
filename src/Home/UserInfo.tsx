import { useContext } from "react";
import FormContext from "../store/form-context";

const UserInfo = () => {

  const ctx = useContext(FormContext);

    return (
      <section style={{'marginLeft': '430px', 'marginTop': '30px'}}>
        <h3>User Profile</h3>
          <p>{ctx.firstName}</p>
          <p>{ctx.email}</p>
      </section>
    )
};

export default UserInfo;


