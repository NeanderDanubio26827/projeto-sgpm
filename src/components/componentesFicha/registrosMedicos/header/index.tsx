import { HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { ButtonExportar } from "../buttons/butttonExportar";
import { InputBuscaFicha } from "../inputs/inputBusca";
import { ButtonFilter } from "../buttons/buttonFilter";
import { ButtonSelecionar } from "../buttons/buttonSelecionar";


export const HeaderRegistrosMedicos = () => {

    return (
        <>


            <HStack spacing={4} position={'absolute'} left={8}>
                <ButtonFilter />
                <ButtonSelecionar />
                <InputBuscaFicha />
                <Spacer />

            </HStack>

            <HStack marginLeft={'auto'} marginRight={4}>
                <ButtonExportar />
            </HStack>

        </>
    );

};

