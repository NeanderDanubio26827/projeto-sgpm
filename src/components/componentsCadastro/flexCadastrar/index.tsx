import { Box, Flex, Grid, GridItem, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { TitleCadastro } from "../tilteCadastro";
import { TextCadastro } from "../textCadastro";
import { InputCadastrar } from "../inputCadastrar";
import { BotaoCadastrar } from "../botaoCadastrar";
import { FlexMenor } from "../flexMenor";

interface IFlexCadastrar {
    isOpen: boolean;
}

export const FlexConteudo: React.FC<IFlexCadastrar> = (props) => {
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
                //width="1200px"
                minHeight="645px"
                height={'fit-content'}
                position="relative"
                borderBottom="1px solid  rgba(0, 0, 0, 0.5)"  // Ajuste a cor conforme necessário
                boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.5)"  // Ajuste o deslocamento e a cor da sombra conforme necessário
                bg={'white'}
            >
                {/* Quadrado cinza */}
                <Flex
                    position="absolute"
                    top={0}
                    left={0}
                    width="32px"
                    height="32px"
                    bg={"#D9D9D9"}
                />
                <Flex
                    position="absolute"
                    top={"32px"}
                    left={"32px"}
                    fontWeight={"700"}
                //border={"1px solid red"}
                //p={4}
                >
                    <TitleCadastro />
                </Flex>
                <Flex
                    //border={"1px solid red"}
                    boxSize={"fit-content"}
                    position="absolute"
                    top={"72px"}  // Ajuste a propriedade top para posicionar abaixo do TitleCadastro
                    left={"32px"}  // Ajuste a propriedade left conforme necessário
                    pt={4}
                    gap={2}
                >
                    <Flex display={"-ms-inline-grid"} fontWeight={700} >
                        <TextCadastro />
                        <HStack spacing={6} >
                            <InputCadastrar />
                            <BotaoCadastrar />
                        </HStack>
                    </Flex>

                </Flex>
            </Flex>

        </>
    );
};

