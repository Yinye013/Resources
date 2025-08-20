import {
  Box,
  Flex,
  Text,
  Image,
  Switch,
  useBreakpointValue,
  Hide,
} from "@chakra-ui/react";

const Header = () => {
  const headerHeight = useBreakpointValue({ base: "7.4rem", md: "7.66rem" });
  const paddingX = useBreakpointValue({
    base: "2rem",
    md: "7rem",
    lg: "7rem",
  });

  return (
    <Box
      as="header"
      width="100%"
      height={headerHeight}
      boxShadow="md"
      bg="white"
      fontFamily={"Poppins"}
    >
      <Flex
        height="100%"
        alignItems="center"
        justifyContent="space-between"
        paddingX={paddingX}
        maxWidth="1400px"
        margin="0 auto"
      >
        <Flex gap={{ base: "1rem", md: "4.65rem" }} alignItems="center">
          <Box>
            <Image src="/assets/images/logo.svg" alt="Logo" />
          </Box>

          <Hide below="md">
            <Flex gap="2rem" alignItems="center">
              <Text fontSize={"1.4rem"} fontWeight={"600"}>
                Dashboard
              </Text>
              <Text fontSize={"1.4rem"} fontWeight={"600"}>
                Resources
              </Text>
              <Text fontSize={"1.4rem"} fontWeight={"600"}>
                Toolkit
              </Text>
            </Flex>
          </Hide>
        </Flex>

        <Flex gap="2rem" alignItems="center">
          <Flex alignItems="center" gap={"1.4rem"}>
            {/* checkbox here */}
            <Switch size="lg" fill={"#314EF9"} />
            <Hide below="md">
              <Text fontSize={"1.4rem"} fontWeight={"600"}>
                Switch to Employee
              </Text>
            </Hide>
          </Flex>

          <Flex alignItems="center" gap={"1.4rem"}>
            <Box
              width="3.3rem"
              height="3.3rem"
              borderRadius="full"
              backgroundColor="#17E4A1"
              marginRight="0.5rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontWeight={700}
            >
              JA
            </Box>
            <Hide below="md">
              <Text fontSize={"1.4rem"} fontWeight={"600"}>
                Jonathan
              </Text>
            </Hide>
          </Flex>

          <Hide above="md">
            <Image src="/assets/images/hamburger.svg" alt="Menu" />
          </Hide>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
