import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>
      <h1 className='text-center text-3xl m-16'>error</h1>
    </>
  },
  {
    path: "/profile",
    element: <h1>profile</h1>
  },
  {
    path: "/contact",
    element: <h1>contact</h1>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
