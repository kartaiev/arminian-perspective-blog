import React from "react";
import Header from "components/layout/header/Header";
import Footer from "components/layout/footer/Footer";
import { handleScroll } from "../../lib/helpers";
import { Box, useColorMode } from "@chakra-ui/core";
import { bgColor, borderColor, color } from "../../customTheme";
import Grid from "@chakra-ui/core/dist/Grid";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import Divider from "@chakra-ui/core/dist/Divider";
import Aside from "./aside/Aside";

const MainLayout = ({ children }) => {
  const { colorMode } = useColorMode();

  const width = useWindowWidth();
  const colTemplate = width > 768 ? "5fr auto 1fr" : "1fr";

  return (
    <Box h="100%" px="6" bg={bgColor[colorMode]} color={color[colorMode]}>
      <Header />
      <Grid
        templateColumns={colTemplate}
        gap={6}
        className="article-body-container"
      >
        <main>{children}</main>
        {width > 768 && (
          <>
            <Divider
              borderColor={borderColor[colorMode]}
              orientation="vertical"
              my="6"
            />
            <Aside />
          </>
        )}
      </Grid>
      <Footer />
    </Box>
  );
};

export default MainLayout;
