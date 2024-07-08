import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home, About,Projects,AllRepos,Resume } from './components/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "projects",
        element: <Projects/>
      },
      {
        path: "all-repos",
        element: <AllRepos/>
      },
      {
        path: "resume",
        element: <Resume/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
