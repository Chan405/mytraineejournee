import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Pet from "./components/Pet";

import { useState, StrictMode, lazy, Suspense } from "react";

import Uiuxcontainer from "./materialui/uiuxcontainer";

import Usestatecomponent from "./hooks/useState";
import UseEffectComponent from "./hooks/useEffect";
import UserContextComponent from "./hooks/useContext";
import UserefComponent from "./hooks/useRef";
import ReducerComponent from "./hooks/useReducer";
import UseLayoutEffectcomponent from "./hooks/uselayouteffect";
// import SearchParams from "./components/searchparams";
// import Details from "./components/details";
//import { StrictMode } from "react";

const Details = lazy(() => import("./components/details"));
const SearchParams = lazy(() => import("./components/searchparams"));

const App = () => {
  return (
    <StrictMode>
      <div className="p-0 m-0"
           style={{
              background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
          }}
      >
      <Suspense>
        <BrowserRouter>
          <header>
            <Link to="/" className=""> Adopt me! </Link>
          </header>

          <Routes>
            <Route path="/details/:id" element={ <Details/> } />
            <Route path="/" element={ < SearchParams/>} />
          </Routes>
        </BrowserRouter>
      </Suspense>

      </div>
    </StrictMode>
  );
};
export default App;



// const App = () => {
//   return (
//     <div>
//       <Usestatecomponent/> <hr/>
//       <UseEffectComponent/> <hr/>
//       <UserContextComponent/> <hr/>
//       <UserefComponent/> <hr/>
//       <ReducerComponent/> <hr/>
//       <UseLayoutEffectcomponent/>
//     </div>
//     )
// }
// export default App;

// const App = () => {
//   return(
//   <div>
//     <Uiuxcontainer />
//   </div>
//   )
// }
// export default App;
