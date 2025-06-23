import { Fragment } from 'react';
import './App.css';
import ClickEventClass, { ClickEventFunction } from './ClickEvent';
import { Clock } from './Clock';
import ConditionalRendering from './ConditionalRendering';
import Counter from './Counter';
import CounterHook from './CounterHook';
import CustomStyle from './CustomStyle';
import EventBinding from './EventBinding';
import FragmentComponent from './FragmentComponent';
import Greet from './Greet';
import LifeCycleMount from './LifeCycleMount';
import LifeCycleUnMount from './LifeCycleUnMount';
import LifeCycleUpdate from './LifeCycleUpdate';
import ParentComponent from './ParentComponent';
import StateMessage from './StateMessage';
import Student from './Student';
import Portal from './Portal';
import Besant from './ErrorHandling';
import ErrorBoundary from './ErrorBoundary';
import ClickComponent from './ClickComponent';
import HoverComponent from './HoverComponent';
import ParentComponentA from './ParentComponentA';
import { Provider } from './Context';
import FakeData from './FakeData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Router/Home';
import Product from './Router/Product';
import About from './Router/About';
import Contact from './Router/Contact';
import ClassHome from './ClassHome';
import { HookCount } from './UseStateHook/HookCount';
import { UseStateObject } from './UseStateHook/UseStateObject';
import ClassCounter from './UseEffect/ClassCounter';
import { HookEffectCounter } from './UseEffect/HookEffectCounter';
import ClassMouse from './UseEffect/ClassMouse';
import { HookMouse } from './UseEffect/HookMouse';
import { MouseContainer } from './UseEffect/MouseContainer';
import { FocusInput } from './UseRef/FocusInput';
import { StyleElement } from './UseRef/StyleElement';
import { CounterReducer } from './UseStateHook/UseReducer/CounterReducer';
import { UseMemoFact } from './UseStateHook/UseMemo/UseMemoFact';


function App() {
  return (
    <>
      <h1>Welcome to ReactJs...!!!</h1>
      {/* <HookMouse/> */}
      {/* <ClassMouse/> */}
      {/* <HookEffectCounter/> */}
      {/* <ClassCounter/> */}
      {/* <HookCount/> */}
      {/* <UseStateObject/> */}
      {/* <MouseContainer/> */}
       {/* <FocusInput/> */}
       {/* <StyleElement/> */}
       {/* <CounterReducer/> */}
      <UseMemoFact/>
    </>
  );
}

export default App;

{/* <BrowserRouter>
      <Routes>
      <Route path='/' element={<ClassHome/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter> */}


{/* <FakeData/> */}

{/* <Provider value={'Pinky'}>
      <ParentComponentA/>
      </Provider> */}

{/* <ClickComponent/>
      <HoverComponent/> */}
{/* <ul>
        <li>StuId: 101</li>
        <li>StuName: Bobby</li>
        <li>StuAge: 5</li>
        </ul>
        <ul>
        <li>StuId: 102</li>
        <li>StuName: Dolly</li>
        <li>StuAge: 7</li>
        </ul>
        <ul>
        <li>StuId: 103</li>
        <li>StuName: Pinky</li>
        <li>StuAge: 6</li>
        </ul>

        <p>Hi Lilly you are assigned to Quality Assurance Team</p> */}


        {/* <Students/> */}

      //   <ClickEventClass/>
      // <ClickEventFunction/>


      // <StateMessage/>
      // <Counter/>
      // <EventBinding/>
      // <CounterHook/>
      // <Clock/>

      // <ParentComponent/>
      // <ConditionalRendering/>
      // <CustomStyle/>
      // <Greet/>


      {/* <LifeCycleMount color='red'/> */}
      {/* <LifeCycleUpdate color='Blue'/> */}
      {/* <LifeCycleUnMount/> */}

      // <FragmentComponent/>
      // <Portal/>

      // <ErrorBoundary>
      // <Besant name="Bobby" id={101}/>
      // </ErrorBoundary>
      // <ErrorBoundary>
      // <Besant name="Pinky" id={102}/>
      // </ErrorBoundary>
      // <ErrorBoundary>
      // <Besant name="Dolly" id={103}/>
      // </ErrorBoundary>