// @mui
import {
  Stack,
  IconButton,
  InputAdornment,
} from "@mui/material";
// components
import {
  Phone,
  Person,
  AuthForm,
  AuthFormLink,
  AuthFormText,
  AuthFormTitle,
  AuthFormInput,
  AuthSubmitButton,
} from "../Authoration/AuthStyled";
import React from "react";
import useToken from "../../Hooks/UseToken";
import { useNavigate } from "react-router-dom";
import { Authoration } from "../Authoration/Authoration";

export const Register = () => {
  const initialState = {
    number: "",
    fullName: "",
  };
  const navigate = useNavigate();
  const { token, setToken } = useToken();
  const [formData, setFormData] = React.useState({...initialState});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };
  const handleSubmit = () => {
    setToken(formData?.fullName)
    navigate("/");
  };
  React.useEffect(() => {
    if(token) {
      navigate("/");
    }
  }, [])
  return (
    <Authoration>
      <AuthForm>
        <AuthFormTitle>Register</AuthFormTitle>
        <AuthFormInput
          // error={true}
          name="fullName"
          value={formData?.fullName}
          onChange={handleChange}
          placeholder="Full name"
          type="text"
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <Person />
              </IconButton>
            </InputAdornment>
          }
        />

        <AuthFormInput
          name="number"
          value={formData?.number}
          placeholder="+998 __  ___  __  __"
          type="number"
          onChange={handleChange}
          required
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <Phone />
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
          Register
        </AuthSubmitButton>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <AuthFormText>Already have an account?</AuthFormText>
          <AuthFormLink to="/login">Log In</AuthFormLink>
        </Stack>

        {/* authFirebase-------------------------- */}
        {/* <Stack direction="row" spacing={2}>
          <Button fullWidth size="large" color="inherit" variant="outlined">                
            <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
          </Button>
          <Button fullWidth size="large" color="inherit" variant="outlined">
            <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
          </Button>
          <Button fullWidth size="large" color="inherit" variant="outlined">
            <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
          </Button>
        </Stack> */}
      </AuthForm>
    </Authoration>
  )
}
