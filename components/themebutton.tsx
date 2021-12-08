import React from "react";
import {
  Button,
  useColorModeValue,
  useColorMode,
  Tooltip,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    //   const [play] = useSound("/lightswitch.mp3", {
    //     volume: 0.05,
    //     sprite: {
    //       on: [0, 300],
    //       off: [500, 300],
    //     },
    //   });

    //   const handleClick = () => {
    //     toggleColorMode();
    //     colorMode === "dark" ? play({ id: "on" }) : play({ id: "off" });
    //   };

    <Tooltip label="Dark Mode" aria-label="Dark mode tooltip">
      <Button
        onClick={toggleColorMode}
        bg={useColorModeValue("gray.100", "gray.900")}
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Tooltip>
  );
}
