import { render } from 'preact'
import { App } from './App.jsx'
import {Provider} from "react-redux";
import {store} from "./store/store.js";

render(<><Provider store={store}><App /></Provider></>, document.getElementById('app'))