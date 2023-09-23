import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Nav from "../src/components/Navbar/Navbar";
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Footer from "./components/footer/footer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AppProvider>

    <BrowserRouter>
      <Nav />

      <Routes>

        <Route >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>

  </AppProvider>
);

