import React, { useState } from "react";
import { DashHeader } from "../../../components/layout/dashHeader";
import { MenuLateral } from "../../../components/layout/menulateral";
import { FlexConteudo } from "../../../components/componentsCadastro/flexCadastrar";
import { Center, Flex, Grid, GridItem, useBreakpoint } from "@chakra-ui/react";
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
                w={'content'}
                h={'content'}
            >
                <Grid
                    templateAreas={`"nav header"
                                    "nav main"
                                    "nav footer"`}
                    gap={{lg: 8, md: 8, sm: 2}}
                    mt={4}
                    ml={{lg:4, md: 4, sm: 0}}
                    mr={{lg:4, md: 4, sm: 0}}
                >
                    <GridItem area={'header'}>
                        <DashHeader isOpen={isOpen} handleToggle={handleToggle} />
                    </GridItem>
                    <GridItem area={'nav'} >
                        <MenuLateral isOpen={isOpen} handleToggle={handleToggle} />
                    </GridItem>
                    <GridItem area={'main'}>
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
