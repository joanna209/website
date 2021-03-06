import {
  Button,
  Link,
  LinkBox,
  HStack,
  Tag,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";

export default function WITCard() {
  return (
    <HStack
      p={4}
      bg={useColorModeValue("white", "neutralD.100")}
      rounded="lg"
      borderWidth="1px"
      borderColor={useColorModeValue("neutral.400", "neutralD.400")}
      maxW={"3xl"}
      h="100%"
      textAlign="left"
      align="start"
      spacing={4}
      transition="all 0.25s"
      transition-timing-function="spring(1 100 10 10)"
      _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
    >
      {/*Start of WIT Website Card*/}
      <LinkBox
        rounded="lg"
        position="relative"
        overflow="hidden"
        lineHeight={0}
        boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.04)"
      >
        <LinkBox
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          opacity={0.25}
        ></LinkBox>
      </LinkBox>

      <VStack align="start" justify="flex-start" spacing={1}>
        <VStack spacing={0} align="start">
          <HStack>
            <Text fontWeight="bold" fontSize={"xl"}>
              WIT Website
            </Text>
          </HStack>
          <HStack pb={3}>
            <Wrap>
              <Tag
                fontSize={{ base: "xs", md: "sm", lg: "md" }}
                bg={useColorModeValue("gray.200", "gray.700")}
              >
                React
              </Tag>
              <Tag
                fontSize={{ base: "xs", md: "sm", lg: "md" }}
                bg={useColorModeValue("gray.200", "gray.700")}
              >
                Express
              </Tag>
              <Tag
                fontSize={{ base: "xs", md: "sm", lg: "md" }}
                bg={useColorModeValue("gray.200", "gray.700")}
              >
                PostgreSQL
              </Tag>
            </Wrap>
          </HStack>

          <Text
            fontSize={{ base: "xs", md: "sm", lg: "md" }}
            color={useColorModeValue("neutral.1000", "neutralD.1000")}
          >
            A website that aims to inform the community about WIT. In
            particular, this includes information about our events, our mission
            and much more!
          </Text>

          <HStack pt={3}>
            <Wrap>
              <Button
                leftIcon={<FaLink />}
                backgroundColor={useColorModeValue("gray.100", "gray.700")}
                color={useColorModeValue("blue.600", "blue.300")}
                variant="solid"
              >
                <Link
                  href="https://unswwit.com/#/"
                  isExternal
                  fontSize={{ base: "xs", md: "sm", lg: "md" }}
                >
                  Website
                </Link>
              </Button>
              <Button
                leftIcon={<FaGithub />}
                backgroundColor={useColorModeValue("gray.100", "gray.700")}
                color={useColorModeValue("blue.600", "blue.300")}
                variant="solid"
                fontSize={{ base: "xs", md: "sm", lg: "md" }}
              >
                <Link
                  href="https://github.com/unswwit/website/commits?author=joanna209"
                  isExternal
                >
                  Github
                </Link>
              </Button>
            </Wrap>
          </HStack>
        </VStack>
      </VStack>
      {/*End of WIT Website Card*/}
    </HStack>
  );
}
