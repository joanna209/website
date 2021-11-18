import React from "react";
import {
  HStack,
  Button,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Footer () {
  const date = new Date().getFullYear();

  function FooterLink(props) {
    const { href, name, ...rest } = props;

    return (
      <NextLink href={href} passHref>
        <Button
          variant="unstyled"
          {...rest}
          color={useColorModeValue("neutral.800", "neutralD.800")}
          _hover={{ color: useColorModeValue("neutral.1000", "neutralD.1000") }}
        >
          {name}
        </Button>
      </NextLink>
    );
  }

  return (
    <Container>
      <HStack
        justify="space-between"
        w="100%"
        display={{ base: "none", md: "flex" }}
        py={4}
      >
        <Text
          fontSize="sm"
          color={useColorModeValue("neutral.800", "neutralD.800")}
        >
          © {date} Daniel Wirtz{" "}
        </Text>
        <HStack spacing={4}>
          <FooterLink href="/disclaimer" name="Disclaimer" />
          <FooterLink href="/privacy" name="Privacy" />
        </HStack>
      </HStack>
    </Container>
  );
};
