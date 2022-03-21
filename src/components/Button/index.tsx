import { styled } from "../../../stitches.config";

const Button = styled("button", {
  border: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$accent",
  borderRadius: "$borderRadius",
  height: "40px",
  width: "40px",
  minWidth: "40px",
  boxShadow: "$default",
  svg: {
    fill: "#fff",
  },
});

export default Button;
