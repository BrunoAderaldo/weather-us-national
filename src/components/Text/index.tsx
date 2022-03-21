import { styled } from "../../../stitches.config";

const Text = styled("span", {
  svg: {
    marginLeft: "$2",
    verticalAlign: "middle",
  },
  variants: {
    type: {
      error: {
        fontSize: "$3",
        marginBottom: "$5",
      },
      icon: {
        color: "$accent",
        fontSize: "$12",
      },
      name: {
        color: "$accent",
        fontSize: "$6",
        fontWeight: "$medium",
        marginBottom: "-$4",
      },
      day: {
        color: "$primary",
        fontSize: "$4",
        fontWeight: "$regular",
      },
      temperature: {
        color: "$accent",
        fontSize: "$14",
        fontWeight: "$bold",
        letterSpacing: "$default",
        svg: {
          width: "20px",
        },
      },
      wind: {
        fontSize: "$6",
        fontWeight: "$regular",
        letterSpacing: "$default",
        svg: {
          width: "18px",
        },
      },
      shortForecast: {
        color: "$accent",
        fontSize: "$7",
        fontWeight: "$medium",
        letterSpacing: "$default",
      },
    },
  },
});

export default Text;
