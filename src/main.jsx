import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import * as Sentry from "@sentry/react"
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import { Error } from './components/Error.jsx'
import { Profile } from './components/Profile.jsx'
import { Admin } from './components/Admin.jsx'

Sentry.init({
  dsn: "https://10e83f35045b793a769230a5f2e35754@o4508089982189568.ingest.us.sentry.io/4508089984090112",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.

});

const router = createBrowserRouter(
  createRoutesFromElements(<>
    <Route path='/' element={<App />} errorElement={<Error />}>
      <Route path=':filter' />
    </Route>
    <Route path='profile' element={<Profile />} />
    <Route path='contact' element={<h1>contact</h1>} />
    <Route path='admin' element={<Admin />} />
  </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
