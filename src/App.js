import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Contacts from "./pages/contacts/contact";
import About from "./pages/about/about";
import Single from "./pages/single/single";
import NotFound from "./pages/notFound/notFound";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="shop" >
              <Route index element={<Shop />} />
              <Route path=":itemId" element={<Single />} />
            </Route>
            <Route path="contact" element={<Contacts/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
