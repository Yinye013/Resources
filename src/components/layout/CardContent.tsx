import React from "react";
import {
  SimpleGrid,
  Box,
  Text,
  VStack,
  Icon,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useFilter } from "@/context";
import Card from "../ui/Card";

interface ResourceGridProps {
  isLoading?: boolean;
}

const CardContent: React.FC<ResourceGridProps> = ({ isLoading = false }) => {
  const { filteredResources, filterState, hasActiveFilters } = useFilter();

  // Loading state
  if (isLoading) {
    return (
      <Flex justify="center" align="center" h="400px">
        <VStack spacing={4}>
          <Spinner size="xl" color="blue.500" thickness="4px" />
          <Text color="gray.600">Loading resources...</Text>
        </VStack>
      </Flex>
    );
  }

  // Empty state - no resources match filters
  if (filteredResources.length === 0 && hasActiveFilters()) {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        py={16}
        px={8}
        bg="gray.50"
        borderRadius="xl"
        border="2px dashed"
        borderColor="gray.200"
      >
        <VStack spacing={4}>
          <Icon as={SearchIcon} boxSize={12} color="gray.400" />
          <VStack spacing={2}>
            <Text fontSize="2rem" fontWeight="semibold" color="gray.700">
              No resources found
            </Text>
            <Text
              color="gray.500"
              maxW="md"
              fontSize={"1.4rem"}
              textAlign={"center"}
            >
              Try adjusting your filters or search terms to find what you're
              looking for.
            </Text>
          </VStack>
        </VStack>
      </Box>
    );
  }

  // Empty state - no resources at all
  if (filteredResources.length === 0) {
    return (
      <Box
        textAlign="center"
        py={16}
        px={8}
        bg="gray.50"
        borderRadius="xl"
        border="2px dashed"
        borderColor="gray.200"
      >
        <VStack spacing={4}>
          <Text fontSize="xl" fontWeight="semibold" color="gray.700">
            No resources available
          </Text>
          <Text color="gray.500">
            Resources will appear here when they're added.
          </Text>
        </VStack>
      </Box>
    );
  }

  // Results grid
  return (
    <Box>
      {/* Results header */}
      <Flex justify="space-between" align="center" mt={8} mb={5}>
        <Text color="gray.600" fontSize="1.4rem">
          Showing {filteredResources.length} of {filteredResources.length}{" "}
          resources
          {filterState.searchQuery && (
            <Text as="span" fontWeight="medium">
              {" "}
              for "{filterState.searchQuery}"
            </Text>
          )}
        </Text>
      </Flex>

      {/* Resource grid */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} w="100%">
        {filteredResources.map((resource) => (
          <Card key={resource.id} resource={resource} />
        ))}
      </SimpleGrid>

      {/* Load more placeholder for future pagination */}
      {filteredResources.length > 0 && (
        <Flex justify="center" mt={12}>
          <Text fontSize="1.4rem" color="gray.500">
            Showing all {filteredResources.length} results
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default CardContent;
