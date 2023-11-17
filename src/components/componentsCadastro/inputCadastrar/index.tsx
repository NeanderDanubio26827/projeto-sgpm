import { Flex, InputGroup, Input, InputRightElement, InputLeftElement, VStack } from "@chakra-ui/react";
import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { TextCadastro } from "../textCadastro";

export const InputCadastrar = () => {

    return (
        <VStack>
            
            <InputGroup>                
                <Input type='search' placeholder='Digite CPF, matrícula ou nome' w={'17vw'} />
                <InputLeftElement pointerEvents='none'>
                    <BsPersonFill color='#A0AEC0' />
                </InputLeftElement>
            </InputGroup>
        </VStack>
    );
}; 