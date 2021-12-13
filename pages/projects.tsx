import Head from "next/head";
import styles from "../styles/Projects.module.css";
import { Heading, Text, VStack } from "@chakra-ui/react";
import PageTransition from "../components/pageTransition";
import dynamic from 'next/dynamic'

// dynamically importing card components 
const HeroZ = dynamic(() => import('../components/projectCards/heroZCard'));
const PersonalWebsite = dynamic(() => import('../components/projectCards/personalWebsite'));
const WITWebsite = dynamic(() => import('../components/projectCards/witWebsite'));
const ConnectMe = dynamic(() => import('../components/projectCards/connectMeCard'));
const Tribespot = dynamic(() => import('../components/projectCards/tribespotCard'));

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joanna He</title>
        <meta name="description" content="Joanna's Portfolio" />
      </Head>

      <PageTransition>
        <VStack spacing={12}>
          <VStack spacing={4} align="start">
            {/* Start of Projects Section */}
            <Heading fontSize={"3xl"} pt={10}>
              Projects{" "}
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </Heading>
            <Text
              color={"gray.500"}
              fontSize={{ base: "0xl", md: "1xl", lg: "2xl" }}
            >
              Here are all of my projects and other things I have worked on
            </Text>
            <Text maxW={"3xl"} fontSize={"2xl"} pt={3}>
              Technical Projects
            </Text>
            <PersonalWebsite />
            <WITWebsite />
            <Text maxW={"3xl"} fontSize={"2xl"} pt={3}>
              UX/UI Design
            </Text>
            <Tribespot />
            <HeroZ />
            <ConnectMe />
            <Heading pb={10}> </Heading>
            {/* End of Projects Section */}
          </VStack>
        </VStack>
      </PageTransition>
    </div>
  );
}
