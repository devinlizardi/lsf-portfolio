import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import { Error } from './components/Error.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(<>
    <Route path='/' element={<App />} errorElement={<Error />}>
      <Route path=':filter' />
    </Route>
    <Route path='profile' element={<h1>profile</h1>} />
    <Route path='contact' element={<h1>contact</h1>} /></>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
