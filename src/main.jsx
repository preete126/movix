import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './assets/style/index.scss'
import "bootstrap/dist/js/bootstrap.bundle.min"

const Home = React.lazy(() => import('./pages/Home'))
const View = React.lazy(() => import('./pages/search_result'))
const Movies = React.lazy(() => import('./pages/movie'))


const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <h1>Page not found</h1> },
  { path: "/search", query: {title: ''}, element: <View /> },
  { path: "/movies", element: <Movies /> }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
  </React.StrictMode>
)
