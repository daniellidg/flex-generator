const constants = {
  justifyContent: [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ],
  alignItems: ["stretch", "center", "flex-start", "flex-end", "baseline"],
  flexDirection: ["row", "row-reverse", "column", "column-reverse"],
  flexWrap: ["nowrap", "wrap", "wrap-reverse"],
  alignContent: [
    "stretch",
    "center",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around"
  ],
  alignSelf: ["auto", "stretch", "center", "flex-start", "flex-end", "baseline"]
};

constants.initialActionValue = {
  justifyContent: constants.justifyContent[0],
  alignItems: constants.alignItems[0],
  flexDirection: constants.flexDirection[0],
  flexWrap: constants.flexWrap[0],
  alignContent: constants.alignContent[0]
};

export default constants;
