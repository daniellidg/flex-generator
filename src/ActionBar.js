import React from "react";
import "./styles.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import constants from "./constants";
import Dropdown from "./Dropdown";

export default function ActionBar({ onChange }) {
  const [actionValue, setActionValue] = React.useState(
    constants.initialActionValue
  );

  const handleActionChange = (type, value) => {
    const newActionValue = { ...actionValue, ...{ [type]: value } };
    setActionValue(newActionValue);
    onChange(newActionValue);
  };

  const codeParent = `
  .parent{
    display: flex;
    ${
      actionValue.flexDirection !== "row"
        ? "flex-direction:" + actionValue.flexDirection + ";\n    "
        : ""
    }${
    actionValue.flexWrap !== "nowrap"
      ? "flex-wrap:" + actionValue.flexWrap + ";\n    "
      : ""
  }${
    actionValue.alignContent !== "stretch"
      ? "align-content:" + actionValue.alignContent + ";\n    "
      : ""
  }${
    actionValue.justifyContent !== "flex-start"
      ? "justify-content:" + actionValue.justifyContent + ";\n    "
      : ""
  }${
    actionValue.alignItems !== "stretch"
      ? "align-items:" + actionValue.alignItems + ";\n    "
      : ""
  }/* flex-flow: ${actionValue.flexDirection} ${actionValue.flexWrap}; */
  }
  `;

  return (
    <div className="App">
      <div
        style={{
          padding: 10,
          margin: 10,
          border: "1px solid",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center"
        }}
      >
        <Dropdown
          labelName="justify-content"
          defaultValue={actionValue.justifyContent}
          onChange={(value) => handleActionChange("justifyContent", value)}
          options={constants.justifyContent}
        />
        <Dropdown
          labelName="align-item"
          defaultValue={actionValue.alignItems}
          onChange={(value) => handleActionChange("alignItems", value)}
          options={constants.alignItems}
        />
        <Dropdown
          labelName="flex-direction"
          defaultValue={actionValue.flexDirection}
          onChange={(value) => handleActionChange("flexDirection", value)}
          options={constants.flexDirection}
        />
        <Dropdown
          labelName="flex-wrap"
          defaultValue={actionValue.flexWrap}
          onChange={(value) => handleActionChange("flexWrap", value)}
          options={constants.flexWrap}
        />
        <Dropdown
          labelName="align-content"
          defaultValue={actionValue.alignContent}
          onChange={(value) => handleActionChange("alignContent", value)}
          options={constants.alignContent}
        />
        <div
          style={{ margin: 10 }}
        >{`flex-flow: <flex-direction> <flex-wrap>`}</div>
      </div>

      <details style={{ padding: 10 }}>
        <summary style={{ cursor: "pointer" }}>{"<> source"}</summary>
        <SyntaxHighlighter language="css" style={docco}>
          {codeParent}
        </SyntaxHighlighter>
      </details>
    </div>
  );
}
