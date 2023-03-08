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
} from "../Authoration/AuthStyled";
import React from "react";
// import useToken from "../../Hooks/UseToken";
import { Authoration } from "../Authoration/Authoration";

export const Login = () => {
  const initialState = {
    name: "",
    password: "",
  };
  // const { token, setToken } = useToken();
  const [formData, setFormData] = React.useState({...initialState})
  const [showPassword, setShowPassword] = React.useState(false)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {}
  return (
    <Authoration>
      <AuthForm>
        <AuthFormTitle>Log in</AuthFormTitle>
        <AuthFormInput
          name="name"
          onChange={handleChange}
          placeholder="+998 __  ___  __  __"
          type="number"
          value={formData?.name}
        />

        <AuthFormInput
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
          // type="submit"
          variant="contained"
          onClick={handleSubmit}
        >
          Login
        </AuthSubmitButton>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <AuthFormText>Don’t you have an account?</AuthFormText>
          <AuthFormLink to="/register">Register</AuthFormLink>
        </Stack>
      </AuthForm>
    </Authoration>
  )
}
