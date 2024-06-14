import React, { useState } from "react";
import "../css/signup.css";
import { Fab, TextField,} from "@mui/material";
import assert from "assert";
import MemberApiService from "../app/apiServices/memberApiService";
import { Definer } from "../lib/Definer";
function Signup(props: any) {
    // const classes = useStyles();
      const [mb_nick, set_mb_nick] = useState<string>("");
      const [mb_email, set_mb_email] = useState<string>("");
      const [mb_password, set_mb_password] = useState<string>("");

  /** HANDLERS */
  const handleUsername = (e: any) => {
    set_mb_nick(e.target.value);
  };
  const handleEmail = (e: any) => {
    set_mb_email(e.target.value);
  };
  const handlePassword = (e: any) => {
    set_mb_password(e.target.value);
  };

   const handleSignupRequest = async () => {
     try {
       const is_fullfilled =
         mb_nick !== "" && mb_password !== "" && mb_email !== "";
       assert.ok(is_fullfilled, Definer.input_err1);

       const sign_data = {
         mb_nick: mb_nick,
         mb_email: mb_email,
         mb_password: mb_password,
       };

       const memberApiService = new MemberApiService();
       await memberApiService.signupRequest(sign_data);

       props.handleSignupClose();
       window.location.reload();
     } catch (err) {
       console.log(err);
       alert(err);
     }
   };
  return (
    <div className={"main_wrap"}>
      <div className="wrap_top">
        <h2>Signup Form</h2>
        <TextField
          onChange={handleUsername}
          sx={{ marginTop: "7px" }}
          id="outlined-basic"
          label="username"
          variant="outlined"
        />
        <TextField
          onChange={handleEmail}
          sx={{ marginTop: "7px" }}
          id="outlined-basic"
          label="email"
          variant="outlined"
        />
        <TextField
          onChange={handlePassword}
          sx={{ marginTop: "7px" }}
          id="outlined-basic"
          label="password"
          variant="outlined"
        />

        <Fab
          onClick={handleSignupRequest}
          sx={{ mt: "30px", width: "120px" }}
          variant="extended"
          color="primary"
        >
          Signup
        </Fab>
      </div>
    </div>
  );
}

export default Signup;

