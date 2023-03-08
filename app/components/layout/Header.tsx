"use client";
import {
  Box,
  MenuButton,
  MenuDivider,
  Menu,
  MenuList,
  MenuItem,
  Flex,
  HStack,
  Button,
  chakra,
  Text,
  Hide,
  Show,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import { motion as m } from "framer-motion";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import NavMenu from "./NavMenu";
import Burger from "./Burger";

function Header() {
  return (
    <Box
      as="header"
      bgColor={"white"}
      position={"sticky"}
      top="0"
      zIndex={50}
      backdropBlur={"3xl"}
    >
      <Wrapper>
        <Flex justifyContent="space-between" align={"center"} py={7}>
          {/* left area */}

          <Flex>
            <chakra.a href="/">
              <m.div
                animate={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Image src="/logo.svg" alt="logo" width={40} height={40} />
              </m.div>
            </chakra.a>
          </Flex>
          <Hide below="md">
            {/* <Box>
            <HStack spacing={4}>
              <Menu>
                <Link href="/">
                  <Text fontWeight={"semibold"} color={"black"}>
                    Home
                  </Text>
                </Link>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  py={5}
                  border="none"
                  bg="none"
                  fontWeight={"semibold"}
                  color={"black"}
                >
                  About
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link href="/about" color={"black"}>
                      The President
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  py={5}
                  border="none"
                  bg="none"
                  fontWeight={"semibold"}
                  color={"black"}
                >
                  Available Programs
                </MenuButton>
                <MenuList>
                  <MenuItem bg="none">
                    <Link href={"/web"}>
                      <Text color={"black.100"}>Metaverse Web 3.0</Text>
                    </Link>
                  </MenuItem>
                  <MenuDivider borderColor={"teal"} />
                  <MenuItem bg="none">
                    <Link href={"/cnc"}>
                      <Text color={"black.100"}>Cloud Native Computing</Text>
                    </Link>
                  </MenuItem>
                  <MenuDivider borderColor={"teal"} />
                  <MenuItem bg="none">
                    <Link href={"/ai"}>
                      <Text color={"black.100"}>Artificial Intelligence</Text>{" "}
                    </Link>
                  </MenuItem>
                  <MenuDivider borderColor={"teal"} />
                  <MenuItem bg="none">
                    <Link href={"/bcc"}>
                      <Text color={"black.100"}></Text>BlockChain Computing
                    </Link>
                  </MenuItem>
                  <MenuDivider borderColor={"teal"} />
                  <MenuItem bg="none">
                    <Link href={"/iot"}>
                      <Text color={"black.100"}></Text>Internet Of Things
                    </Link>
                  </MenuItem>
                  <MenuDivider borderColor={"teal"} />
                </MenuList>
              </Menu> 
              
              
            </HStack>
          </Box>*/}
            <NavMenu />
          </Hide>

          <HStack>
            <ColorModeSwitcher />

            <Show below="md">
              <Burger />
            </Show>
          </HStack>
        </Flex>
      </Wrapper>
    </Box>
  );
}

export default Header;
