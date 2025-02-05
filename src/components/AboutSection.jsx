import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import about from '../assets/about/about.svg'
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <Box color="black" overflow={'hidden'} py={16}  px={{ base: 4, md: 8, lg: 24 }}  bg="#FFFFFF">
      <Flex direction={{ base: "column", md: "row" }} align="center" maxW="6xl" mx="auto">
        
        <Box flex="1">
          <Image src={about} alt="Stock Market Course" borderRadius="lg" />
        </Box>

        
        <Box flex="1" ml={{ md: 12 }} textAlign={{ base: "center", md: "left" }}>
          <Heading size="2xl" mb={6}>Become a Pro Stock Trader</Heading>
          <Text fontSize="xl" mb={4}>
            Established in 2020, our mission is to empower individuals with the knowledge and skills to excel in the stock market. 
          </Text>
          <Text fontSize="xl" mb={4}>
            Our comprehensive courses cover Equity, Commodity, and Currency trading, helping you build a strong foundation in Technical Analysis, Fundamental Analysis, and Option Chain Strategies.
          </Text>
          <Text fontSize="xl" mb={8}>
            Whether you're a beginner or an experienced trader, our expert-led online and offline training will help you maximize profits and minimize risks.
          </Text>
          <Link to={'/courses'}>
            <Button bg="#00b386" color="white" _hover={{ bg: "black", color: "#00b386" }} size="lg">
              Enroll Now
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutSection;
