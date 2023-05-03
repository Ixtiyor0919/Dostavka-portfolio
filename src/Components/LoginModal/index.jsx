import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
//---material ui---//
import {
  Fade,
  Modal,
  Backdrop,
  IconButton,
  InputAdornment,
  Grid,
  Divider,
  Stack,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Typography,
} from "@mui/material";
//---components---//
import {
  EaseOn,
  EaseOff,
  AuthForm,
  LoginButton,
  AuthWrapper,
  LoginButtonHr,
  LoginButtonIcon,
  LoginButtonText,
  AuthSubmitButton,
} from "./StyleComponent";
import { CloseButton } from "../CloseButton/CloseButton";
import FirebaseSocial from "../FirebaseSocial/FirebaseSocial";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />
// })
const LoginModal = ({drawer, header}) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleToggle = () => {
    setOpen(!open)
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <LoginButton onClick={handleToggle} header={header} drawer={drawer}>
        <LoginButtonHr header={header} drawer={drawer} />
        <LoginButtonIcon />
        <LoginButtonText>{t("login-btn")}</LoginButtonText>
      </LoginButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <AuthWrapper>
            <CloseButton toggle={handleClose} modal />
            <Formik
              initialValues={{
                number: "+998",
                password: "",
                submit: null,
              }}
              validationSchema={Yup.object().shape({
                number: Yup.number("Must be a valid number")
                  .max(12)
                  .required("number is required"),
                password: Yup.string()
                  .max(255)
                  .required("Password is required"),
              })}
              onSubmit={async (
                values,
                { setErrors, setStatus, setSubmitting }
              ) => {
                setLoading(true)
                try {
                  setStatus({ success: false })
                  setSubmitting(false)
                } catch (err) {
                  setStatus({ success: false })
                  setErrors({ submit: err.message })
                  setSubmitting(false)
                }
                setLoading(false)
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values,
              }) => (
                <AuthForm noValidate onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="number-login">Number</InputLabel>
                        <OutlinedInput
                          id="number-login"
                          type="number"
                          value={values.email}
                          name="number"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Enter number"
                          fullWidth
                          error={Boolean(touched.number && errors.number)}
                        />
                        {touched.number && errors.number && (
                          <FormHelperText
                            error
                            id="standard-weight-helper-text-number-login"
                          >
                            {errors.number}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item xs={12}>
                      <Stack spacing={1}>
                        <InputLabel htmlFor="password-login">
                          Password
                        </InputLabel>
                        <OutlinedInput
                          fullWidth
                          error={Boolean(touched.password && errors.password)}
                          id="-password-login"
                          type={showPassword ? "text" : "password"}
                          value={values.password}
                          name="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                size="large"
                              >
                                {showPassword ? <EaseOn /> : <EaseOff />}
                              </IconButton>
                            </InputAdornment>
                          }
                          placeholder="Enter password"
                        />
                        {touched.password && errors.password && (
                          <FormHelperText
                            error
                            id="standard-weight-helper-text-password-login"
                          >
                            {errors.password}
                          </FormHelperText>
                        )}
                      </Stack>
                    </Grid>

                    {errors.submit && (
                      <Grid item xs={12}>
                        <FormHelperText error>{errors.submit}</FormHelperText>
                      </Grid>
                    )}
                    <Grid item xs={12}>
                      <AuthSubmitButton
                        // disableElevation
                        // disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        loading={isSubmitting}
                        variant="contained"
                        loadingPosition="end"
                        onClick={handleSubmit}
                      >
                        {t('login-btn')}
                      </AuthSubmitButton>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider>
                        <Typography variant="caption">Login with</Typography>
                      </Divider>
                    </Grid>
                    <Grid item xs={12}>
                      <FirebaseSocial />
                    </Grid>
                  </Grid>
                </AuthForm>
              )}
            </Formik>
          </AuthWrapper>
        </Fade>
      </Modal>
    </>
  )
}

export default LoginModal
