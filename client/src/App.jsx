import Website from "./Pages/Website";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import AddBooking from "./components/AddBooking/AddBooking";
import Contact from "./components/Contact/Contact";
import NotFoundPage from "./components/NotFound/NotFound";



function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Website/>}/>
    <Route path='/addBooking' element={<AddBooking/>}/>
    <Route path='/contact' element={<Contact/>} />
    <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
