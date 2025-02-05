import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading, Text, Image, Stack, SimpleGrid, Container } from "@chakra-ui/react";
import pic1 from '../../assets/coures/pic1.avif'
import pic2 from '../../assets/coures/pic2.avif'
import pic3 from '../../assets/coures/pic3.avif'
import pic4 from '../../assets/coures/pic4.avif'
import pic5 from '../../assets/coures/pic5.avif'
import pic6 from '../../assets/coures/pic6.avif'
import pic7 from '../../assets/coures/pic7.avif'
import pic8 from '../../assets/coures/pic8.avif'
const courses = [
    {
      title: "Stock Market Structure",
      overview: [
        "The Stock Market Structure course provides a fundamental understanding of how the stock market operates, including the roles of exchanges, brokers, and regulatory bodies. It covers the key components such as primary and secondary markets, different financial instruments, and the mechanics of trading.",
        "Students will gain insight into market participants, liquidity, and order types, which are crucial for making informed investment decisions. This course also explains the importance of market indices and how they impact stock prices.",
        "By the end of this course, learners will have a solid foundation in market structure, preparing them for more advanced trading concepts. Suitable for beginners, this course provides essential knowledge for anyone looking to enter the stock market."
      ],
      price: "₹14,500",
      newBatch: "Starting from 10th February",
      images: [pic1, pic2, pic3], 
      benefits: [
        "In-depth understanding of stock market operations.",
        "Preparation for more advanced trading concepts.",
        "Practical insights into market participants and liquidity."
      ],
      courseContent: [
        "Introduction to stock market structure",
        "Primary and secondary markets",
        "Trading mechanics and financial instruments",
        "Market participants and their roles",
        "Market indices and their impact on prices"
      ],
      eligibility: "Open to all, especially beginners looking to understand the stock market.",
      courseDuration: "3 Weeks (15 hours total)",
      rating: 4.5 
    },
    {
      title: "Price Action Analysis",
      overview: [
        "Price Action Analysis is a crucial skill for traders, allowing them to interpret and predict market movements based on historical price data. This course covers key concepts like support and resistance, candlestick patterns, and trend analysis.",
        "Students will learn how to identify potential trade setups without relying on indicators. The course focuses on understanding price behavior, breakouts, and reversals to make data-driven trading decisions.",
        "By the end of this program, participants will have developed strong analytical skills, enabling them to trade effectively in any financial market. Ideal for those who want to master trading using raw price data."
      ],
      price: "₹15,999",
      newBatch: "Starting from 15th February",
      images: [pic4, pic5, pic6], 
      benefits: [
        "Mastery of price action trading without relying on indicators.",
        "In-depth understanding of candlestick patterns and trends.",
        "Ability to analyze price behavior for informed trading decisions."
      ],
      courseContent: [
        "Introduction to price action analysis",
        "Support and resistance levels",
        "Candlestick patterns and trend analysis",
        "Breakouts, reversals, and trade setups",
        "Developing price action trading strategies"
      ],
      eligibility: "Basic understanding of trading concepts or completion of introductory trading course.",
      courseDuration: "4 Weeks (20 hours total)",
      rating: 4.7 
    },
    {
      title: "Derivative Segments",
      overview: [
        "This course dives into the world of derivatives, explaining futures and options trading in detail. Learners will explore contract types, expiration dates, and how derivatives can be used for hedging and speculation.",
        "It covers the role of margin trading, leverage, and risk management strategies in derivatives. Students will also understand the pricing of derivatives and factors influencing their value.",
        "By completing this course, learners will be able to trade derivatives confidently and understand their impact on financial markets. Ideal for traders looking to expand beyond traditional stock trading."
      ],
      price: "₹16,499",
      newBatch: "Starting from 20th February",
      images: [pic7, pic8, pic1], 
      benefits: [
        "Understanding of futures and options contracts.",
        "Ability to apply leverage and margin trading in derivatives.",
        "Comprehensive risk management strategies for derivatives."
      ],
      courseContent: [
        "Introduction to derivatives and contract types",
        "Futures and options trading",
        "Using derivatives for hedging and speculation",
        "Understanding pricing and valuation of derivatives",
        "Margin trading and leverage in derivatives"
      ],
      eligibility: "Intermediate level of trading knowledge, or completion of basic stock market course.",
      courseDuration: "4 Weeks (22 hours total)",
      rating: 4.8 
    },
    {
      title: "Commodity Market",
      overview: [
        "The Commodity Market course provides an in-depth look at trading commodities such as gold, crude oil, and agricultural products. Students will learn about demand and supply factors that influence commodity prices.",
        "This course covers futures contracts, speculation, and hedging in commodity trading. Learners will also explore the role of international commodity exchanges.",
        "By the end of this program, participants will have a clear understanding of how to analyze and trade commodities effectively. Ideal for investors looking to diversify their portfolios."
      ],
      price: "₹14,999",
      newBatch: "Starting from 25th February",
      images: [pic2, pic3, pic4], 
      benefits: [
        "Comprehensive understanding of commodity markets.",
        "Hands-on experience with futures contracts and speculation.",
        "Ability to analyze demand and supply factors affecting commodity prices."
      ],
      courseContent: [
        "Introduction to the commodity market",
        "Futures contracts and trading strategies",
        "Speculation and hedging in commodity trading",
        "Global commodity exchanges and their role",
        "Analyzing commodity price movements"
      ],
      eligibility: "Basic understanding of financial markets or previous trading experience.",
      courseDuration: "3 Weeks (18 hours total)",
      rating: 4.6 
    },
    {
      title: "Advanced Technical Analysis",
      overview: [
        "This course is designed for traders who want to take their technical analysis skills to the next level. It covers advanced chart patterns, indicators, and trading strategies.",
        "Students will learn how to use Fibonacci retracements, Elliott Wave Theory, and Bollinger Bands for precise market predictions. The course also focuses on backtesting strategies.",
        "By the end of this course, traders will have the skills to develop their own technical trading systems and maximize profits. Recommended for those with a basic understanding of market analysis."
      ],
      price: "₹17,999",
      newBatch: "Starting from 1st March",
      images: [pic5, pic6, pic7],
      benefits: [
        "Master advanced chart patterns and trading strategies.",
        "In-depth knowledge of Fibonacci, Elliott Wave, and Bollinger Bands.",
        "Ability to backtest trading strategies for better market predictions."
      ],
      courseContent: [
        "Advanced chart patterns and technical analysis",
        "Using Fibonacci retracements for market predictions",
        "Understanding Elliott Wave Theory",
        "Bollinger Bands and other technical indicators",
        "Backtesting trading strategies"
      ],
      eligibility: "Basic knowledge of technical analysis or completion of introductory technical analysis course.",
      courseDuration: "4 Weeks (20 hours total)",
      rating: 4.9 
    },
    {
      title: "Currency Market",
      overview: [
        "The Currency Market course covers the fundamentals of forex trading, including currency pairs, exchange rates, and the factors that drive currency fluctuations.",
        "Students will explore different forex trading strategies, risk management techniques, and the role of central banks in currency valuation.",
        "By the end of this course, learners will have a strong foundation in forex trading, allowing them to trade currency pairs with confidence. Suitable for both beginners and experienced traders."
      ],
      price: "₹14,750",
      newBatch: "Starting from 5th March",
      images: [pic3, pic4, pic5], 
      benefits: [
        "Fundamental understanding of forex trading and currency pairs.",
        "Knowledge of risk management strategies for forex trading.",
        "Confidence to trade currency pairs with effective strategies."
      ],
      courseContent: [
        "Introduction to the currency market and forex trading",
        "Understanding currency pairs and exchange rates",
        "Forex trading strategies and risk management",
        "Central banks and their role in currency markets",
        "Techniques for successful forex trading"
      ],
      eligibility: "Beginner to intermediate level of trading knowledge.",
      courseDuration: "3 Weeks (15 hours total)",
      rating: 4.4 
    },
    {
      title: "Equity Market",
      overview: [
        "This course provides in-depth knowledge of stock trading and investment strategies in the equity market. It covers fundamental and technical analysis for stock selection.",
        "Students will learn about financial statements, earnings reports, and valuation techniques to assess stock potential. The course also discusses market cycles and economic factors affecting stock prices.",
        "By completing this course, learners will be well-equipped to build their own stock portfolios and make informed investment decisions. Ideal for aspiring investors and traders."
      ],
      price: "₹15,499",
      newBatch: "Starting from 10th March",
      images: [pic6, pic7, pic8], 
      benefits: [
        "Comprehensive knowledge of stock trading and investment strategies.",
        "In-depth understanding of financial statements and stock valuation.",
        "Ability to build a stock portfolio and make informed decisions."
      ],
      courseContent: [
        "Introduction to the equity market and stock trading",
        "Fundamental and technical analysis for stock selection",
        "Analyzing financial statements and earnings reports",
        "Market cycles and economic factors affecting stock prices",
        "Building a stock portfolio and investment strategies"
      ],
      eligibility: "Beginner to intermediate level investors.",
      courseDuration: "4 Weeks (20 hours total)",
      rating: 4.7 
    },
    {
      title: "Option Writing",
      overview: [
        "This course focuses on the art of option writing (selling), an advanced strategy used to generate consistent income from the stock market. It covers concepts like covered calls, naked puts, and risk management techniques.",
        "Students will learn how to write options contracts, understand the Greeks (delta, theta, gamma, and vega), and use strategies to hedge against risk.",
        "By completing this course, learners will have a solid understanding of option writing and how to apply it for income generation and portfolio protection."
      ],
      price: "₹16,200",
      newBatch: "Starting from 15th March",
      images: [pic8, pic1, pic2], // Alternating images for each paragraph
      benefits: [
        "In-depth understanding of option writing strategies.",
        "Practical knowledge of the Greeks and risk management.",
        "Ability to use option writing for income generation and portfolio protection."
      ],
      courseContent: [
        "Introduction to option writing and strategies",
        "Covered calls and naked puts",
        "Understanding the Greeks and their significance",
        "Risk management techniques in option writing",
        "Hedging and portfolio protection with option writing"
      ],
      eligibility: "Intermediate to advanced level of trading knowledge.",
      courseDuration: "4 Weeks (20 hours total)",
      rating: 4.8 // Star rating out of 5
    }
  ];
  

