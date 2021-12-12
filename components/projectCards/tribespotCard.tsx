import {
  Button,
  Link,
  Box,
  LinkBox,
  HStack,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaFigma, FaLink } from "react-icons/fa";

export default function TribespotCard() {
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
      {/*Start of Tribespot Card*/}
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
            <Text
              fontWeight="bold"
              fontSize={"xl"}
              noOfLines={1}
            >
              Tribespot
            </Text>
          </HStack>

          <HStack pb={3}>
            <Tag
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              bg={useColorModeValue("gray.200", "gray.700")}
            >
              Figma
            </Tag>
          </HStack>

          <Text
            fontSize={{ base: "xs", md: "sm", lg: "md" }}
            color={useColorModeValue("neutral.1000", "neutralD.1000")}
          >
            Tribespot is a platform built by ex and current executives from the
            biggest student societies in Australia to automate recruitment.
          </Text>

          <HStack pt={3}>
            <Button leftIcon={<FaLink />} colorScheme="blue" variant="solid">
              <Link
                href="https://tribespot.co/"
                isExternal
                fontSize={{ base: "xs", md: "sm", lg: "md" }}
              >
                Website
              </Link>
            </Button>
            <Button
              leftIcon={<FaFigma />}
              colorScheme="blue"
              variant="solid"
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
            >
              <Link
                href="https://www.figma.com/proto/Ci8h9JaNMyWcUV7ZnHguWW/Prototype-(final)?embed_host=notion&kind=&node-id=156%3A2385&page-id=156%3A2017&scaling=scale-down&show-proto-sidebar=1&starting-point-node-id=156%3A2385"
                isExternal
              >
                Prototype
              </Link>
            </Button>
          </HStack>
        </VStack>
      </VStack>
      {/*End of Tribespot Card*/}
    </HStack>
  );
}
