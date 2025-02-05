import { Box, Container, Flex, Heading, Image, Text, VStack, List, ListItem } from "@chakra-ui/react";
import pic1 from '../assets/about/pic1.svg'
import pic2 from '../assets/about/pic2.svg'
import pic3 from '../assets/about/pic3.svg'
import pic4 from '../assets/about/pic4.svg'
const AboutSection = () => {
  return (
    <Box as="section" py={10} px={{ base: 4, md: 8, lg: 24 }} >
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", lg: "row" }} mb={10}>
          <VStack flex={1} align="start" spacing={4}>
            <Heading size="xl">About Our Stock Market Course</Heading>
            <Text fontSize={'xl'}>
              Established in 2020, our mission is to educate and empower individuals in the stock
              market. We help traders and investors gain confidence and build a successful secondary
              income.
            </Text>
            <Text fontSize={'xl'}>
              We offer a comprehensive platform covering all aspects of stock market trading,
              including technical and fundamental analysis.
            </Text>
            <Text fontSize={'xl'}>Our courses include:</Text>
            <List fontSize={'xl'} spacing={2} pl={4}>
              <ListItem>Beginner's Guide to Stock Market</ListItem>
              <ListItem>Technical & Fundamental Analysis</ListItem>
              <ListItem>Options Trading Strategies</ListItem>
              <ListItem>Day Trading Techniques</ListItem>
              <ListItem>Advanced Stock Market Strategies</ListItem>
            </List>
          </VStack>
          <Box flex={1} textAlign="center">
            <Image src={pic1} alt="About Stock Market Course" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

const WhyChooseUsSection = () => {
  return (
    <Box as="section" py={10} px={{ base: 4, md: 8, lg: 24 }} >
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", lg: "row" }}>
          <Box flex={1} textAlign="center">
            <Image src={pic2} alt="Why Choose Us" />
          </Box>
          <VStack flex={1} align="start" spacing={4}>
            <Heading size="xl">Why Choose Our Stock Market Course?</Heading>
            <Text fontSize={'xl'}>
              Success in the stock market requires the right knowledge and guidance. Our expert
              mentors provide in-depth insights to help you master trading with confidence.
            </Text>
            <Text fontSize={'xl'}>
              We offer both online and offline classes in multiple languages, ensuring accessibility
              for all learners.
            </Text>
            <Text fontSize={'xl'}>
              Learn risk management, market analysis, and profitable trading strategies—all in one
              place.
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

const MissionVisionSection = () => {
  return (
    <Box as="section" py={10} px={{ base: 4, md: 8, lg: 24 }}>
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", lg: "row" }}  gap={6}>
          <VStack flex={1} p={6} bg="white" borderRadius="lg" border={'1px solid black'} boxShadow="10px 10px black" spacing={4}>
            <Image src={pic3} alt="Our Vision" boxSize={16} />
            <Heading size="lg">Our Vision</Heading>
            <Text textAlign="center" fontSize={'xl'}>
              To set the highest standards in stock market education and empower individuals to
              achieve financial success through informed trading.
            </Text>
          </VStack>
          <VStack flex={1} p={6} bg="white" borderRadius="lg" border={'1px solid black'} boxShadow="10px 10px black" spacing={4}>
            <Image src={pic4} alt="Our Mission" boxSize={16} />
            <Heading size="lg">Our Mission</Heading>
            <Text textAlign="center" fontSize={'xl'}>
              To educate and guide individuals towards financial independence by providing
              top-quality stock market training and mentoring.
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

const StockMarketPage = () => {
  return (
    <>
      <AboutSection />
      <WhyChooseUsSection />
      <MissionVisionSection />
    </>
  );
};

export default StockMarketPage;
