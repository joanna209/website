import {
  Box,
  Flex,
  Stack,
  IconButton,
  Avatar,
  Link,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import ThemeToggle from "./themebutton";

export default function Navbar() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Container as={Stack} maxW={"4xl"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link href="/">
              <IconButton
                aria-label="home"
                bg={useColorModeValue("gray.100", "gray.900")}
              >
                <Avatar size={"sm"} src={"https://i.imgur.com/gqC0mnt.jpg"} />
              </IconButton>
            </Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <ThemeToggle/>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
