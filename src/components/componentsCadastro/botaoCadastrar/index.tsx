import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { BiPencil } from "react-icons/bi";

export const BotaoCadastrar = () => {
    return (
        <Button
            color={"white"}
            rightIcon={<BiPencil size={"0.7vw"} />}
            bg=' #38A169'
            variant='outline'
            w={'7.5vw'}
            fontSize={'0.9vw'}
        >
                Cadastrar
    
        </Button>
    );
};

