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
            <Text fontWeight="bold" fontSize="md" noOfLines={2}>
              Tribespot
            </Text>
            <Tag size="sm">June 2021 - July 2021</Tag>
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
            Tribespot is a platform built by ex and current executives from the
            biggest student societies in Australia to automate recruitment.
          </Text>

          <HStack pt={3}>
            <Button leftIcon={<FaLink />} colorScheme="teal" variant="solid">
              <Link href="https://tribespot.co/" isExternal>
                Website
              </Link>
            </Button>
            <Button leftIcon={<FaFigma />} colorScheme="teal" variant="solid">
              <Link
                href="https://www.figma.com/proto/S5wzsWY28hpPvpa7L1WqQo/ConnectMe?node-id=2%3A11&scaling=scale-down&page-id=0%3A1"
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
