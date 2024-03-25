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
import { OTP } from "./components/challegs/OTP";
import { DynamicOTP } from "./components/challegs/DynamicOTP";
import { Curring } from "./components/challegs/Curring";
import { BeforeAfterCss } from "./components/challegs/BeforeAfterCss";
import { BindPolifill } from "./components/challegs/BindPolifill";
import { PromiseAllPolyfill } from "./components/challegs/Promise.allPolyfill";
import { RemoveReferace } from "./components/challegs/removeReferace";
import {
  EventBubling,
  MapFilterPolyFill,
} from "./components/challegs/MapFilterPolyfill";
import { Promisify } from "./components/challegs/Promisify";
import { CarEMiCalculator } from "./components/challegs/CarEMiCalculator";
import { PasswordGeneroter } from "./components/challegs/PasswordGeneroter";
import { UseMemoPollyfill } from "./components/challegs/UseMemoPollyfill";
import { ColorChanger } from "./components/challegs/ColorChanger";
import OrderBook from "./components/challegs/QunceTest2";
import { TicTacToGame } from "./components/challegs/TicTacToGame";
import { TekionTimerInput } from "./components/challegs/TekionTimerInput";
import { TwoDMatrixunactive } from "./components/challegs/TwoDMatrixunactive";


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
    {/* <ProgressBar /> */}
    {/* <OTP/>  */}
    {/* <DynamicOTP /> */}
    {/* <Curring /> */}
    {/* <BeforeAfterCss/> */}
    {/* <BindPolifill/> */}
    {/* <PromiseAllPolyfill/> */}
    {/* <RemoveReferace/> */}
    {/* <MapFilterPolyFill /> */}
    {/* <Promisify/> */}
    {/* <CarEMiCalculator/> */}
    {/* <PasswordGeneroter /> */}
    {/* <UseMemoPollyfill/> */}
    {/* <TimerChallenge/> */}
    {/* <ColorChanger/> */}
    {/* <OrderBook/> */}
    {/* <TicTacToGame/> */}
    {/* <TekionTimerInput/> */}
    <TwoDMatrixunactive/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
