import { Flex } from "@chakra-ui/react";
import { List } from "phosphor-react";
import React from "react";

interface IListDashHeader {
    handleToggle: () => void;
}

export const ListDashHeader: React.FC<IListDashHeader> = (props) => {

    return (
        <>
            <Flex
                pl={4}
                ml={4}
            //border={'1px solid red'}
            >
                <List
                    weight="bold"
                    color="#A0AEC0"
                    size={'24px'}
                    onClick={props.handleToggle}
                />
            </Flex>
        </>
    );
};