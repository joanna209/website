import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Button,
  Heading,
  Link,
  Text,
  VStack
} from '@chakra-ui/react';
import ConnectMeCard from "../components/projectCards/connectMeCard";
import TribespotCard from "../components/projectCards/tribespotCard";
import WITCard from "../components/projectCards/witWebsite";
import { FaArrowRight } from "react-icons/fa";
import PageTransition from "../components/pageTransition";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joanna He</title>
        <meta name="description" content="Joanna's Portfolio" />
        <link rel="icon" href="https://i.imgur.com/gqC0mnt.jpg" />
      </Head>

      <VStack spacing={12} m={2}>
      <PageTransition>
        <VStack spacing={4} align="start">
          {/* Start of About Me Section */}
          <Heading fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }} pt={10}>
            Hi, I&apos;m Joanna{" "}
            <span role="img" aria-label="waving-hand">
              👋
            </span>
          </Heading>

          <Text
            color={"gray.500"}
            maxW={("3xl")}
            fontSize={{ base: "0xl", md: "1xl", lg: "2xl" }}
          >
            I am a software engineer and UX/UI designer who is passionate about
            how technology can improve the quality of life for others and make
            the world a better place. Currently, I am a second year student
            studying B. Advanced Science/Computer Science at UNSW Sydney and am
            volunteering at the{" "}
            <Link
              href="https://www.facebook.com/unsw.wit"
              color="blue.500"
              isExternal
            >
              UNSW Women in Technology (WIT)
            </Link>{" "}
            society. In my spare time, I enjoy playing tennis with friends,
            cooking and travelling to new places{" "}
            <span role="img" aria-label="small-airplane">
              🛩️
            </span>{" "}
            !
          </Text>
          {/* End of About Me Section */}

          {/* Start of Projects Section */}
          <Heading fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }} pt={10}>
            Projects{" "}
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </Heading>
          <Text
            color={"gray.500"}
            maxW={"3xl"}
            fontSize={{ base: "0xl", md: "1xl", lg: "2xl" }}
          >
            Here are some of my favourite projects I&apos;ve worked on!
          </Text>
          <WITCard />
          <TribespotCard />
          <ConnectMeCard />
          <Button rightIcon={<FaArrowRight />} variant="link" pt={2}>
            <Link href="/projects">See all projects</Link>
          </Button>
          {/* End of Projects Section */}

          {/* Start of Contact Section */}
          <Heading fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }} pt={10}>
            Let&apos;s connect{" "}
            <span role="img" aria-label="glowing-star">
              🌟
            </span>
          </Heading>
          <Text
            color={"gray.500"}
            maxW={"3xl"}
            fontSize={{ base: "0xl", md: "1xl", lg: "2xl" }}
            pb={10}
          >
            Feel free to shoot me an{" "}
            <Link
              href="mailto:joanna.he3@gmail.com"
              color="blue.500"
              isExternal
            >
              email
            </Link>{" "}
            or message me on{" "}
            <Link
              href="https://www.linkedin.com/in/joannahe9/"
              color="blue.500"
              isExternal
            >
              LinkedIn
            </Link>
            !
          </Text>
          {/* End of Contact Section */}
        </VStack>
        </PageTransition>
      </VStack>
    </div>
  );
}
