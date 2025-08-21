import {
  Box,
  VStack,
  Heading,
  Button,
  Text,
  Divider,
  Hide,
  Image,
} from "@chakra-ui/react";
import { useFilter } from "@/context";
import { FilterSection } from "./FilterSection";
import {
  PRINCIPLES,
  DOCUMENT_TYPES,
  CATEGORIES,
} from "@/constants/filterConstants";

export const FilterSidebar = () => {
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

  return (
    <Box
      bg="white"
      p={6}
      top="24px"
      backgroundColor={{ base: "gray.100", md: "white" }}
    >
      <VStack spacing={6} align="stretch">
        {/* Header */}
        <Box textAlign={{ base: "center", md: "left" }} mb={4}>
          <Hide above="md">
            <Box>
              <Heading
                size="md"
                fontSize={"1.6rem"}
                fontWeight={"700"}
                color="gray.800"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image src="/assets/images/filter.svg" alt="Show Filters" />
                <Text as="span" ml={2}>
                  Show Filters
                </Text>
              </Heading>
            </Box>
          </Hide>

          <Hide below="md">
            <Box textAlign={{ base: "center", md: "left" }} mb={4}>
              <Heading
                size="md"
                fontSize={"1.6rem"}
                fontWeight={"700"}
                color="gray.800"
                mb={"2rem"}
              >
                Filters
              </Heading>
            </Box>
          </Hide>

          <Hide below="md">
            <Divider />
            {hasActiveFilters() && (
              <Button
                size="sm"
                variant="ghost"
                colorScheme="blue"
                onClick={clearAllFilters}
                p={0}
                h="auto"
                fontWeight="normal"
                _hover={{ textDecoration: "underline" }}
              >
                Clear all ({getActiveFilterCount()})
              </Button>
            )}
          </Hide>
        </Box>

        {/* Key Foundational Principles */}
        <Hide below="md">
          <FilterSection
            title="Key Foundational Principles"
            options={PRINCIPLES}
            selectedOptions={filterState.principles}
            onToggle={togglePrinciple}
          />

          {/* Document Type */}
          <FilterSection
            title="Document type"
            options={DOCUMENT_TYPES}
            selectedOptions={filterState.documentTypes}
            onToggle={toggleDocumentType}
          />

          {/* Categories */}
          <FilterSection
            title="Categories"
            options={CATEGORIES}
            selectedOptions={filterState.categories}
            onToggle={toggleCategory}
          />

          {/* Results Count */}
          <Box pt={4}>
            <Text fontSize="sm" color="gray.500" textAlign="center">
              {filteredResources.length} result
              {filteredResources.length !== 1 ? "s" : ""}
            </Text>
          </Box>
        </Hide>
      </VStack>
    </Box>
  );
};
