import { useEffect } from "react";
import CardContainer from "./components/card-container";
import FullPage from "./components/full-page";
import LocomotiveScroll from 'locomotive-scroll';
import { ModeToggle } from "./provider/mode-toggle";

export default function App() {
  useEffect(()=> {
    new LocomotiveScroll()
  },[])
  return (
    <>
      <ModeToggle/>
      <FullPage background="bg-blue-400" />
      <CardContainer />
      <FullPage background="bg-green-700" />
    </>
  )
}
