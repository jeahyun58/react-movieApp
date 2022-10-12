import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// import {
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
// } from "react-router-dom";
// import Detail from "./routes/Detail";
// import Home from "./routes/Home";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={<Home />} />
//       <Route path="/movie/:id" element={<Detail />} />
//       <Route path="/hello" element={<h1>Hello</h1>} />
//     </Route>
//   )
// );

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
