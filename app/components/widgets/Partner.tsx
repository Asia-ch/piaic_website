"use client";
import { Container, Flex, Heading, VStack } from "@chakra-ui/react";
import Panacloud from "../../../public/panacloudLogo.svg";
import Saylani from "../../../public/saylaniLogo.png";
import Image from "next/image";
import { motion as m } from "framer-motion";
import Wrapper from "../shared/Wrapper";
import {RevealWrapper} from "next-reveal"
function Partner() {
  return (
    <Wrapper>
    <Container maxW="6xl" px={10} py={10} mt={20} shadow={"sm"} rounded={"lg"} >
      <VStack>
      <RevealWrapper
        delay={200}
        duration={1000}
        distance="500px"
        reset={true}
      >
        <Heading color={'black'} fontSize={{base: '2xl'}}>Strategic Partners</Heading>
        </RevealWrapper>
      </VStack>
      <m.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Flex my={20} justifyContent={"space-around"} px={{base: 6}}>
          <Image src={Saylani} alt="saylani" width={300} />
          <Image src={Panacloud} alt="Panacloud" width={150} />
        </Flex>
      </m.div>
    </Container>
    </Wrapper>
  );
}

export default Partner;
