import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import Movies from './components/Movies'
import TrendingMovie from './components/TrendingMovie'
import Shows from './components/Shows'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => {
    return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
      <ProtectedRoute>
        <Home />
        </ProtectedRoute>} />
    
    <Route path="/movies"  element={
      <ProtectedRoute>
        <Movies />
      </ProtectedRoute>} />
    <Route path="/trend"  element={
      <ProtectedRoute>
      <TrendingMovie />
      </ProtectedRoute>} />
    <Route path="/shows" element={
      <ProtectedRoute>
      <Shows />
      </ProtectedRoute>} />
    
    <Route path="*"  element={<NotFound />} />
    <Route path="/login" element={<LoginForm />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
