import { useContext } from "react";
import FormContext from "../store/form-context";

const UserInfo = () => {

  const ctx = useContext(FormContext);

    return (
      <section style={{'marginLeft': '750px', 'marginTop': '30px'}}>
        { ctx.firstName && ctx.email && (
          <>
            <h2>User Profile</h2>
            <p>{ctx.firstName}</p>
            <p>{ctx.email}</p>
          </>
        )}
      </section>
    )
};

export default UserInfo;


