import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { ABOUT_TEXT } from "../lib/vars";
import { Text } from "@chakra-ui/core";

const About = () => {
  return (
    <MainLayout>
      <Text pb="7.5rem">{ABOUT_TEXT}</Text>
    </MainLayout>
  );
};

export default About;
