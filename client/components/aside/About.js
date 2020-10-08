import React from 'react';
import Heading from "@chakra-ui/core/dist/Heading";
import {color, colorAlt} from "../../customTheme";
import Text from "@chakra-ui/core/dist/Text";
import {ABOUT_TEXT} from "../../lib/vars";
import {useColorMode} from "@chakra-ui/core";

const About = () => {
    const {colorMode} = useColorMode();
    return (
        <>
            <Heading color={color[colorMode]} as="h1" fontSize="2xl">
                О сайте
            </Heading>
            <Text pb="6" color={colorAlt[colorMode]}>
                {ABOUT_TEXT}
            </Text>
        </>
    );
};

export default About;