import { InputGroup, InputRightElement, Input, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IconeFiltro } from "../iconeDashHeader/iconeFiltro";
import { ListDashHeader } from "../listDashHeader";

export const InputDashHeader = () => {
    return (
        <Flex
            alignItems="center" // Use alignItems para alinhamento vertical
            textAlign="center"
            justify="center"
            h={'100%'}
        >

            <IconeFiltro />
            <InputGroup>
                <Input ml={1} type='search' placeholder='search' h="31px" w={"522.75px"} />
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