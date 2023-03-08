"use client";
import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import Wrapper from "../shared/Wrapper";
import { RevealWrapper } from "next-reveal";
import { useState } from "react";
import Image from "next/image";
import Image1 from "../../../public/image1.jpg";
import Image2 from "../../../public/image2.jpg";
import Image3 from "../../../public/image3.jpg";
import { motion as m } from "framer-motion";

const Images = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section>
      <Wrapper>
        <VStack>
          <RevealWrapper
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <Heading my={20}>Images</Heading>
          </RevealWrapper>
        </VStack>

        <Tabs
          rounded={"lg"}
          shadow={"xl"}
          onChange={(index) => setTabIndex(index)}
        >
          <TabList>
            <Tab>
              <m.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1.05 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Image src={Image1} alt="image" width={470} />
              </m.div>
            </Tab>

            <Tab>
              <m.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1.05 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Image src={Image2} alt="image" width={470} />
              </m.div>
            </Tab>
            <Tab>
              <m.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1.05 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Image src={Image3} alt="image" width={470} />
              </m.div>
            </Tab>
          </TabList>
          <RevealWrapper
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
          >
            <TabPanels p="2rem">
              <TabPanel maxW={"md"}>
                The Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah
                on December 28th, where he assured the PIAIC management team of
                his full support for the national cause and offered space at all
                the public universities in Sindh.
              </TabPanel>
              <TabPanel maxW={"md"} ml={{base: 0, md: 0,lg: 450}} >
                First official PIAIC meeting on November 1st, 2018. From left to
                right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat Ali
                (General Secretary PIAIC), President Dr. Arif Alvi, Mr. Yousuf
                Lakhani (Presdent Saylani Welfare Trust, Mr. Muhammad Ghazzal
                (COO Saylani Welfare Trust).
              </TabPanel>
              <TabPanel maxW={"md"} ml={{base: 0, md: 0,lg: 950}}>
                President Dr. Arif Alvi launching the official website of the
                PIAIC on December 9, 2018. From left to right: Mr. Adil Altaf
                (Director Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr.
                Hunaid Lakhani (Chancellor Iqra University), President Dr. Arif
                Alvi, Mr. Sulaiman S. Mehdi (Chairman Pakistan Stock Exchange),
                Mr. Zeeshan Hanif (CTO Panacloud), Maulana Bashir Farooqui
                (Founder Saylani Welfare Trust), Mr. Yousuf Lakhani (President
                Saylani Welfare Trust).
              </TabPanel>
            </TabPanels>
          </RevealWrapper>
        </Tabs>
      </Wrapper>
    </section>
  );
};

export default Images;
