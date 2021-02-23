const constants = {
  justifyContent: [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "initial",
    "inherit"
  ],
  alignItems: [
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "baseline",
    "initial",
    "inherit"
  ],
  flexDirection: [
    "row",
    "row-reverse",
    "column",
    "column-reverse",
    "initial",
    "inherit"
  ],
  flexWrap: ["nowrap", "wrap", "wrap-reverse", "initial", "inherit"],
  alignContent: [
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around",
    "initial",
    "inherit"
  ],
  alignSelf: [
    "auto",
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "baseline",
    "initial",
    "inherit"
  ]
};

constants.initialActionValue = {
  justifyContent: constants.justifyContent[0],
  alignItems: constants.alignItems[0],
  flexDirection: constants.flexDirection[0],
  flexWrap: constants.flexWrap[0],
  alignContent: constants.alignContent[0]
};

export default constants;
