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

export default function HeroXCard() {
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
      {/*ConnectMe Card*/}
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
            <Text fontWeight="bold" fontSize="md" noOfLines={2}>
              HeroX
            </Text>
            <Tag size="sm">March 2021 - April 2021</Tag>
            <Tag size="sm" bg={useColorModeValue("blue.200", "blue.700")}>
              UX/UI Designer
            </Tag>
            <Tag size="sm" bg={useColorModeValue("green.200", "green.700")}>
              Figma
            </Tag>
          </HStack>

          <Text
            fontSize="sm"
            color={useColorModeValue("neutral.1000", "neutralD.1000")}
          >
            A mobile app that aims to provide financial literacy education to
            Gen-Z individuals in order to improve financial wellbeing.
          </Text>
          <HStack pt={3}>
            <Button leftIcon={<FaFigma />} colorScheme="teal" variant="solid">
              <Link
                href="https://www.figma.com/proto/7b3JlZ92EYiGSkeuXJkMix/Wireframe---Sandbox-Challenge?node-id=66%3A4&scaling=scale-down&page-id=66%3A4"
                isExternal
              >
                Prototype
              </Link>
            </Button>
          </HStack>
        </VStack>
      </VStack>
      {/*End of ConnectMe Card*/}
    </HStack>
  );
}
