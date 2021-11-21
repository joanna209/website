import {
  LinkBox,
  Button,
  Link,
  HStack,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaFigma } from "react-icons/fa";

export default function HeroZCard() {
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
      {/*Start of HeroZ Card*/}
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
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              noOfLines={2}
            >
              HeroZ
            </Text>
            <Tag fontSize={{ base: "xs", md: "sm", lg: "md" }}>
              March 2021 - April 2021
            </Tag>
            <Tag
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              bg={useColorModeValue("yellow.200", "yellow.700")}
            >
              UX/UI Designer
            </Tag>
            <Tag
              fontSize={{ base: "xs", md: "sm", lg: "md" }}
              bg={useColorModeValue("green.200", "green.700")}
            >
              Figma
            </Tag>
          </HStack>

          <Text
            fontSize={{ base: "xs", md: "sm", lg: "md" }}
            color={useColorModeValue("neutral.1000", "neutralD.1000")}
          >
            A mobile app that aims to provide financial literacy education to
            Gen-Z individuals in order to improve financial wellbeing.
          </Text>
          <HStack pt={3}>
            <Button leftIcon={<FaFigma />} colorScheme="blue" variant="solid">
              <Link
                href="https://www.figma.com/proto/7b3JlZ92EYiGSkeuXJkMix/Wireframe---Sandbox-Challenge?node-id=66%3A4&scaling=scale-down&page-id=66%3A4"
                isExternal
                fontSize={{ base: "xs", md: "sm", lg: "md" }}
              >
                Prototype
              </Link>
            </Button>
          </HStack>
        </VStack>
      </VStack>
      {/*End of HeroZ Card*/}
    </HStack>
  );
}
