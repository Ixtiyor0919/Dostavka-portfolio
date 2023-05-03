// @mui
import { Stack, InputAdornment, IconButton } from "@mui/material";
// components
import {
  EaseOn,
  EaseOff,
  AuthForm,
  AuthFormLink,
  AuthFormText,
  AuthFormTitle,
  AuthFormInput,
  AuthSubmitButton,
} from "../../Components/Authoration/AuthStyled";
import React from "react";
import useToken from "../../Hooks/UseToken";
import { useNavigate } from "react-router-dom";
import { Authoration } from "../../Components/Authoration/Authoration";
import FirebaseSocial from "../../Components/FirebaseSocial/FirebaseSocial";

const Login = () => {
  const initialState = {
    number: "",
    password: "",
  };
  const navigate = useNavigate();
  const { token, setToken } = useToken();
  const [showPassword, setShowPassword] = React.useState(false)
  const [formData, setFormData] = React.useState({...initialState})
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if(token === formData?.number) {
      setToken(formData?.number)
      navigate("/", {replace: true});
    } else {
      navigate("/login", {replace: true})
    }
  }
  return (
    <Authoration>
      <AuthForm>
        <AuthFormTitle>Log in</AuthFormTitle>
        <AuthFormInput
          required
          id="number"
          name="number"
          placeholder="+998 __  ___  __  __"
          type="number"
          onChange={handleChange}
          defaultValue="+998"
          value={formData?.number}
        />

        <AuthFormInput
          required
          id="password"
          name="password"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          value={formData?.password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? (
                  <EaseOff />
                ) : (
                  <EaseOn />
                )}
              </IconButton>
            </InputAdornment>
          }
        />

        <AuthSubmitButton
          size="large"
          type="submit"
          variant="contained"
          onClick={handleSubmit}
        >
          Login
        </AuthSubmitButton>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <AuthFormText>Don’t you have an account?</AuthFormText>
          <AuthFormLink to="/register">Register</AuthFormLink>
        </Stack>
        <FirebaseSocial />
      </AuthForm>
    </Authoration>
  )
};
export default Login;