import { Flex, Box, VStack } from "@chakra-ui/react";
import React from "react";
import { FlexMenor } from "../../componentsCadastro/flexMenor";
import { ImgFicha } from "../dadosDaFicha/imgServidor";
import { TitlePerfil } from "../dadosDaFicha/titlePerfil";
import { TitleRegistrosMedicos } from "../registrosMedicos/title";
import { BotaoNovoRegistro } from "../botaoNovoRegistro";
import { InputBuscaFicha } from "../registrosMedicos/inputs/inputBusca";
import { ButtonExportar } from "../registrosMedicos/buttons/butttonExportar";
import { HeaderRegistrosMedicos } from "../registrosMedicos/header";
import { TableFicha } from "../table";
import { TabFicha } from "../tabFicha";
import { DadosFicha } from "../dadosDaFicha/dados";

interface IFlexFicha {
    isOpen: boolean;
}

export const FlexFicha: React.FC<IFlexFicha> = (props) => {
    return (
        <>
            <FlexMenor />
            <Flex
                pl={4}
                mt={6}
                borderRadius={"8px"}
                borderTopLeftRadius={0}
                //border={"1px solid red"}
                w={props.isOpen ? "83vw" : "93vw"}
                transitionDuration="1.0s"
                minHeight="645px"
                height={'1000px'}
                position="relative"
                borderBottom="1px solid  rgba(0, 0, 0, 0.5)"
                boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.5)"
                bg={'white'}
                flexDir="column"
            >
                {/* <Flex
          width="100%"
          height="32px"
          bg={"#D9D9D9"}
          borderBottom="1px solid rgba(0, 0, 0, 0.5)"
        /> */}

                <VStack spacing={6} mt={4} p={4} alignItems="flex-start">
                    <TitlePerfil />
                </VStack>

                <Flex
                    borderBottom="1px solid rgba(0, 0, 0, 0.5)"
                    boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.5)"
                    borderRadius={'8px'}
                    bg={'white'}
                    p={4}
                    mt={4}
                    w={props.isOpen ? "81vw" : "91vw"}
                    transitionDuration="1.0s"
                    height={'275px'}
                    align={'center'}
                    //justifyContent={'center'}
                >   
                    <ImgFicha />
                    <DadosFicha />
                </Flex>

                <Flex
                    /* borderBottom="1px solid rgba(0, 0, 0, 0.5)"
                    boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.5)"
                    borderRadius={'8px'} */
                    bg={'white'}
                    p={4}
                    mt={4}
                    width="100%"
                >
                    <TitleRegistrosMedicos />
                </Flex>

                <TabFicha />

                <Flex
                    borderBottom="1px solid rgba(0, 0, 0, 0.5)"
                    boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.5)"
                    borderRadius={'8px'}
                    bg={'white'}
                    p={4}
                    mt={4}
                    w={props.isOpen ? "81vw" : "91vw"}
                    transitionDuration="1.0s"
                >
                    {/* Seu conteúdo aqui */}


                    <VStack>
                        <HeaderRegistrosMedicos />
                        <TableFicha isOpen={props.isOpen} />
                    </VStack>
                </Flex>

                <Flex mt={4} align={'center'} justify={'center'}>
                    <BotaoNovoRegistro />
                </Flex>
            </Flex>
        </>
    );
};
