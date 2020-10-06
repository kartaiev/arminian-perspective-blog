import navPages from "../../lib/navPages";
import Link from "next/link";
import { useRouter } from "next/router";
import { ListItem, PseudoBox, useColorMode } from "@chakra-ui/core";
import { borderColor } from "../../customTheme";

const navLinks = () => {
  const pathName = useRouter().pathname;

  const { colorMode } = useColorMode();

  return navPages.map(({ label, path }) => {
    const border = pathName === path ? borderColor[colorMode] : "transparent";

    return (
      <PseudoBox
        border="1px"
        borderColor={border}
        as={ListItem}
        key={path}
        className="link"
        _hover={{ border: "1px", borderColor: borderColor[colorMode] }}
      >
        <Link href={path}>
          <a className="border-none">{label}</a>
        </Link>
      </PseudoBox>
    );
  });
};

export default navLinks;
