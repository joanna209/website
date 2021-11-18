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
              <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                UNSW WIT Website
              </Text>
              <Tag size="sm">March 2021 - Present</Tag>
              <Tag size="sm" bg={useColorModeValue("blue.200", "blue.700")}>
                Full Stack Developer
              </Tag>
              <Tag size="sm" bg={useColorModeValue("green.200", "green.700")}>
                React, Node, PostgreSQL, Express, Heroku
              </Tag>
            </HStack>
  
            <Text
              fontSize="sm"
              color={useColorModeValue("neutral.1000", "neutralD.1000")}
            >
              An all in one platform that aims to connect UNSW students with an
              appropriate service to aid in their overall mental health and
              wellbeing.
            </Text>
  
            <HStack pt={3}>
              <Button leftIcon={<FaLink />} colorScheme="teal" variant="solid">
                <Link href="https://unswwit.com/#/" isExternal>
                  Website
                </Link>
              </Button>
              <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
                <Link
                  href="https://github.com/unswwit/website"
                  isExternal
                >
                  Github
                </Link>
              </Button>
            </HStack>
          </VStack>
        </VStack>
        {/*End of WIT Website Card*/}
      </HStack>
    );
  }
  