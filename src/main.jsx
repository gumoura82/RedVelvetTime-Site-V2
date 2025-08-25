import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Musicas from './pages/Musicas.jsx'
import Contato from './pages/Contato.jsx'
import Shows from './pages/Shows.jsx'
import Home from './pages/Home.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Sobre from './pages/Sobre.jsx'
import Loja from './pages/Loja.jsx'

const router = createBrowserRouter ([
  {
    path:'/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: 'shows', element: <Shows />},
      {path: 'contato', element: <Contato />},
      {path: 'musicas', element: <Musicas />},
      {path: 'sobre', element: <Sobre />},
      {path: 'loja', element: <Loja />},
      {path: '*', element: <PageNotFound />},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)