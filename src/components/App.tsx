import React from 'react';
import {RecoilRoot} from "recoil";
import MainView from "./view/MainView";

function App() {
  return (
    <RecoilRoot>
        <MainView/>
    </RecoilRoot>
  );
}

export default App;
