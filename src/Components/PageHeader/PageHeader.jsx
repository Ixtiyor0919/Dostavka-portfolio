import React from "react";
import { Box } from "@mui/material";
import { AdminModal } from "../AdminModal/AdminModal";
import { HeaderStyled, StyledButton, StyledTab, StyledTitle } from "./PageHeaderStyled";

export const PageHeader = ({ title, text, branch, tab }) => {
  const [open, setOpen] = React.useState(false)
  const [click, setClick] = React.useState(false)
  const [selected, setSelected] = React.useState(0)
  const handleOpen = () => {
    setOpen(true)
  }
  React.useEffect(() => {
    if(!open) {
      setClick(false)
    }
  }, [open])
  const handleModal = () => {
    setClick(!click)
    handleOpen()
  }
  const handleClick = (index) => {
    setClick(!click)
    setSelected(index)
  }
  
  return (
    <HeaderStyled>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <StyledTitle>{title}</StyledTitle>
        {tab &&
          tab?.map((item, index) => (
            <StyledTab clicked={index === selected} onClick={() => handleClick(index)}>{item}</StyledTab>
          ))}
      </Box>
      {text && (
        <StyledButton onClick={handleModal}>
          {text}
        </StyledButton>
      )}
      {branch ? (
        <AdminModal setOpen={setOpen} open={open} branch />
      ) : (
        <AdminModal setOpen={setOpen} open={open} food />
      )}
    </HeaderStyled>
  )
}
