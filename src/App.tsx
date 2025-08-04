import { useEffect } from "react";
import CardContainer from "./components/card-container";
import FullPage from "./components/full-page";
import LocomotiveScroll from 'locomotive-scroll';


export default function App() {
  useEffect(()=> {
    new LocomotiveScroll()
  },[])
  return (
    <>
      <FullPage title="Scroll down"/>
      <CardContainer />
      <FullPage title="Thank you "/>
    </>
  )
}
