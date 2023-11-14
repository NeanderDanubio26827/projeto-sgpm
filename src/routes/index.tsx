import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePrincipal } from "../pages/views/cadastro";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Ficha } from "../pages/views/ficha";

export const Rotas = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePrincipal onClose={onClose} onOpen={onOpen} />} />
                <Route path="/ficha" element={<Ficha onClose={onClose} onOpen={onOpen} />} />
            </Routes>
        </Router>
    );
};


