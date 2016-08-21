// tslint:disable-next-line
/// <reference path="../typings/include.d.ts" />
import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/app";
import store from "./store";

const rootEl:HTMLElement = document.getElementById("root");

function render():void {
  ReactDOM.render(
    <App />,
    rootEl
  );
}

render();
store.subscribe(render);
