import React from "react";
import { CloseButton } from "../CloseButton/CloseButton";
import { AddButton, ModalTitle } from "./AdminModalStyled";
import { Fade, Grid, Modal, TextField, Backdrop, Box } from "@mui/material";
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';

export const AdminModal = ({ open, setOpen, branch, food }) => {
  const handleClose = () => setOpen(false)
  const [loading, setLoading] = React.useState(false)
  const style = {
    top: "50%",
    left: "50%",
    maxWidth: "40%",
    minWidth: "380px",
    position: "relative",
    borderRadius: "10px",
    padding: "45px 30px 30px 30px",
    transform: "translate(-50%, -50%)",
    background: "linear-gradient(90deg, #494544 0%, #504b4a 100%)",
    // boxShadow: 24,
    boxShadow:
      "0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%)",
  }
  const styleModal = {
    backdropFilter: 'brightness(0.5)',
    background: 'rgb(83 83 83 / 80%)'
  }
  function handleClick() {
    setLoading(true)
  }
  const handleSubmit = () => {
    handleClose()
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      sx={styleModal}
    >
      <Fade in={open}>
        <Box component="form" sx={style}>
          <CloseButton toggle={handleClose} cartModal />
          {branch ? (
            <ModalTitle>Add a new Branch</ModalTitle>
          ) : (
            <ModalTitle>Add new Food</ModalTitle>
          )}
          <Grid
            container
            sapcing={2}
            rowSpacing={4}
            justifyContent="space-around"
          >
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="Address"
                type="text"
                name="Address"
                label="Branch address"
              />
            </Grid>
            <Grid item xs={12}>
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={[
                    "MultiInputTimeRangeField",
                  ]}
                >
                  <MultiInputTimeRangeField
                    slotProps={{
                      textField: ({ position }) => ({
                        label: position === "start" ? "From" : "To",
                      }),
                    }}
                  />
                </DemoContainer> */}
              {/* </LocalizationProvider> */}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                textAlign: "center",
              }}
            >
              <AddButton
                loading={loading}
                loadingPosition="end"
                food={food}
                variant="contained"
                onClick={handleSubmit}
              >
                {branch ? "Add restaurant" : "Add food"}
              </AddButton>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  )
}
