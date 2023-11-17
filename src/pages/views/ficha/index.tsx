import React, { useState } from "react";
import { DashHeader } from "../../../components/layout/dashHeader";
import { MenuLateral } from "../../../components/layout/menulateral";
import { Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import { FooterCetic } from "../../../components/componentsCadastro/footerImgCETIC";
import { FlexFicha } from "../../../components/componentesFicha/flexFicha";

interface IFicha {
    onOpen: () => void;
    onClose: () => void;
}
export const Ficha: React.FC<IFicha> = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Flex
                bg="rgba(248, 249, 250, 1)"
                w={'100vw'}
                h={'100vh'}
            >
                <Grid
                    templateAreas={`"nav header"
                                    "nav main"
                                    "nav footer"`}
                    gridTemplateRows={'50px 1fr 30px'}
                    //gridTemplateColumns={'240px 1fr'}  // O primeiro valor foi ajustado para a largura do MenuLateral
                    gridTemplateColumns={`1fr ${isOpen ? "63vw" : `${'73vw'}`} `} // Use a expressão aqui

                    h='100vh'
                    
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
                        {/* <FlexConteudo isOpen={isOpen} /> */}
                        <FlexFicha isOpen={isOpen} />
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
