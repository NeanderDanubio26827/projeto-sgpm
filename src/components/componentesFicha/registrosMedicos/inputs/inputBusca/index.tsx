import { InputGroup, InputRightElement, Input, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IconeFiltro } from "../../../../componentesGerais/iconeDashHeader/iconeFiltro";


export const InputBuscaFicha = () => {
    return (
        <Flex
            alignItems="center" // Use alignItems para alinhamento vertical
            textAlign="center"
            justify="center"
            h={'100%'}
        >

            
            <InputGroup>
                <Input ml={1} type='search' placeholder='Buscar' h="40px" w={"222px"} />
                <InputRightElement pointerEvents='none' h={'31px'}>
                    <Flex
                        alignItems={'center'}
                        h={'100%'}
                    >
                        <IoIosSearch color='#A0AEC0' size={'20px'} />
                    </Flex>
                </InputRightElement>
            </InputGroup>
        </Flex>
    );
};