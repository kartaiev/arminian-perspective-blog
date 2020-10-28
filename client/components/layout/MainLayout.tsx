import React, {ReactNode} from 'react';
import Footer from "./footer/Footer";
import { Divider, Flex, Grid, useColorMode } from "@chakra-ui/core";
import { bgColor, borderColor, color } from "../../customTheme";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

type Props = {
    children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      minH="100vh"
      maxW="100%"
      direction="column"
      px="6"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      overflow="hidden"
    >
      <Header />
      <Navbar />
      <Grid templateColumns={{ base: "1fr", xl: "5fr auto 1fr" }} gap={6}>
        <main>{children}</main>

        <Divider
          d={{ base: "none", xl: "block" }}
          borderColor={borderColor[colorMode]}
          orientation="vertical"
          my="6"
        />
        <Sidebar />
      </Grid>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
