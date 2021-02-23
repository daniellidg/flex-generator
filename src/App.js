import React from "react";
import "./styles.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import constants from "./constants";
import Dropdown from "./Dropdown";
import FlexItem from "./FlexItem";
import ActionBar from "./ActionBar";

export default function App() {
  const [itemCount, setItemCount] = React.useState(5);
  const [actionValue, setActionValue] = React.useState(
    constants.initialActionValue
  );

  return (
    <div className="App">
      <Dropdown
        labelName="item count"
        defaultValue={itemCount}
        onChange={(value) => setItemCount(value)}
        options={Array(20)
          .fill(0)
          .map((item, idx) => 1 + idx)}
      />

      <ActionBar onChange={(value) => setActionValue(value)} />

      <div
        style={{
          display: "flex",
          background: "lightblue",
          minHeight: 300,
          overflow: "auto",
          justifyContent: actionValue.justifyContent,
          alignItems: actionValue.alignItems,
          flexDirection: actionValue.flexDirection,
          flexWrap: actionValue.flexWrap,
          alignContent: actionValue.alignContent
        }}
      >
        {Array(itemCount)
          .fill(0)
          .map((item, idx) => (
            <FlexItem max={itemCount} key={idx} index={idx + 1}>
              {(codeItem) => (
                <details>
                  <summary style={{ cursor: "pointer" }}>{`<> source`}</summary>
                  <SyntaxHighlighter language="css" style={docco}>
                    {codeItem}
                  </SyntaxHighlighter>
                </details>
              )}
            </FlexItem>
          ))}
      </div>
    </div>
  );
}
