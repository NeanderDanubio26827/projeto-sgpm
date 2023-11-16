import { Button } from "@chakra-ui/react";
import React from "react";
import { FiFilter } from "react-icons/fi";


export const ButtonFilter = () => {
    return (
        <Button
            fontWeight={500}
            color={'rgba(160, 174, 192, 1)'} leftIcon={<FiFilter size={"20px"} />}
            variant='outline'
            width={'120px'}
            height={'40px'}>
            Filtros
        </Button>
    );

};

