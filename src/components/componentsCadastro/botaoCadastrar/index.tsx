import { Button } from "@chakra-ui/react";
import React from "react";
import { BiPencil } from "react-icons/bi";

export const BotaoCadastrar = () => {
    return (
        <Button color={"white"} rightIcon={<BiPencil size={"12px"} />} bg=' #38A169' variant='outline'>
            Cadastrar
        </Button>
    );
}; 

