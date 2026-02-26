//import libreria rotte
import { BrowserRouter, Routes, Route } from "react-router-dom"

//import del GlobalProvider
import { GlobalProvider } from "./context/GlobalContext"

//import layout
import DefaultLayout from "./layouts/DefaultLayouts"

//import pagine della rotta
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MoviePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
