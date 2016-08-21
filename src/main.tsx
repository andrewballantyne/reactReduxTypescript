/// <reference path="_typings/include.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from './store';
import App from './components/app';

const rootEl:HTMLElement = document.getElementById('root');

function render():void {
  ReactDOM.render(
    <App />,
    rootEl
  );
}

render();
store.subscribe(render);
