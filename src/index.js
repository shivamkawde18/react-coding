import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Debounce } from "./Debounce";
import { Counter } from "./components/challegs/counter";
import { AnagramString } from "./components/challegs/AnagramString";
import { ImageGallery } from "./components/challegs/ImageGallery";
import { Accordion } from "./components/challegs/ Accordion";
import { TableColorizer } from "./components/challegs/ TableColorizer";
import { Pagination } from "./components/challegs/Pagination";
import { WordCounts } from "./components/challegs/WordCounts";
import { PhoneNumberValidetor } from "./components/challegs/PhoneNumberValidetor";
import { TraficLight } from "./components/challegs/TraficLight";
import { TostPopUp } from "./components/challegs/TostPopUp";
import { StopWatch } from "./components/challegs/StopWatch";
import {
  EnhancedComponent,
  HOC,
  MyComponent,
  UpdatedComponet,
} from "./components/challegs/HOC";
import { ProgressBar } from "./components/challegs/ProgressBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    {/* <Debounce/> */}
    {/* <Counter/> */}
    {/* <AnagramString /> */}
    {/* <ImageGallery /> */}
    {/* <Accordion /> */}
    {/* <TableColorizer /> */}
    {/* <Pagination/> */}
    {/* <WordCounts /> */}
    {/* <PhoneNumberValidetor /> */}
    {/* <TraficLight /> */}
    {/* <TostPopUp /> */}
    {/* <StopWatch/> */}
    {/* <MyComponent text={"hi i am shiam"}/> */}
    {/* <HOC/> */}
    <ProgressBar />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