const CourseDetail = () => {
  const { title } = useParams(); 
  const course = courses.find(course => course.title === title); 

  if (!course) {
    return <Text>Course not found.</Text>; 
  }

  return (
    <Container maxW="container.xl" py={10} px={{ base: 4, md: 8, lg: 24 }} mt={6}>
    {/* Course Title */}
    <Heading as="h1" textAlign="center" fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mb={6}>
      {course.title}
    </Heading>

    {/* Overview Section */}
    <Box mb={6}>
      <Heading as="h3" size="lg" mb={4}>
        Overview
      </Heading>
      {course.overview.map((text, index) => (
        <Stack
          direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
          alignItems="center"
          spacing={6}
          key={index}
          mb={6}
        >
          <Image
            src={course.images[index]}
            alt={`Course Image ${index + 1}`}
            boxSize={{ base: "100%", sm: "300px" }}
            objectFit="cover"
            borderRadius="md"
          />
          <Text flex="1" fontSize={{ base: "md", md: "xl" }} textAlign={{ base: "center", md: "left" }}>
            {text}
          </Text>
        </Stack>
      ))}
    </Box>

    {/* Course Content Section */}
    <Box mb={10}>
      <Heading as="h3" size="lg" mb={6}>
        Course Content
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
        {course.courseContent.map((item, index) => (
          <Box
            key={index}
            border="1px solid black"
            p={4}
            borderRadius="md"
            boxShadow="5px 5px black"
            _hover={{
              boxShadow: "lg",
              transform: "scale(1.05)",
              transition: "0.3s",
            }}
          >
            <Text fontSize={{ base: "md", md: "xl" }}>{item}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>

    {/* Benefits Section */}
    <Box mb={6}>
      <Heading as="h3" size="lg" mb={4}>
        Benefits
      </Heading>
      <Stack spacing={2}>
        {course.benefits.map((benefit, index) => (
          <Text key={index} fontSize={{ base: "md", md: "xl" }}>
            ✅ {benefit}
          </Text>
        ))}
      </Stack>
    </Box>

    {/* Rating Section */}
    <Box mb={6}>
      <Heading as="h3" size="lg" mb={4}>
        Rating
      </Heading>
      <Text fontSize={{ base: "md", md: "xl" }}>
        {'⭐'.repeat(course.rating)} ({course.rating} out of 5)
      </Text>
    </Box>

    {/* Eligibility Section */}
    <Box mb={6}>
      <Heading as="h3" size="lg" mb={4}>
        Eligibility
      </Heading>
      <Text fontSize={{ base: "md", md: "xl" }}>{course.eligibility}</Text>
    </Box>

    {/* Course Duration */}
    <Box mb={6}>
      <Heading as="h3" size="lg" mb={4}>
        Course Duration
      </Heading>
      <Text fontSize={{ base: "md", md: "xl" }}>{course.courseDuration}</Text>
    </Box>

    {/* Course Fees & New Batch */}
    <Box mb={6}>
      <Heading as="h3" size="lg" mb={4}>
        Course Fees & New Batch
      </Heading>
      <Text fontSize={{ base: "md", md: "xl" }}>{course.price}</Text>
      <Text fontSize={{ base: "md", md: "xl" }}>{course.newBatch}</Text>
    </Box>
  </Container>
  );
};

export default CourseDetail;
