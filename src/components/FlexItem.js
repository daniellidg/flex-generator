import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Dropdown from "./Dropdown";
import constants from "../constants";

export default function FlexItem({ children, index, max }) {
  const [orderValue, setOrderValue] = React.useState(0);
  const [flexGrowValue, setFlexGrowValue] = React.useState(0);
  const [flexShinkValue, setFlexShinkValue] = React.useState(1);
  const [flexBasisValue, setFlexBasisValue] = React.useState("auto");
  const [alignSelf, setAlignSelf] = React.useState(constants.alignSelf[0]);

  const codeItem = `
  .item{
    ${orderValue !== 0 ? "order:" + orderValue + ";\n    " : ""}${
    flexGrowValue !== 0 ? "flex-grow:" + flexGrowValue + ";\n    " : ""
  }${flexShinkValue !== 1 ? "flex-shink:" + flexShinkValue + ";\n    " : ""}${
    flexBasisValue !== "auto" ? "flex-basis:" + flexBasisValue + ";\n    " : ""
  }${
    alignSelf !== "auto" ? "align-self:" + alignSelf + ";\n    " : ""
  }/* flex: ${flexGrowValue} ${flexShinkValue} ${flexBasisValue}; */
  }
  `;

  return (
    <>
      <div
        className="item"
        style={{
          order: orderValue,
          flexGrow: flexGrowValue,
          flexShrink: flexShinkValue,
          flexBasis: flexBasisValue,
          alignSelf: alignSelf
        }}
      >
        <div style={{ textAlign: "center", fontSize: 32, fontWeight: 600 }}>
          Item {index}
        </div>
        <Dropdown
          labelName="order"
          defaultValue={orderValue}
          onChange={(value) => setOrderValue(value)}
          options={Array(max)
            .fill(0)
            .map((item, index) => index)}
        />
        <Dropdown
          labelName="align-self"
          defaultValue={alignSelf}
          onChange={(value) => setAlignSelf(value)}
          options={constants.alignSelf}
        />
        <div className="item-content">
          <label>flex-grow:</label>
          <input
            type="range"
            min="0"
            max="10"
            value={flexGrowValue}
            step="1"
            onChange={(event) => setFlexGrowValue(event.target.value)}
            style={{ width: 180, height: 24, marginLeft: 8 }}
          />
          <span>{flexGrowValue}</span>
        </div>
        <div className="item-content">
          <label>flex-shrink:</label>
          <input
            type="range"
            min="0"
            max="10"
            value={flexShinkValue}
            step="1"
            onChange={(event) => setFlexShinkValue(event.target.value)}
            style={{ width: 180, height: 24, marginLeft: 8 }}
          />
          <span>{flexShinkValue}</span>
        </div>
        <div className="item-content">
          <label>flex-basis:</label>
          <input
            type="text"
            value={flexBasisValue}
            step="1"
            onChange={(event) => setFlexBasisValue(event.target.value)}
            style={{ width: 180, height: 24, marginLeft: 8 }}
          />
          <span>{flexBasisValue}</span>
        </div>

        <div style={{ margin: "10px 0" }}>
          <SyntaxHighlighter language="css" style={docco}>
            {`flex: <flex-grow> <flex-shrink> <flex-basis>`}
          </SyntaxHighlighter>
        </div>

        {children ? children(codeItem) : null}
      </div>
    </>
  );
}
