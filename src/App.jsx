import {Toaster} from 'react-hot-toast'

import router from "./components/Routes"

import {  RouterProvider } from "react-router-dom"

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}


export default App