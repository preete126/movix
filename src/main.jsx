import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"


const Home = React.lazy(() => import('./pages/Home'))
const View = React.lazy(() => import('./pages/search_result'))

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <h1>Page not found</h1> },
  { path: "/search/:param", element: <View /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
  </React.StrictMode>
)
