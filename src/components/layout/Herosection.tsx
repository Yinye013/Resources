import React from "react";
import { Box, Text, Input, useBreakpointValue } from "@chakra-ui/react";

const Herosection = () => {
  const headerFontSize = useBreakpointValue({ base: "4rem", md: "5.2rem" });

  const descriptionFontSize = useBreakpointValue({
    base: "1.4rem",
    md: "1.6rem",
  });

  const containerWidth = useBreakpointValue({ base: "37.5rem", md: "85.3rem" });

  const containerHeight = useBreakpointValue({ base: "30rem", md: "50rem" });

  return (
    <Box
      backgroundColor="gray.100"
      height={containerHeight}
      display="flex"
      flexDirection="column"
      gap={"2.3rem"}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={"2.3rem"}
        maxWidth={containerWidth}
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={headerFontSize} fontWeight="700" fontFamily={"Poppins"}>
          Resources
        </Text>
        <Text fontSize={descriptionFontSize} textAlign={"center"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
          aliquam repellat similique repellendus delectus beatae unde vel
          eveniet nesciunt voluptates obcaecati vitae nostrum! Nemo unde
          voluptatum impedit nulla quia quos.
        </Text>

        <Input padding={"2rem"} placeholder="Search by title or keyword" />
      </Box>
    </Box>
  );
};

export default Herosection;
