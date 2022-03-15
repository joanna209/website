import Link from "next/link";
import { NextSeo } from "next-seo";
import {
  Center,
  Heading,
  VStack,
  Text,
  Container,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import PageTransition from "../components/pageTransition";

export default function NotFound() {
  return (
    <Container w="full" mx="auto" maxW="3xl" py={{ base: "190", md: "200" }}>
      <Center>
        <NextSeo
          title="Joanna He"
          canonical="https://joannahe.me/404"
          openGraph={{
            url: "https://joannahe.me/404",
            title: "Joanna He",
          }}
        />
        <VStack>
          <PageTransition>
            <Heading size="3xl">404</Heading>
            <Text
              color={useColorModeValue("gray.600", "gray.400")}
              mb={8}
              pb={4}
            >
              Page not found
            </Text>
            <Button
              backgroundColor={useColorModeValue("gray.100", "gray.700")}
              color={useColorModeValue("blue.600", "blue.300")}
              variant="solid"
            >
              <Link href="/">Return home</Link>
            </Button>
          </PageTransition>
        </VStack>
      </Center>
    </Container>
  );
}
