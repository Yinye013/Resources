import React from "react";
import { Box, VStack, Heading, Text, Tag, Flex, Image } from "@chakra-ui/react";
import type { Resource, DocumentType } from "@/types/types";

interface CardProps {
  resource: Resource;
}

// Icon mapping for document types - using vector images
const getDocumentIconPath = (docType: DocumentType): string => {
  const iconMap: Record<string, string> = {
    Link: "/assets/images/link.svg",
    PDF: "/assets/images/pdf.svg",
    Video: "/assets/images/video.svg",
    DOC: "/assets/images/pdf.svg",
  };
  return iconMap[docType] || iconMap.PDF;
};

// Background image style mapping with positioning information
interface BackgroundStyle {
  src: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  width: string;
  height: string;
  opacity: number;
}

// Get background image style based on card color
const getBackgroundStyle = (color?: string): BackgroundStyle => {
  const styleMap: Record<string, BackgroundStyle> = {
    red: {
      src: "/assets/images/red.svg",
      position: { top: "-50px", right: "-20px" },
      width: "150px",
      height: "150px",
      opacity: 1,
    },
    blue: {
      src: "/assets/images/blue.svg",
      position: { top: "-50px", right: "-30px" },
      width: "170px",
      height: "170px",
      opacity: 1,
    },
    green: {
      src: "/assets/images/green.svg",
      position: { top: "-50px", left: "0px" },
      width: "160px",
      height: "160px",
      opacity: 1,
    },
    yellow: {
      src: "/assets/images/yellow.svg",
      position: { top: "-50px", left: "0px" },
      width: "140px",
      height: "140px",
      opacity: 1,
    },
    orange: {
      src: "/assets/images/orange.svg",
      position: { top: "-50px", left: "0px" },
      width: "180px",
      height: "180px",
      opacity: 1,
    },
  };

  return color && styleMap[color] ? styleMap[color] : styleMap.blue;
};

const Card: React.FC<CardProps> = ({ resource }) => {
  const documentIconPath = getDocumentIconPath(resource.documentType);
  const bgStyle = getBackgroundStyle(resource.color);

  return (
    <Box
      borderRadius="xl"
      p={6}
      position="relative"
      overflow="hidden"
      cursor="pointer"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      }}
      h="240px"
      maxWidth={"400px"}
      display="flex"
      flexDirection="column"
      justifyContent={"flex-end"}
      border={"1px solid #F2F2F2"}
    >
      {/* Vector background image with dynamic positioning */}
      <Image
        src={bgStyle.src}
        alt=""
        position="absolute"
        top={bgStyle.position.top}
        right={bgStyle.position.right}
        bottom={bgStyle.position.bottom}
        left={bgStyle.position.left}
        width={bgStyle.width}
        height={bgStyle.height}
        objectFit="contain"
        zIndex={0}
        opacity={bgStyle.opacity}
      />

      {/* Document Type Icon using vector image */}
      <Flex justifyContent="flex-start" mb={10} position="relative" zIndex={2}>
        <Box position="relative">
          <Image
            src={documentIconPath}
            alt={`${resource.documentType} icon`}
            width="27px"
            height="23px"
          />
        </Box>
      </Flex>

      {/* Card Content */}
      <VStack
        align="stretch"
        spacing={4}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Heading
          size="md"
          color={"#2C3237"}
          fontWeight="bold"
          fontSize={"1.8rem"}
          lineHeight="1.3"
          noOfLines={3}
          fontFamily={"Poppins"}
        >
          {resource.title}
        </Heading>

        <Text
          fontSize="1.4rem"
          color={"#828282"}
          fontWeight="medium"
          opacity={0.9}
        >
          {resource.topic}
        </Text>

        {/* Category Tags */}
        <Flex wrap="wrap" gap={2}>
          {resource.categories.map((category, index) => (
            <Tag
              key={index}
              size="sm"
              color={"#2C3237"}
              fontSize={"1.2rem"}
              fontWeight="medium"
              backdropFilter="blur(10px)"
              borderRadius="10px"
              padding={"4px 8px"}
              border="1px solid"
              borderColor="rgba(255, 255, 255, 0.2)"
            >
              {category}
            </Tag>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default Card;
