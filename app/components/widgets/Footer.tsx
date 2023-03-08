"use client";
import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Link,
  Text,
  Grid,
  GridItem,
  IconButton,
  chakra,
} from "@chakra-ui/react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import { motion as m } from "framer-motion";
import Wrapper from "../shared/Wrapper";

function Footer() {
  return (
    <Wrapper>
      <Box mt={20}>
        <Container maxW={1200}>
          <Grid
            textAlign={{ lg: "start", base: "center" }}
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(5, 2fr)",
            }}
            gap={8}
          >
            <GridItem colSpan={{md: 2}}>
              <chakra.a href="/">
                <m.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1.05 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Image
                    src="/panacloudLogo.svg"
                    alt="logo"
                    width={250}
                    height={150}
                  />
                </m.div>
              </chakra.a>
            </GridItem>

            <GridItem>
              <Text lineHeight={2} color={"slategray"} fontWeight={"extrabold"}>
                Courses
              </Text>
              <Text lineHeight={2} color={"slategray"} >
                Web3.0 and Metaverse
              </Text>
              <Text lineHeight={2} color={"slategray"} >
                Artificial Intelligence
              </Text>
              <Text lineHeight={2} color={"slategray"} >
                Cloud Native Computing
              </Text>
              <Text lineHeight={2} color={"slategray"} >
              Bioinformatic
              </Text>
            </GridItem>
            <GridItem>
              <Text lineHeight={2} color={"slategray"} fontWeight={"extrabold"}>
                Support
              </Text>
              <Text lineHeight={2} color={"slategray"} >
                Terms of Services
              </Text>
              <Text lineHeight={2} color={"slategray"} >
                Legal
              </Text>
              <Text lineHeight={2} color={"slategray"} >
                Privacy Policy
              </Text>
             
            </GridItem>
            <GridItem>
              <Text lineHeight={2} color={"slategray"} fontWeight={"extrabold"}>
                About
              </Text>
              <Text lineHeight={2} color={"slategray"} >
                Our Projects
              </Text>
              <Text lineHeight={2} color={"slategray"} >
                Careers
              </Text>
              
            </GridItem>
          </Grid>

          <Box mt={20}>
            <Divider></Divider>
          </Box>
        </Container>

        <Container maxW={"100%"} py={6}>
          <Flex justifyContent={"space-around"} alignItems="center">
            <Text color={"slategray"}>
              © 2023 PIAIC by Ayesha Ch. All rights reserved.
            </Text>
            <HStack>
              <Box as="span" pl={15} color={"slategray"}>
                <Link href="https://github.com/" target={"_blank"}>
                  <IconButton
                    colorScheme="teal"
                    aria-label="IoSpeedometer"
                    rounded={"full"}
                    size={"sm"}
                    icon={<AiOutlineGithub color="white" size={20} />}
                  />
                </Link>
              </Box>
              <Box as="span" pl={15} color={"gray"}>
                <Link href="https://github.com/" target={"_blank"}>
                  <IconButton
                    colorScheme="teal"
                    aria-label="IoSpeedometer"
                    rounded={"full"}
                    size={"sm"}
                    icon={<FaFacebookF color="white" size={20} />}
                  />
                </Link>
              </Box>
              <Box as="span" pl={15} color={"gray"}>
                <Link href="https://https://twitter.com/" target={"_blank"}>
                  <IconButton
                    colorScheme="teal"
                    aria-label="IoSpeedometer"
                    rounded={"full"}
                    size={"sm"}
                    icon={<AiOutlineTwitter color="white" size={20} />}
                  />
                </Link>
              </Box>
              <Box as="span" pl={15} color={"teal"}>
                <Link href="https://discord.com/" target={"_blank"}>
                  <IconButton
                    colorScheme="teal"
                    aria-label="IoSpeedometer"
                    rounded={"full"}
                    size={"sm"}
                    icon={<AiFillYoutube color="white" size={20} />}
                  />
                </Link>
              </Box>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Wrapper>
  );
}

export default Footer;
