import {
  Button,
  Link,
  LinkBox,
  HStack,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";

export default function PersonalWebsiteCard() {
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
      {/*Start of Personal Website Card*/}
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
            <Text fontWeight="bold" fontSize={"xl"} noOfLines={2}>
              Portfolio Website
            </Text>
          </HStack>

          <HStack pb={3}>
            <Tag
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              bg={useColorModeValue("gray.200", "gray.700")}
            >
              Typescript
            </Tag>
            <Tag
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              bg={useColorModeValue("gray.200", "gray.700")}
            >
              Next.js
            </Tag>
            <Tag
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              bg={useColorModeValue("gray.200", "gray.700")}
            >
              ChakraUI
            </Tag>
          </HStack>

          <Text
            fontSize={{ base: "xs", md: "sm", lg: "md" }}
            color={useColorModeValue("neutral.1000", "neutralD.1000")}
          >
            My personal website to introduce myself, showcase my technical and
            UX/UI projects as well as upcoming blog posts.
          </Text>

          <HStack pt={3}>
            <Button
              leftIcon={<FaGithub />}
              backgroundColor={useColorModeValue("gray.100", "gray.700")}
              color={useColorModeValue("blue.600", "blue.300")}
              variant="solid"
            >
              <Link
                href="https://github.com/joanna209/website"
                isExternal
                fontSize={{ base: "xs", md: "sm", lg: "md" }}
              >
                Github
              </Link>
            </Button>
          </HStack>
        </VStack>
      </VStack>
      {/*End of Personal Website Card*/}
    </HStack>
  );
}
