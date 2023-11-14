import { Button } from "@chakra-ui/react";
import React from "react";
import { FiDownloadCloud } from "react-icons/fi";


export const ButtonExportar = () => {
    return (
        <Button fontWeight={500} color={'rgba(160, 174, 192, 1)'} leftIcon={<FiDownloadCloud size={"20px"} />} variant='outline'>
            Exportar
        </Button>
    );

};

