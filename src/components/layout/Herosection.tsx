import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";

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

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            height="100%"
            paddingLeft="1rem"
          >
            <Image src="/assets/images/search.svg" alt="Search" />
          </InputLeftElement>
          <Input
            outline="none"
            focusBorderColor="#314EF9"
            padding="2rem"
            paddingLeft="4rem"
            placeholder="Search by title or keyword"
            fontSize="1.6rem"
            height="5rem"
            borderRadius="0.8rem"
            _hover={{ borderColor: "#314EF9" }}
          />
        </InputGroup>
      </Box>
    </Box>
  );
};

export default Herosection;
