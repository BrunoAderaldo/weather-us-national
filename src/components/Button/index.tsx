import { styled } from "../../../stitches.config";

const Button = styled("button", {
  border: 0,
  background: "transparent",
  variants: {
    inline: {
      false: {
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
      },
      true: {
        borderBottom: "2px solid",
        color: "$accent",
        fontWeight: "$bold",
        padding: 0,
        marginLeft: "$3",
      },
    },
  },
  defaultVariants: {
    inline: false,
  },
});

export default Button;
