import { Button, CartIcon } from "./Icons.component";

export const Icons = ({ Icon, size, width, height, onClick }) => {
  return (
    <Button>
      <CartIcon
        style={{ width: `${width}px`, height: `${height}px` }}
        onClick={onClick}
      >
        <Icon sx={{ fontSize: `${size}px` }} />
      </CartIcon>
    </Button>
  )
}
