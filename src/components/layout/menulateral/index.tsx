import { Flex, Grid, GridItem, Icon, Image, Text } from "@chakra-ui/react"
import Brasao from '../../../assets/img/BRASAOPMCEbranco2.png';
import Relogio from "../../componentesGerais/relogio";
import { IconeMinhaArea } from "../../componentesGerais/iconesMenuLateral/iconeMinhaArea";
import { AccordionMenuLateral } from "../../componentesGerais/accordionMenuLateral";
import {IconeSistema} from "../../componentesGerais/iconesMenuLateral/iconeSistema";
import { IconeCadastro } from "../../componentesGerais/iconesMenuLateral/iconeMenulateralCadastro";
import '../../border.modules.css';
import React from "react";
import { IconeBusca } from "../../componentesGerais/iconesMenuLateral/iconeMenulateralBusca";
import { IconeRelatorio } from "../../componentesGerais/iconesMenuLateral/iconeMenuLateralRelatorios";

interface IMenuLateral {
    isOpen: boolean;
}

export const MenuLateral: React.FC<IMenuLateral> = (props) => {
    return (
        <>
            <Flex
                flexDirection={"column"}
                //width={"240px"}
                w={props.isOpen ? "240px" : "60px"}
                transitionDuration="1.0s"
                height={"873px"}
                //border={"1px solid red"}
                bg={"#276749"}
                borderRadius={"15px"}
                
            //fontFamily={'fonts'}

            >

                <Flex
                    //flex para a imagem
                    pb={4}
                    className="gradient-border"
                    display={props.isOpen ? "visibility" : "none"}>

                    <Image src={Brasao}
                        position={"relative"}
                        top={"5px"}
                        left={"38px"}

                    >

                    </Image>
                </Flex>

                <Flex
                    flexDirection="column"
                    position="relative"

                >
                    <Flex pt={6} pb={0}
                        className="gradient-border"
                    >
                        <Text
                            color={"white"}
                            width={"240px"}
                            height={"88px"}
                            //fontWeight={800}
                            textAlign={"center"}
                            display={props.isOpen ? "visibility" : "none"}


                        >
                            SISTEMA DE GESTÃO
                            <br />
                            POLICIAL MILITAR
                        </Text>
                        <Text
                            color={"white"}
                            width={"240px"}
                            height={"88px"}
                            //fontWeight={800}
                            textAlign={"center"}
                            display={!props.isOpen ? "visibility" : "none"}


                        >
                            SGPM
                        </Text>
                    </Flex>
                    <Flex
                        color={"white"}
                        gap="8px"
                        display={"-ms-inline-flexbox"}
                        //p={5}
                        className="gradient-border"


                    >
                        <Flex
                            
                            p={6}
                            pl={4}
                            _hover={{
                                transform: "scale(1.0)",
                                bgColor: "white",
                                textColor: "black",
                                cursor: "pointer",
                                transition: ".9s",

                            }}

                        >
                            <IconeSistema />
                            <Text pl={5} display={props.isOpen ? "visibility" : "none"}>Sistemas</Text>
                        </Flex>
                        
                        <Flex
                            p={6}
                            pl={4}
                            _hover={{
                                transform: "scale(1.0)",
                                bgColor: "white",
                                textColor: "black",
                                cursor: "pointer",
                                transition: ".9s",

                            }}
                        >
                            <IconeMinhaArea />
                            <Text pl={5} display={props.isOpen ? "visibility" : "none"}>Minha área</Text>
                        </Flex>
                    </Flex>
                </Flex>

                <Flex
                    p={8}
                    color="white"
                    textAlign={'center'}
                    align={"center"}   // Adicionado para centralizar verticalmente
                    justify={"center"} // Adicionado para centralizar horizontalmente
                >
                    <Text
                        fontWeight={800}
                        whiteSpace="nowrap"  // Adicionado para evitar quebras de linha
                        display={props.isOpen ? "visibility" : "none"}
                    >
                        RECURSOS HUMANOS
                    </Text>
                    <Text
                        fontWeight={800}
                        whiteSpace="nowrap"  // Adicionado para evitar quebras de linha
                        display={!props.isOpen ? "visibility" : "none"}
                    >
                        RH
                    </Text>
                </Flex>

                <Flex
                    color={"white"}
                    //border={"1px solid yellow"}
                    flexDirection={"column"}
                    width={"auto"}
                    height={"168px"}
                    align="center"
                >

                    <AccordionMenuLateral
                        namePrimary="Cadastro"
                        nameSecondary="Cadastrar"
                        customIcon={<Icon as={IconeCadastro} boxSize={5} />}
                    />
                    <AccordionMenuLateral
                        namePrimary="Consulta"
                        nameSecondary="Lista de Atestados"
                        customIcon={<Icon as={IconeBusca} boxSize={5} />}
                    />
                    <AccordionMenuLateral
                        namePrimary="Relatórios"
                        nameSecondary="Relatório"
                        customIcon={<Icon as={IconeRelatorio} boxSize={5} />}
                    />

                </Flex>

                <Flex
                    color={"white"}
                    fontSize="12px"
                    fontWeight="500"
                    lineHeight="16px"
                    letterSpacing="0"
                    textAlign="center"
                    fontFamily="Roboto"
                    align={"center"}
                    justify={"center"}
                    h={"100%"}
                    display={props.isOpen ? "visibility" : "none"}
                >
                    <Grid
                        templateAreas={`"header"
                  "footer"`}
                        gridTemplateRows={'90% 1fr'}
                        gridTemplateColumns={'1fr'}
                        h={"100%"}
                    >
                        <GridItem area={'header'}>

                        </GridItem>
                        <GridItem area={'footer'}>
                            <Relogio />
                        </GridItem>
                    </Grid>

                </Flex>

            </Flex >
        </>
    )
}