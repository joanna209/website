import Link from "next/link";
import { NextSeo } from "next-seo";
import {
  Center,
  Heading,
  VStack,
  Text,
  Container,
  Button,
} from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Container w="full" mx="auto" maxW="3xl" py={{ base: "190", md: "200" }}>
      <Center>
        <NextSeo
          title="404 – Joanna He"
          canonical="https://joannahe.me/404"
          openGraph={{
            url: "https://joannahe.me/404",
            title: "404 – Joanna He",
          }}
        />
        <VStack>
          <Heading size="3xl">404</Heading>
          <Text mb={8} pb={4}>
            Page not found
          </Text>
          <Button colorScheme="blue" variant="solid">
            <Link href="/">Return home</Link>
          </Button>
        </VStack>
      </Center>
    </Container>
  );
}
