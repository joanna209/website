import React from "react";
import {
  Button,
  useColorModeValue,
  useColorMode,
  Tooltip,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import useSound from "use-sound";

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  const [play] = useSound("/lightswitch.mp3", {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300],
    },
  });

  const handleClick = () => {
    toggleColorMode();
    colorMode === "dark" ? play({ id: "on" }) : play({ id: "off" });
  };

  return (
    <Tooltip label="Dark Mode" aria-label="Dark mode tooltip">
      <Button
        onClick={handleClick}
        bg={useColorModeValue("gray.100", "gray.900")}
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Tooltip>
  );
}
