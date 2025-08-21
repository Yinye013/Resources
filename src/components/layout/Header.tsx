// src/components/layout/Header/Header.tsx
import {
  Box,
  Flex,
  Text,
  Image,
  Switch,
  useBreakpointValue,
  Hide,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  Divider,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useFilter } from "@/context";
import { FilterSection } from "./FilterSection";
import {
  PRINCIPLES,
  DOCUMENT_TYPES,
  CATEGORIES,
} from "@/constants/filterConstants";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    filterState,
    clearAllFilters,
    hasActiveFilters,
    getActiveFilterCount,
    filteredResources,
    togglePrinciple,
    toggleDocumentType,
    toggleCategory,
  } = useFilter();

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

            <Hide below="lg">
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
              <Switch size="lg" fill={"#314EF9"} />
              <Hide below="lg">
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
              <Hide below="lg">
                <Text fontSize={"1.4rem"} fontWeight={"600"}>
                  Jonathan
                </Text>
              </Hide>
            </Flex>

            {/* Mobile/Tablet Hamburger Menu */}
            <Hide above="lg">
              <IconButton
                aria-label="Open menu"
                icon={<HamburgerIcon />}
                onClick={onOpen}
                variant="ghost"
                size="lg"
                color="gray.600"
                _hover={{ bg: "gray.100" }}
              />
            </Hide>
          </Flex>
        </Flex>
      </Box>

      {/* Mobile/Tablet Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerHeader pb={4}>
            <VStack spacing={4} align="stretch">
              <Text fontSize="xl" fontWeight="bold" color="gray.800">
                Menu
              </Text>

              {/* User Info in Drawer */}
              <HStack spacing={3}>
                <Box
                  width="2.5rem"
                  height="2.5rem"
                  borderRadius="full"
                  backgroundColor="#17E4A1"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontWeight={700}
                  fontSize="sm"
                >
                  JA
                </Box>
                <VStack align="start" spacing={0}>
                  <Text fontSize="md" fontWeight="600">
                    Jonathan
                  </Text>
                  <HStack spacing={2}>
                    <Switch size="sm" />
                    <Text fontSize="sm" color="gray.600">
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
                <Text fontSize="lg" fontWeight="semibold" color="gray.800">
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
                  >
                    Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    justifyContent="flex-start"
                    fontSize="md"
                    h="auto"
                    py={3}
                    bg="blue.50"
                    color="blue.600"
                    _hover={{ bg: "blue.100" }}
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
                  >
                    Toolkit
                  </Button>
                </VStack>
              </VStack>

              <Divider />

              {/* Mobile Filters */}
              <VStack spacing={6} align="stretch">
                <Flex justify="space-between" align="center">
                  <Text fontSize="lg" fontWeight="semibold" color="gray.800">
                    Filters
                  </Text>
                  {hasActiveFilters() && (
                    <Button
                      size="sm"
                      variant="ghost"
                      colorScheme="blue"
                      onClick={clearAllFilters}
                      fontSize="xs"
                    >
                      Clear all ({getActiveFilterCount()})
                    </Button>
                  )}
                </Flex>

                {/* Key Foundational Principles */}
                <FilterSection
                  title="Key Foundational Principles"
                  options={PRINCIPLES}
                  selectedOptions={filterState.principles}
                  onToggle={togglePrinciple}
                />

                <Divider />

                {/* Document Type */}
                <FilterSection
                  title="Document type"
                  options={DOCUMENT_TYPES}
                  selectedOptions={filterState.documentTypes}
                  onToggle={toggleDocumentType}
                />

                <Divider />

                {/* Categories */}
                <FilterSection
                  title="Categories"
                  options={CATEGORIES}
                  selectedOptions={filterState.categories}
                  onToggle={toggleCategory}
                />

                {/* Results Count */}
                <Box pt={4} pb={8}>
                  <Text fontSize="sm" color="gray.500" textAlign="center">
                    {filteredResources.length} result
                    {filteredResources.length !== 1 ? "s" : ""}
                  </Text>
                </Box>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
