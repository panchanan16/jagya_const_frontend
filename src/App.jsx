import '@/styles/app.css'
import AppRoutes from './router/AppRoutes'
import { BrowserRouter } from 'react-router'


function App() {

  return (
      <BrowserRouter >
        <AppRoutes />
      </BrowserRouter>
  )
}

export default App
