import './App.css'
import { Route, Routes } from 'react-router-dom'
import MovieDetails from './MovieDetails'
import Watchlist from './Watchlist'
import MoviesList from './MoviesList'
import Navbar from './Navbar'
import AddMovie from './AddMovie'


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesList />} ></Route>
        <Route path="/watchlist" element={<Watchlist />} ></Route>
        <Route path="/:movieId" element={<MovieDetails />} ></Route>
        <Route path="/addMovie" element={<AddMovie />} ></Route>
      </Routes>
    </div>
  )
}

export default App
