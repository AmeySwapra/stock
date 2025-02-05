import React from "react";
import Slider from "react-slick";
import { Box, Image, Heading, Text, VStack, Container, HStack } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../../assets/coures/pic1.avif';
import pic2 from '../../assets/coures/pic2.avif';
import pic3 from '../../assets/coures/pic3.avif';
import pic4 from '../../assets/coures/pic4.avif';
import pic5 from '../../assets/coures/pic5.avif';
import pic6 from '../../assets/coures/pic6.avif';
import pic7 from '../../assets/coures/pic7.avif';
import pic8 from '../../assets/coures/pic8.avif';

const courses = [
  { title: "Stock Market Fundamentals", image: pic1, overview: "Learn the basics of stock trading, how to invest in equities, and build a diversified portfolio." },
  { title: "Money Market Instruments", image: pic2, overview: "Understand short-term investments like certificates of deposit, Treasury bills, and commercial paper." },
  { title: "Cryptocurrency Trading", image: pic3, overview: "Explore the world of digital currencies like Bitcoin and Ethereum, and learn how to trade on crypto exchanges." },
  { title: "Forex Trading Strategies", image: pic4, overview: "Master the art of currency trading with techniques used by successful forex traders around the world." },
  { title: "Real Estate Investment", image: pic5, overview: "Discover how to profit from real estate investments, whether buying properties or trading REITs." },
  { title: "Peer-to-Peer Lending", image: pic6, overview: "Learn how to earn passive income by lending money to individuals or businesses through P2P platforms." },
  { title: "Options and Futures Trading", image: pic7, overview: "Dive deep into advanced financial instruments like options and futures contracts to hedge risks and maximize returns." },
  { title: "Building Online Businesses", image: pic8, overview: "Start your own e-commerce or digital service business, and learn strategies for scaling and profitability." },
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Container maxW="container.xl" overflow={'hidden'} py={10} px={{ base: 4, md: 8, lg: 24 }}>
      <Heading as="h2" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} textAlign="center" mb={6}>
        Stock Trading Essentials: From Beginner to Pro
      </Heading>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <Box key={index} p={4}>
            <HStack
              spacing={6}
              bg="#fbfcfd"
              border="1px solid black"
              boxShadow="10px 10px black"
              borderRadius="lg"
              overflow="hidden"
              align="center"
              justifyContent="center"
              p={5}
              flexDirection={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
            >
              <Image 
                src={course.image} 
                alt={course.title} 
                borderRadius="md" 
                boxSize={{ base: "100%", md: "250px" }} 
                objectFit="cover" 
              />
              <VStack align="start" spacing={3} maxW={{ base: "100%", md: "60%" }} textAlign={{ base: "center", md: "left" }}>
                <Text fontWeight="bold" fontSize={{ base: "2xl", md: "3xl" }}>{course.title}</Text>
                <Text fontSize={{ base: "md", md: "xl" }} color="gray.600">{course.overview}</Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Carousel;
