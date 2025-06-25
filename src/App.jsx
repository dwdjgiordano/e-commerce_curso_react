import './App.css'
import Navbar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContanier from './Components/ItemListContainer/ItemDetailContanier';
import Counter from './Components/Counter'
import { BrowserRouter, Routes, Route, Link } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div>&nbsp;</div>
      <Routes>
        <Route path='/' element={<ItemListContainer></ItemListContainer>} />
        <Route path='/categoria/:categoriaNombre' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContanier />} />
      </Routes>
      <footer><div>esto es el footer</div></footer>
    </BrowserRouter>
  )
}

export default App