import {
  Box,
  Flex,
  Text,
  Image,
  Switch,
  useBreakpointValue,
  Hide,
  Divider,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const headerHeight = useBreakpointValue({ base: "7.4rem", md: "7.66rem" });
  const paddingX = useBreakpointValue({
    base: "2rem",
    md: "7rem",
    lg: "7rem",
  });

  return (
    <>
      <Box
        as="header"
        width="100%"
        height={headerHeight}
        boxShadow="md"
        bg="white"
        fontFamily={"Poppins"}
        position="relative"
        overflow="visible"
      >
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="space-between"
          paddingX={paddingX}
          maxWidth="1400px"
          margin="0 auto"
        >
          <Flex
            gap={{ base: "1rem", md: "4.65rem" }}
            height={headerHeight}
            alignItems="center"
          >
            <Box>
              <Image src="/assets/images/logo.svg" alt="Logo" />
            </Box>
            {/* nav links */}
            <Hide below="lg">
              <Flex gap="2rem" alignItems="center" height="100%">
                <Box
                  as="a"
                  href="#"
                  fontSize="1.4rem"
                  fontWeight="600"
                  padding="0 8px"
                  height="100%"
                  display="flex"
                  alignItems="center"
                  color="black"
                  position="relative"
                  transition="color 0.3s ease"
                  _hover={{
                    color: "#314EF9",
                    _after: {
                      width: "100%",
                    },
                  }}
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-2px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0%",
                    height: "4px",
                    backgroundColor: "#314EF9",
                    transition: "width 0.3s ease",
                  }}
                >
                  Dashboard
                </Box>
                {/* resource box */}
                <Box
                  as="a"
                  href="#"
                  fontSize="1.4rem"
                  fontWeight="600"
                  padding="0 8px"
                  height="100%"
                  display="flex"
                  alignItems="center"
                  color="#314EF9"
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-2px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100%",
                    height: "4px",
                    backgroundColor: "#314EF9",
                    transition: "width 0.3s ease",
                  }}
                >
                  Resources
                </Box>
                <Box
                  as="a"
                  href="#"
                  fontSize="1.4rem"
                  fontWeight="600"
                  padding="0 8px"
                  height="100%"
                  display="flex"
                  alignItems="center"
                  color="black"
                  position="relative"
                  transition="color 0.3s ease"
                  _hover={{
                    color: "#314EF9",
                    _after: {
                      width: "100%",
                    },
                  }}
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-2px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0%",
                    height: "4px",
                    backgroundColor: "#314EF9",
                    transition: "width 0.3s ease",
                  }}
                >
                  Toolkit
                </Box>
              </Flex>
            </Hide>
          </Flex>

          <Flex gap="2rem" alignItems="center">
            <Flex alignItems="center" gap={"1.4rem"}>
              {/* switch */}
              <Switch
                size="lg"
                colorScheme="blue"
                sx={{
                  "& .chakra-switch__track[data-checked]": {
                    backgroundColor: "#314EF9 !important",
                  },
                  "& .chakra-switch__thumb": {
                    backgroundColor: "white",
                  },
                }}
              />
              <Hide below="lg">
                <Text fontSize={"1.4rem"} fontWeight={"600"}>
                  Switch to Employee
                </Text>
              </Hide>
            </Flex>

            <Divider
              orientation="vertical"
              height="2.5rem"
              borderColor="gray.300"
            />

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
                color="#000"
              >
                JA
              </Box>
              <Hide below="lg">
                <Box display={"flex"} alignItems={"flex-start"} gap={"0.5rem"}>
                  <Text fontSize={"1.4rem"} fontWeight={"600"}>
                    Jonathan
                  </Text>
                  <Text
                    fontSize={"1.4rem"}
                    fontWeight={"600"}
                    color={"gray.500"}
                    marginTop={"-0.3rem"}
                  >
                    &#8964;
                  </Text>
                </Box>
              </Hide>
            </Flex>

            <Hide above="lg">
              <Box
                as="button"
                onClick={onOpen}
                p={2}
                borderRadius="md"
                _hover={{ bg: "gray.100" }}
                aria-label="Open menu"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src="/assets/images/hamburger.svg"
                  alt="Menu"
                  width="24px"
                  height="24px"
                />
              </Box>
            </Hide>
          </Flex>
        </Flex>
      </Box>

      {/* Mobile/Tablet Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="2xl" marginTop={3} />

          <DrawerHeader pb={4}>
            <VStack spacing={4} align="stretch">
              <Text fontSize="xl" fontWeight="bold" color="gray.800">
                Menu
              </Text>

              {/* user info in drawer */}
              <HStack spacing={3}>
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
                  color="#000"
                >
                  JA
                </Box>
                <VStack align="start" spacing={0}>
                  <Text fontSize="1.4rem" fontWeight="600">
                    Jonathan
                  </Text>
                  <HStack spacing={2}>
                    <Switch
                      size="md"
                      colorScheme="blue"
                      sx={{
                        "& .chakra-switch__track[data-checked]": {
                          backgroundColor: "#314EF9 !important",
                        },
                        "& .chakra-switch__thumb": {
                          backgroundColor: "white",
                        },
                      }}
                    />
                    <Text fontSize="1rem" color="gray.600">
                      Employee View
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
          </DrawerHeader>

          <DrawerBody px={6}>
            <VStack spacing={6} align="stretch">
              {/* Navigation Menu */}
              <VStack spacing={4} align="stretch">
                <Text fontSize="1.4rem" fontWeight="semibold" color="gray.800">
                  Navigation
                </Text>
                <VStack spacing={3} align="stretch">
                  <Button
                    variant="ghost"
                    justifyContent="flex-start"
                    fontSize="md"
                    h="auto"
                    py={3}
                    _hover={{ bg: "gray.50" }}
                    onClick={onClose}
                  >
                    Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    justifyContent="flex-start"
                    fontSize="md"
                    h="auto"
                    py={3}
                    color="b#314EF9"
                    borderLeft="3px solid"
                    borderLeftColor="#314EF9"
                    bg="blue.50"
                    _hover={{ bg: "blue.300" }}
                    onClick={onClose}
                  >
                    Resources
                  </Button>
                  <Button
                    variant="ghost"
                    justifyContent="flex-start"
                    fontSize="md"
                    h="auto"
                    py={3}
                    _hover={{ bg: "gray.50" }}
                    onClick={onClose}
                  >
                    Toolkit
                  </Button>
                </VStack>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
