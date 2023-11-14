import { Flex, HStack, Text } from "@chakra-ui/react";
import { InputDashHeader } from "../../componentesGerais/inputDashHeader";
import { IconeConfig } from "../../componentesGerais/iconeDashHeader/iconeEnginner";
import { IconeLogin } from "../../componentesGerais/iconeDashHeader/iconeLogin";
import { ListDashHeader } from "../../componentesGerais/listDashHeader";
import { IconeSino } from "../../componentesGerais/iconeDashHeader/iconeSino";
import { IconeFiltro } from "../../componentesGerais/iconeDashHeader/iconeFiltro";
import React from "react";

interface IDashHeader {
    isOpen: boolean;
    handleToggle: () => void;
}

export const DashHeader: React.FC<IDashHeader> = (props) => {
    return (
        <Flex
            alignItems="center" // Use alignItems para alinhamento vertical
            textAlign="center"
            justify="center"
            flexDirection="row"
            //border={"1px solid red"}
            //width={"1200px"}
            w={props.isOpen ? "1200px" : "1400px"}
            transitionDuration="1.0s"
            height={"80px"}
            borderRadius={"8px"}
            borderBottom="1px solid  rgba(0, 0, 0, 0.5)"  // Ajuste a cor conforme necessário
            boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.5)"  // Ajuste o deslocamento e a cor da sombra conforme necessário
            bg={'white'}

        >
            <HStack
                spacing={2}
                justifyContent="space-between"
                w="100%"

            >
                <ListDashHeader handleToggle={props.handleToggle} />

                <Flex
                    w={'180px'}
                    height={"80px"}
                    textAlign="center"
                    align={"center"}
                    justify={"center"}
                    borderLeftWidth="0.5px"
                    borderRightWidth="0.5px"
                    borderColor="rgba(229, 229, 229, 1)"
                >
                    <Text fontWeight={700} fontSize={'18px'}> PMCE </Text>

                </Flex>

                <HStack spacing={4} mr={8} ml={8} height={"80px"}>
                    <InputDashHeader />
                    <IconeLogin />
                    <IconeConfig />
                    <IconeSino />
                </HStack>
            </HStack>
        </Flex>
    );
}
