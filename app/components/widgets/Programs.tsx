"use client";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";
import { motion as m } from "framer-motion";
import {RevealWrapper} from "next-reveal"
const Programs = () => {
  return (
    <section>
      <Wrapper>
        <VStack mt={10} id="programs">
        <RevealWrapper
        delay={200}
        duration={1000}
        distance="500px"
        reset={true}
      >
          <Heading color={"black.300"} mb={5}>
            Available Programs
          </Heading>
          </RevealWrapper>
        </VStack>
        <Box mb={50}>
          <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} gap={5}>
            <Card shadow={"xl"} rounded={"lg"}>
              <m.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1.05 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Link href="/">
                  <CardHeader>
                    <Image
                      src="/web3.0.jpg"
                      alt="web"
                      height={400}
                      width={450}
                    />
                  </CardHeader>
                  <CardBody>
                    <Text textAlign={"center"} fontSize="2xl" my={2}>
                      Web 3.0 and Metaverse
                    </Text>
                  </CardBody>
                </Link>
              </m.div>
            </Card>
            <Card shadow={"xl"} rounded={"lg"}>
              <m.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1.05 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Link href={"/"}>
                  <CardHeader>
                    <Image src="/ai.jpeg" alt="ai" height={400} width={450} />
                  </CardHeader>
                  <CardBody>
                    <Text textAlign={"center"} fontSize="2xl" my={2}>
                      Artificial Intelligence (AI)
                    </Text>
                  </CardBody>
                </Link>
              </m.div>
            </Card>
            <Card shadow={"xl"} rounded={"lg"}>
              <m.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1.05 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Link href={"/"}>
                  <CardHeader>
                    <Image src="cnc.webp" alt="cnc" height={400} width={450} />
                  </CardHeader>
                  <CardBody>
                    <Text textAlign={"center"} fontSize="2xl" my={2}>
                      Cloud Native Computing (CNC)
                    </Text>
                  </CardBody>
                </Link>
              </m.div>
            </Card>
            <Card shadow={"xl"} rounded={"lg"}>
              <m.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1.05 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Link href={"/"}>
                  <CardHeader>
                    <Image src="/iot.webp" alt="iot" height={400} width={450} />
                  </CardHeader>
                  <CardBody>
                    <Text textAlign={"center"} fontSize="2xl" my={2}>
                      Ambient Computing and IoT
                    </Text>
                  </CardBody>
                </Link>
              </m.div>
            </Card>
            <Card shadow={"xl"} rounded={"lg"}>
              <m.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1.05 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Link href={"/"}>
                  <CardHeader>
                    <Image
                      src="/bio.jpg"
                      alt="bioinfo"
                      height={400}
                      width={450}
                    />
                  </CardHeader>
                  <CardBody>
                    <Text textAlign={"center"} fontSize="2xl" my={2}>
                      Genomics and Bioinformatics
                    </Text>
                  </CardBody>
                </Link>
              </m.div>
            </Card>
            <Card shadow={"xl"} rounded={"lg"}>
              <m.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1.05 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Link href={"/"}>
                  <CardHeader>
                    <Image
                      src="/net.webp"
                      alt="networking"
                      height={400}
                      width={450}
                    />
                  </CardHeader>
                  <CardBody>
                    <Text textAlign={"center"} fontSize="2xl" my={2}>
                      Programmability and Automation
                    </Text>
                  </CardBody>
                </Link>
              </m.div>
            </Card>
          </SimpleGrid>
        </Box>
      </Wrapper>
    </section>
  );
};

export default Programs;
