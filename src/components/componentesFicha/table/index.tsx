import React from "react";
import {
    Flex, Text, Button, Select, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, IconButton, Img, HStack
} from "@chakra-ui/react";
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Icon } from '@chakra-ui/react'
import './table.modules.css'
import { IconeDeletar } from "../registrosMedicos/icones/iconeDeletar";
import { IconeRelatorio } from "../registrosMedicos/icones/iconeRelatorio";
import { IconeEditar } from "../registrosMedicos/icones/iconeEditar";
import { IconeBusca } from "../registrosMedicos/icones/iconeBusca";
import { BotaoPendente } from "../registrosMedicos/buttons/buttonPendente";
import { BotaoAtual } from "../registrosMedicos/buttons/buttonAtual";
import { BotaoCompletas } from "../registrosMedicos/buttons/buttonCompletas";
import { IconeInfo } from "../registrosMedicos/icones/iconeInfo";
import { FiInfo } from "react-icons/fi";

interface ITable {
    isOpen: boolean;
}

export const TableFicha: React.FC<ITable> = (props) => {

    return (


        <TableContainer
            p={0}
            pt={4}
            w={props.isOpen ? "1150px" : "1300px"}
            transitionDuration="1.0s"
            className="cell-table"
        >
            <Table
                variant="unstyled"
            >
                <TableCaption textAlign={"left"} p={0}>
                    <Flex justify="space-between">
                        1-4 de 04 itens

                        <Flex p={0}>
                            <Button
                                mr={2}
                                fontSize={"12px"}
                                //borderRightRadius={0}
                                fontWeight={"none"}
                                bg={"none"}
                                border={"1px solid"}
                                borderColor={"gray.400"}
                            >
                                Anterior
                            </Button>
                            <Button
                                ml={2}
                                fontSize={"12px"}
                                //borderLeftRadius={0}
                                fontWeight={"none"}
                                bg={"none"}
                                border={"1px solid"}
                                borderColor={"gray.400"}
                            >
                                Próximo
                            </Button>
                        </Flex>
                    </Flex>
                </TableCaption>

                <Thead>
                    <Tr
                        borderTop="1px solid"
                        borderBottom="1px solid"
                        bg="rgba(252, 252, 253, 1)"
                        alignItems="left"
                        className="cell-table"
                        fontSize={"12px"}>
                        <Th pl={1}>
                            <Flex align="center" justify={"flex-end"} gap={2}>
                                <Text textTransform={"capitalize"} >
                                    Ordem
                                </Text>
                                <Flex ml="auto">
                                    <Icon as={AiOutlineArrowDown} />
                                </Flex>
                            </Flex>
                        </Th>
                        <Th borderTop="1px solid" pl={1}>
                            <Flex align="center" justify={"flex-end"} gap={2}>
                                <Text textTransform={"capitalize"} >
                                    Tipo
                                </Text>
                                <Flex ml="auto">
                                    <Icon as={AiOutlineArrowDown} />
                                </Flex>
                            </Flex>
                        </Th>
                        <Th borderTop="1px solid" alignItems="center" pl={1} >
                            <Flex align="center" justify="flex-end" gap={2}>
                                <Text textTransform={"capitalize"} >
                                    Subtipo
                                </Text>
                                <Flex ml="auto">
                                    <Icon as={AiOutlineArrowDown} />
                                </Flex>
                            </Flex>
                        </Th>
                        <Th borderTop="1px solid" alignItems="center" pl={1}>
                            <Flex align="center" justify={'flex-end'} gap={2}>
                                <Text textTransform={"capitalize"} >
                                    CID
                                </Text>
                                <Flex ml="auto">
                                    <Icon as={AiOutlineArrowDown} />
                                </Flex>
                            </Flex>
                        </Th>
                        <Th borderTop="1px solid" alignItems="center" gap={2} pl={1}>
                            <Flex align="center" justify={"flex-end"} gap={2}>
                                <Text textTransform={"capitalize"} >
                                    CRM Médico
                                </Text>
                                <Flex ml="auto">
                                    <Icon as={AiOutlineArrowDown} />
                                </Flex>
                            </Flex>
                        </Th>
                        <Th borderTop="1px solid" pl={1}>
                            <Flex align="center" justify={"flex-end"} gap={2}>
                                <Text textTransform={"capitalize"} >
                                    Início

                                </Text>
                                <Flex ml="auto">
                                    <Icon as={AiOutlineArrowDown} />
                                </Flex>
                            </Flex>
                        </Th>
                        <Th borderTop="1px solid" pl={1}>
                            <Flex align="center" justify={"flex-end"} gap={2}>
                                <Text textTransform={"capitalize"} >
                                    Término
                                </Text>
                                <Flex ml="auto">
                                    <Icon as={AiOutlineArrowDown} />
                                </Flex>
                            </Flex>
                        </Th>
                        <Th borderTop="1px solid" pl={1}>
                            <Flex align="center" justify={"flex-end"} gap={2}>
                                <Text textTransform={"capitalize"} >
                                    Dias
                                </Text>
                                <Flex ml="auto">
                                    <Icon as={AiOutlineArrowDown} />
                                </Flex>
                            </Flex>
                        </Th>
                        <Th borderTop="1px solid" pl={1}>
                            <Flex align="center" justify={"flex-end"} gap={2}>
                                <Text textTransform={"capitalize"} >
                                    Informações
                                </Text>
                                <Flex ml="auto">
                                    <Icon as={AiOutlineArrowDown} />
                                </Flex>
                            </Flex>
                        </Th>
                        <Th borderTop="1px solid" pl={1}>
                            <Flex align="center" justify={"flex-end"}>
                                <Text textTransform={"capitalize"} >
                                    Status
                                </Text>
                                <Flex ml="auto">
                                    <Icon as={AiOutlineArrowDown} />
                                </Flex>
                            </Flex>
                        </Th>
                        <Th borderTop="1px solid" pl={1}>
                            <Flex align="center" justifyContent={"space-evenly"}>
                                <Text textTransform={"capitalize"} >
                                    Ações
                                </Text>
                                <Flex ml="auto">
                                    <Icon as={AiOutlineArrowDown} />
                                </Flex>
                            </Flex>
                        </Th>
                    </Tr>
                </Thead>

                <Tbody className="cell-table">
                    <Tr bg={"white"} >
                        <Td borderBottom={"1px solid"}>1</Td>
                        <Td borderBottom={"1px solid"}>Repouso</Td>
                        <Td borderBottom={"1px solid"}>Própria</Td>
                        <Td borderBottom={"1px solid"}>
                            
                            <Flex align="center" justifyContent={"space-evenly"}>
                                <Text textTransform={"capitalize"} >
                                J11
                                </Text>
                                <Flex ml="auto">
                                    <Icon as={FiInfo} size={'20px'} />
                                </Flex>
                            </Flex>
                            </Td>
                        <Td borderBottom={"1px solid"}>CRM2334</Td>
                        <Td borderBottom={"1px solid"}>
                        <Flex align="center" justifyContent={"space-evenly"}>
                                <Text textTransform={"capitalize"} >
                                01/01/2023
                                </Text>
                                <Flex ml="auto">
                                    <Icon as={FiInfo} size={'20px'} />
                                </Flex>
                            </Flex>
                        </Td>
                        <Td borderBottom={"1px solid"}>01/01/2023</Td>
                        <Td borderBottom={"1px solid"}>3</Td>
                        <Td borderBottom={"1px solid"}><BotaoPendente /></Td>
                        <Td borderBottom={"1px solid"}><BotaoAtual /></Td>
                        <Td borderBottom={"1px solid"} >
                            <HStack><IconeBusca /> <IconeRelatorio /><IconeEditar /><IconeDeletar /></HStack>
                        </Td>
                    </Tr>
                    <Tr bg={"white"} >
                        <Td borderBottom={"1px solid"}>1</Td>
                        <Td borderBottom={"1px solid"}>Repouso</Td>
                        <Td borderBottom={"1px solid"}>Própria</Td>
                        <Td borderBottom={"1px solid"}>J11</Td>
                        <Td borderBottom={"1px solid"}>CRM2356</Td>
                        <Td borderBottom={"1px solid"}>01/01/2023</Td>
                        <Td borderBottom={"1px solid"}>01/01/2023</Td>
                        <Td borderBottom={"1px solid"}>3</Td>
                        <Td borderBottom={"1px solid"}><BotaoCompletas /></Td>
                        <Td borderBottom={"1px solid"}><BotaoAtual /></Td>
                        <Td borderBottom={"1px solid"} >
                            <HStack><IconeBusca /> <IconeRelatorio /><IconeEditar /><IconeDeletar /></HStack>
                        </Td>
                    </Tr>
                    <Tr bg={"white"} >
                        <Td borderBottom={"1px solid"}>1</Td>
                        <Td borderBottom={"1px solid"}>Repouso</Td>
                        <Td borderBottom={"1px solid"}>Própria</Td>
                        <Td borderBottom={"1px solid"}>J11</Td>
                        <Td borderBottom={"1px solid"}>CRM2356</Td>
                        <Td borderBottom={"1px solid"}>01/01/2023</Td>
                        <Td borderBottom={"1px solid"}>01/01/2023</Td>
                        <Td borderBottom={"1px solid"}>3</Td>
                        <Td borderBottom={"1px solid"}><BotaoCompletas /></Td>
                        <Td borderBottom={"1px solid"}><BotaoAtual /></Td>
                        <Td borderBottom={"1px solid"} >
                            <HStack><IconeBusca /> <IconeRelatorio /><IconeEditar /><IconeDeletar /></HStack>
                        </Td>
                    </Tr>
                    <Tr bg={"white"} >
                        <Td borderBottom={"1px solid"}>1</Td>
                        <Td borderBottom={"1px solid"}>Repouso</Td>
                        <Td borderBottom={"1px solid"}>Própria</Td>
                        <Td borderBottom={"1px solid"}>
                        <Flex align="center" justifyContent={"space-evenly"}>
                                <Text textTransform={"capitalize"} >
                                01/01/2023
                                </Text>
                                <Flex ml="auto">
                                    <Icon as={FiInfo} size={'20px'} />
                                </Flex>
                            </Flex>
                        </Td>
                        <Td borderBottom={"1px solid"}>CRM2356</Td>
                        <Td borderBottom={"1px solid"}>01/01/2023</Td>
                        <Td borderBottom={"1px solid"}>01/01/2023</Td>
                        <Td borderBottom={"1px solid"}>3</Td>
                        <Td borderBottom={"1px solid"}><BotaoCompletas /></Td>
                        <Td borderBottom={"1px solid"}><BotaoAtual /></Td>
                        <Td borderBottom={"1px solid"} >
                            <HStack><IconeBusca /> <IconeRelatorio /><IconeEditar /><IconeDeletar /></HStack>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>

    );

};

