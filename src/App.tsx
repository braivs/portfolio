import React from 'react'
import s from './App.module.scss'
import {Router} from "./router"

function App() {
  return (
    <div className={s.app}>
      <Router />
    </div>
  );
}
// test access
export default App;
