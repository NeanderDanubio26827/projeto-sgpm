import React from 'react';
import { Accordion, AccordionItem, AccordionButton, Flex, AccordionIcon, AccordionPanel, Center, Icon } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

interface IAccordionMenu {
    namePrimary: string,
    nameSecondary: string,
    displayCustom: string,
    customIcon: React.ReactNode; // Nova propriedade para o ícone personalizado
}

export const AccordionMenuLateral: React.FC<IAccordionMenu> = (props) => {
    return (
        <Accordion
            allowToggle
            color="white"
            _hover={{
                transform: "scale(1.0)",
                bgColor: "white",
                textColor: "black",
                cursor: "pointer",
                transition: ".9s",
            }}
            w={"100%"}
            //ml={4}
            pt={2}
        >
            <AccordionItem border="none" >
                <h2>
                    <AccordionButton _hover={{ focus: "none" }}
                        //pl={-2}
                        pr={6}
                    >
                        <Flex align="center" as="span" flex="1" fontSize="1em">
                            {props.customIcon} {/* Utilize o ícone personalizado passado como prop */}
                            <Text
                                pl={6}
                                fontSize={'0.9vw'}
                                display={props.displayCustom}
                            >{props.namePrimary}
                            </Text>
                        </Flex>
                        <AccordionIcon display={props.displayCustom} />
                    </AccordionButton>
                </h2>
                <AccordionPanel bg="rgb(226, 232, 240)" width="100%" height={"100%"} marginBottom={0}>
                    <Center>{props.nameSecondary}</Center>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}
