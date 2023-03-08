"use client";
import Wrapper from "@/app/components/shared/Wrapper";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import President from "/public/president.png";
import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";
import { RevealWrapper } from "next-reveal";
const Hero = () => {
  return (
    <section>
      <Wrapper>
        <Flex
          align={"center"}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex={2}>
            {/* left Side */}
            <RevealWrapper
              origin="left"
              delay={200}
              duration={1000}
              distance="500px"
              reset={true}
            >
              <Heading color={"teal"} fontSize={"56"}>
                Presidential Initiative
              </Heading>
              <Text fontSize={30} fontWeight="bold" color={"black.100"}>
                for Artificial Intelligence & Computing (PIAIC)
              </Text>

              <Text lineHeight={1} mt={8} color={"slategray"} mx={{ base: 1 }}>
                The mission of PIAIC is to reshape Pakistan by revolutionizing
                education, research, and <br /> business by adopting latest,
                cutting-edge technologies. Experts are calling this the 4th{" "}
                <br /> industrial revolution. We want Pakistan to become a
                global hub for AI, data science,
                <br />
                cloud native computing, edge computing, blockchain, augmented
                reality, and internet of things.
              </Text>
            </RevealWrapper>
            <Link href="https://portal.piaic.org/signup">
              <Button
                colorScheme={"teal"}
                variant="solid"
                size="lg"
                fontWeight="extrabold"
                mr={4}
                mt={10}
                alignItems={{ base: "center" }}
              >
                Apply
              </Button>
            </Link>
          </Box>

          <Box flex={1}>
            {/* Right Side */}
            <m.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1.05 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Image src={President} alt="president" />
            </m.div>
          </Box>
        </Flex>
      </Wrapper>
    </section>
  );
};

export default Hero;
