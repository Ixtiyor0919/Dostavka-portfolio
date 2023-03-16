import { Button, CartIcon } from "./Icons.component";

export const Icons = ({ Icon, size, width, height, onClick }) => {
  return (
    <Button onClick={onClick}>
      <CartIcon style={{ width: `${width}px`, height: `${height}px` }}>
        <Icon sx={{ fontSize: `${size}px` }} />
      </CartIcon>
    </Button>
  )
};
