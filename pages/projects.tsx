import Head from "next/head";
import styles from "../styles/Projects.module.css"
import { Heading, Text, VStack } from "@chakra-ui/react";
import ConnectMeCard from "../components/projectCards/connectMeCard";
import TribespotCard from "../components/projectCards/tribespotCard";
import WITCard from "../components/projectCards/witWebsite";
import PersonalWebsiteCard from "../components/projectCards/personalWebsite";
import HeroXCard from "../components/projectCards/heroZCard";
import PageTransition from "../components/pageTransition";

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joanna He</title>
        <meta name="description" content="Joanna's Portfolio" />
        <link rel="preload" href={"https://i.imgur.com/gqC0mnt.jpg"} as="image" />
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
          <Text
            maxW={"3xl"}
            fontSize={"2xl"}
            pt={3}
          >
            Technical Projects
          </Text>
          <PersonalWebsiteCard />
          <WITCard />
          <Text
            maxW={"3xl"}
            fontSize={"2xl"}
            pt={3}
          >
            UX/UI Design
          </Text>
          <TribespotCard />
          <HeroXCard />
          <ConnectMeCard />
          <Heading pb={10}> </Heading>
          {/* End of Projects Section */}
        </VStack>
      </VStack>
      </PageTransition>
    </div>
  );
}
