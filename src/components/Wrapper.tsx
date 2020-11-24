import React from "react";
import { Box } from "@chakra-ui/react";

interface WrapperProps {
  size?: "small" | "regular";
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  size = "regular",
}) => {
  return (
    <Box
      mt={5}
      mx="auto"
      maxW={size === "regular" ? "600px" : "300px"}
      w="100%"
    >
      {children}
    </Box>
  );
};
