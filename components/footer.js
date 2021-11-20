import {
  Box,
  Container,
  Text,
  Stack,
  useColorModeValue,
  IconButton,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"4xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2021 Joanna He. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <Tooltip label="LinkedIn" aria-label="LinkedIn tooltip">
            <Link href="https://www.linkedin.com/in/joannahe9/" isExternal>
              <IconButton
                bg={useColorModeValue("gray.100", "gray.900")}
                aria-label="LinkedIn"
                icon={<FaLinkedinIn />}
              />
            </Link>
          </Tooltip>
          <Tooltip label="Github" aria-label="Github tooltip">
            <Link href="https://github.com/joanna209" isExternal>
              <IconButton
                bg={useColorModeValue("gray.100", "gray.900")}
                aria-label="Github"
                icon={<FaGithub />}
              />
            </Link>
          </Tooltip>
          <Tooltip label="Email" aria-label="Email tooltip">
            <Link href="mailto:joanna.he3@gmail.com" isExternal>
              <IconButton
                bg={useColorModeValue("gray.100", "gray.900")}
                aria-label="Email"
                icon={<FaEnvelope />}
              />
            </Link>
          </Tooltip>
        </Stack>
      </Container>
    </Box>
  );
}
