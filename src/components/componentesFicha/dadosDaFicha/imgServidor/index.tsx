import { Image } from "@chakra-ui/react";
import React from "react";
import perfil from '../../../../assets/img/CAP-Rodrigues-Coordenador-COTIC 1.png'; 

export const ImgFicha = (props) => {
    return (
        <Image src={perfil} w={'138px'} h={'186px'} {...props}/>
    );
};

