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

export default function ConnectMeCard() {
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
      {/*Start of ConnectMe Card*/}
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
              ConnectMe
            </Text>
            <Tag fontSize={{ base: "xs", md: "sm", lg: "md" }}>
              August 2020 - Present
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
              Photoshop
            </Tag>
          </HStack>

          <Text
            fontSize={{ base: "xs", md: "sm", lg: "md" }}
            color={useColorModeValue("neutral.1000", "neutralD.1000")}
          >
            An all in one platform that aims to connect UNSW students with an
            appropriate service to aid in their overall mental health and
            wellbeing.
          </Text>
          <HStack pt={3}>
            <Button leftIcon={<FaFigma />} colorScheme="blue" variant="solid">
              <Link
                href="https://www.figma.com/proto/S5wzsWY28hpPvpa7L1WqQo/ConnectMe?node-id=2%3A11&scaling=scale-down&page-id=0%3A1"
                isExternal
                fontSize={{ base: "xs", md: "sm", lg: "md" }}
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
