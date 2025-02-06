import React, { useState, useRef } from "react";
import {
  Box,
  IconButton,
  Stack,
  Heading,
  Container,
  Text,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import pic1 from '../../assets/coures/pic1.avif';
import pic2 from '../../assets/coures/pic2.avif';
import pic3 from '../../assets/coures/pic3.avif';
import pic4 from '../../assets/coures/pic4.avif';
import pic5 from '../../assets/coures/pic5.avif';
import pic6 from '../../assets/coures/pic6.avif';
import pic7 from '../../assets/coures/pic7.avif';
import pic8 from '../../assets/coures/pic8.avif';

const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
      },
    },
  ],
};

export default function Carousel() {
  const [slider, setSlider] = useState(null);

  const cards = [
    { title: "Stock Market Fundamentals", image: pic1, overview: "Learn the basics of stock trading, how to invest in equities, and build a diversified portfolio." },
    { title: "Money Market Instruments", image: pic2, overview: "Understand short-term investments like certificates of deposit, Treasury bills, and commercial paper." },
    { title: "Cryptocurrency Trading", image: pic3, overview: "Explore the world of digital currencies like Bitcoin and Ethereum, and learn how to trade on crypto exchanges." },
    { title: "Forex Trading Strategies", image: pic4, overview: "Master the art of currency trading with techniques used by successful forex traders around the world." },
    { title: "Real Estate Investment", image: pic5, overview: "Discover how to profit from real estate investments, whether buying properties or trading REITs." },
    { title: "Peer-to-Peer Lending", image: pic6, overview: "Learn how to earn passive income by lending money to individuals or businesses through P2P platforms." },
    { title: "Options and Futures Trading", image: pic7, overview: "Dive deep into advanced financial instruments like options and futures contracts to hedge risks and maximize returns." },
    { title: "Building Online Businesses", image: pic8, overview: "Start your own e-commerce or digital service business, and learn strategies for scaling and profitability." },
  ];

  return (
    <Box
      position="relative"
      height={{ base: "400px", md: "600px" }}
      width="full"
      overflow="hidden"
    >
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Arrow (Desktop Only) */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={{ base: "-9999px", md: "40px" }}
        top="50%"
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" color="white" />
      </IconButton>

      {/* Right Arrow (Desktop Only) */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={{ base: "-9999px", md: "40px" }}
        top="50%"
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" color="white" />
      </IconButton>

      {/* Carousel Slider */}
      <Slider {...settings} ref={(c) => setSlider(c)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={{ base: "400px", md: "600px" }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* Dark Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              backgroundColor="rgba(0, 0, 0, 0.4)" 
            />

            {/* Content Container */}
            <Container size="container.xl" height="100%" position="relative">
              <Stack
                spacing={4}
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                color="white"
                textAlign="center"
                width={{ base: "90%", md: "70%" }}
              >
                {/* Title */}
                <Heading
                  fontSize={{ base: '30px', md: '45px', lg: '58px' }}
                  lineHeight="shorter"
                  letterSpacing="wide"
                >
                  {card.title}
                </Heading>

                {/* Overview Text */}
                <Text fontSize={{ base: "16px", md: "20px" }} fontWeight="medium">
                  {card.overview}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
