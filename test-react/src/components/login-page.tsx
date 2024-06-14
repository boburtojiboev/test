import React, { useState } from "react";
import "../css/signup.css";
import { Fab, TextField } from "@mui/material";
import assert from "assert";
import { Definer } from "../lib/Definer";
import MemberApiService from "../app/apiServices/memberApiService";
function Login(props: any) {
  // const classes = useStyles();
  const [mb_nick, set_mb_nick] = useState<string>("");
  const [mb_password, set_mb_password] = useState<string>("");

  /** HANDLERS */
  const handleUsername = (e: any) => {
    set_mb_nick(e.target.value);
  };
  const handlePassword = (e: any) => {
    set_mb_password(e.target.value);
  };

  const handleLoginRequest = async () => {
    try {
      const is_fullfilled = mb_nick !== "" && mb_password !== "";
      assert.ok(is_fullfilled, Definer.input_err1);

      const login_data = {
        mb_nick: mb_nick,
        mb_password: mb_password,
      };

      const memberApiService = new MemberApiService();
      await memberApiService.loginRequest(login_data);

      window.location.reload();
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  return (
    <div className={"main_wrap"}>
      <div className="wrap_top">
        <h2>Login Form</h2>
        <TextField
          onChange={handleUsername}
          sx={{ marginTop: "7px" }}
          id="outlined-basic"
          label="username"
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
          onClick={handleLoginRequest}
          sx={{ mt: "30px", width: "120px" }}
          variant="extended"
          color="primary"
        >
          Login
        </Fab>
      </div>
    </div>
  );
}

export default Login;
