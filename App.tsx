import React from "react";
import { StatusBar } from "expo-status-bar";
import { Main } from "./src/components/App";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Main />
    </React.Fragment>
  );
}
