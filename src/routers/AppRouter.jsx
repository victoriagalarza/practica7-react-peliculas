import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage.jsx'
import MovieDetails from '../pages/MovieDetails.jsx'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
