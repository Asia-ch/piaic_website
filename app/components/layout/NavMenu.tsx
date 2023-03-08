import {
  Flex,
  Stack,
  Link,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Text,
  HStack,
  MenuDivider,
  VStack,
  List,
} from "@chakra-ui/react";
import { BiBarChart } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineUsers, HiOutlineBuildingStorefront } from "react-icons/hi2";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavMenu = () => {
  return (
    <>
      <HStack color="black" fontWeight="bold">
        <Stack
          gap={5}
          direction={{ base: "column", md: "row" }}
          align={{ base: "left", md: "center" }}
        >
          <Link href="/">Home</Link>
          <Link href="/about" color={"black"}>
            About
          </Link>
          <Link href="#programs">Available Programs</Link>
        </Stack>
      </HStack>
    </>
  );
};

export default NavMenu;
