import {
  Box,
  Flex,
  Stack,
  IconButton,
  Button,
  Avatar,
  Link,
  Center,
  useColorModeValue,
  toggleColorMode,
  colorMode,
  Tooltip,
  useColorMode,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Container as={Stack} maxW={"4xl"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link href="/">
              <IconButton aria-label='dark mode button' bg={useColorModeValue("gray.100", "gray.900")}>
                <Avatar size={"sm"} src={"https://i.imgur.com/gqC0mnt.jpg"} />
              </IconButton>
            </Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Tooltip label="Dark Mode" aria-label="Dark mode tooltip">
                <Button
                  onClick={toggleColorMode}
                  bg={useColorModeValue("gray.100", "gray.900")}
                >
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Tooltip>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
