import React, { useState } from "react";
import { DashHeader } from "../../../components/layout/dashHeader";
import { MenuLateral } from "../../../components/layout/menulateral";
import { FlexConteudo } from "../../../components/componentsCadastro/flexCadastrar";
import { Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import { FooterCetic } from "../../../components/componentsCadastro/footerImgCETIC";

interface IHomePrincipal {
    onOpen: () => void;
    onClose: () => void;
}
export const HomePrincipal: React.FC<IHomePrincipal> = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Flex
                bg="rgba(248, 249, 250, 1)"
                //w={'100%'}
                //h={'917px'}
            >
                <Grid
                    templateAreas={`"nav header"
                                    "nav main"
                                    "nav footer"`}
                    //gridTemplateRows={'50px fit-content 30px'}
                    //gridTemplateColumns={'240px 1fr'}  // O primeiro valor foi ajustado para a largura do MenuLateral
                    //gridTemplateRows={'50px min-content 30px'}
                    gridTemplateColumns={`1fr ${isOpen ? "1200px" : `${'100%'}`} `} // Use a expressão aqui

                    //minHeight="645px"
                    //height={'fit-content'}
                    gap='8'
                    mt={"25px"}
                    ml={"25px"}

                >
                    <GridItem area={'header'}>
                        <DashHeader isOpen={isOpen} handleToggle={handleToggle} />
                    </GridItem>
                    <GridItem area={'nav'} >
                        <MenuLateral isOpen={isOpen} />
                    </GridItem>
                    <GridItem
                        mt={8} area={'main'}
                    //shadow={'lg'}
                    //border={"1px solid yellow"}
                    >
                        <FlexConteudo isOpen={isOpen} />
                    </GridItem>
                    <GridItem area={'footer'} >
                        <Center>
                            <FooterCetic />
                        </Center>
                    </GridItem>
                </Grid>
            </Flex>
        </>
    );
}
