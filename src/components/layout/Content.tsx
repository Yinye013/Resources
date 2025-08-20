import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import FilterSidebar from "./FIlterSidebar";
import CardContent from "./CardContent";

const Content = () => {
  return (
    <Box
      maxWidth={"1400px"}
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="0 auto"
      padding="2rem"
    >
      <Box
        maxWidth={"1161px"}
        display="grid"
        gridTemplateColumns="0.5fr 1fr"
        gap="1rem"
        marginTop={"5rem"}
      >
        <FilterSidebar />

        <CardContent />
        <Box />
      </Box>
    </Box>
  );
};

export default Content;
