import { Box, Container, SimpleGrid, Image, Text, Heading } from "@chakra-ui/react";


import pic1 from '../assets/trade/pic1.svg';
import pic2 from '../assets/trade/pic2.svg';
import pic3 from '../assets/trade/pic3.svg';
import pic4 from '../assets/trade/pic4.svg';
import pic5 from '../assets/trade/pic5.svg';
import pic6 from '../assets/trade/pic6.svg';
import pic7 from '../assets/trade/pic7.svg';
import pic8 from '../assets/trade/pic8.svg';

const tradingBenefits = [
  { img: pic1, title: "Improve Financial Literacy" },
  { img: pic2, title: "Learn Wealth Creation" },
  { img: pic3, title: "Start Passive Income" },
  { img: pic4, title: "Opportunity Of Full-Time Profession" },
  { img: pic5, title: "Power of compounding money" },
  { img: pic6, title: "Get 5-10% monthly returns on investment" },
  { img: pic7, title: "One man army business" },
  { img: pic8, title: "Know the importance of money management" },
];


const ImportanceOfTrading = () => {
  return (
    <Box py={10} overflow={'hidden'} px={{ base: 4, md: 8, lg: 24 }}>
      <Container maxW="container.xl" textAlign="center">
        <Heading as="h2" fontSize="5xl" fontWeight="bold" mb={6}>
          Why Stock Market Trading & Investing Is Important?
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {tradingBenefits.map((item, index) => (
            <Box
              key={index}
              p={6}
              borderRadius="lg"
              boxShadow="10px 10px black"
              textAlign="center"
              border="1px solid black"
              _hover={{ boxShadow: "lg", transform: "scale(1.05)", transition: "0.3s" }}
            >
              <Image src={item.img} alt={item.title} mx="auto" mb={4} boxSize="80px" />
              <Text fontSize="lg" fontWeight="bold">{item.title}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ImportanceOfTrading;
