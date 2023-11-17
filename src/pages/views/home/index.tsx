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
                //bg="rgba(248, 249, 250, 1)"
                bg={'green.100'}
                w={'100vw'}
                h={'100vh'}
            >
                
                <Grid
                    templateAreas={`"nav header"
                                    "nav main"
                                    "nav footer"`}
                    //gridTemplateRows={'50px fit-content 30px'}
                    //gridTemplateColumns={`1fr ${isOpen ? "63vw" : `${'73vw'}`} `} // Use a expressão aqui
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
