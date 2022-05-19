import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Navbar,
    About,
    Resume,
    Contact,
    Footer,
} from "./components";

ReactDOM.render(
    <ChakraProvider>

    <Router>
        <Navbar/>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />


    </Router>

    </ChakraProvider>,

    document.getElementById("root")
);

serviceWorker.unregister();