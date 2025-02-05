import { Box, Heading, SimpleGrid, Text, Container, Image, Button, Flex } from "@chakra-ui/react";
import pic1 from '../assets/coures/pic1.avif'
import pic2 from '../assets/coures/pic2.avif'
import pic3 from '../assets/coures/pic3.avif'
import pic4 from '../assets/coures/pic4.avif'
import pic5 from '../assets/coures/pic5.avif'
import pic6 from '../assets/coures/pic6.avif'
import pic7 from '../assets/coures/pic7.avif'
import pic8 from '../assets/coures/pic8.avif'
import { Link } from "react-router-dom";

const courses = [
  { title: "Stock Market Structure", overview: "Learn the basics of stock market operations and structure.", price: "₹14,500", image: pic1 },
  { title: "Price Action Analysis", overview: "Understand market trends through price movements and patterns.", price: "₹15,999", image: pic2 },
  { title: "Derivative Segments", overview: "Explore futures and options trading in financial markets.", price: "₹16,499", image: pic3 },
  { title: "Commodity Market", overview: "Gain insights into trading commodities like gold, oil, and agricultural products.", price: "₹14,999", image: pic4 },
  { title: "Advanced Technical Analysis", overview: "Master technical indicators and chart patterns for market predictions.", price: "₹17,999", image: pic5 },
  { title: "Currency Market", overview: "Understand forex trading and currency exchange mechanisms.", price: "₹14,750", image: pic6 },
  { title: "Equity Market", overview: "Learn stock investment strategies and market analysis techniques.", price: "₹15,499", image: pic7 },
  { title: "Option Writing", overview: "Delve into selling options and risk management strategies.", price: "₹16,999", image: pic8 },
];

const Courses = () => {
  return (
    <Container maxW="container.xl" px={{ base: 4, md: 8, lg: 24 }} overflow={'hidden'} py={10}>
      <Heading as="h1" textAlign="center" size="2xl" mb={6}>
        All Popular Courses
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {courses.map((course, index) => (
          <Flex
            key={index}
            p={5}
            shadow="md"
            borderRadius="lg"
            textAlign="center"
            direction="column"
            justify="space-between"
            minH="320px"
            border={'1px solid black'}
            boxShadow={'10px 10px black'}
            _hover={{ boxShadow: "lg", transform: "scale(1.05)", transition: "0.3s" }}
          >
            <Box >
              <Image src={course.image} alt={course.title} borderRadius="md" mb={3} />
              <Text fontSize="lg" fontWeight="bold">{course.title}</Text>
              <Text mt={2}>{course.overview}</Text>
              <Text mt={2} fontWeight="bold">{course.price}</Text>
            </Box>
            <Link to={`/course/${course.title}`}>
               <Button mt={3} bg="#00b386" color="#FFFFFF" _hover={{ bg: "black", color: "#00b386" }} alignSelf="center">View Details</Button>
            </Link>
          </Flex>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Courses;
