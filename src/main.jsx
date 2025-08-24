import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter ([
  {
    path:'/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: 'tecnica', element: <Tecnica />},
      {path: 'contato', element: <Contato />},
      {path: '*', element: <PageNotFound />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)