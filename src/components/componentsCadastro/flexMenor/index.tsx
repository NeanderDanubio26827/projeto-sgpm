import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Text } from "@chakra-ui/react";
import { IconeFlexMCadastro } from "./iconeFlexMenorCadastro";


export const FlexMenor = () => {

    return (

        <>
            <Flex
                //border={"1px solid red"}
                borderRadius={"8px"}
                width="14vw"
                height="28.97px"
                top="134px"
                left="307px"
                color={'rgba(217, 217, 217, 1)'}
                shadow={"lg"}
                bg={'white'}
                pl={2}
            >
                <Breadcrumb>
                    <BreadcrumbItem>
                    <IconeFlexMCadastro />
                        <BreadcrumbLink href='#'>                            
                            <Text
                                fontWeight={800}
                                color={"rgba(0, 0, 0, 0.48)"}
                                fontSize={'0.6vw'}
                                pl={2}
                                
                            >
                                RH
                            </Text>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>
                            <Text
                                fontWeight={800}
                                color={"rgba(0, 0, 0, 0.48)"}
                                fontSize={'0.6vw'}
                                
                            >
                                NOVO DOCUMENTO MÉDICO
                            </Text></BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Flex>
        </>
    )
};

