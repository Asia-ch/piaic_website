import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Text,
  Heading,
  color,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from "./NavMenu";
import Image from "next/image";
import logo from "@/public/Logo.webp";

export default function Burger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box onClick={onOpen}>
        <GiHamburgerMenu size={25}/>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <NavMenu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
