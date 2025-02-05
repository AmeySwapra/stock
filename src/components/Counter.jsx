import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import pic1 from '../assets/counter/pic1.svg';
import pic2 from '../assets/counter/pic2.svg';
import pic3 from '../assets/counter/pic3.svg';
import pic4 from '../assets/counter/pic4.svg';

const CounterBox = ({ icon, count, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <VStack
      ref={ref}
      bg="white"
      p={6}
      border={'1px solid black'}
      borderRadius="lg"
      boxShadow="10px 10px black"
      align="center"
      w={{ base: "100%", md: "22%" }}
    >
      <Image src={icon} alt={label} boxSize={20} />
      <Text fontSize="6xl" fontWeight="bold" color="red.500">
        {inView ? <CountUp start={0} end={parseFloat(count)} duration={5} decimals={count.includes('.') ? 1 : 0} /> : 0}
      </Text>
      <Text fontSize="md" fontWeight="semibold">
        {label}
      </Text>
    </VStack>
  );
};

const Counter = () => {
  return (
    <Box py={10} bg="white">
      <Flex
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 8, lg: 24 }}
        py={10}
        wrap="wrap"
        justify="space-around"
        gap={6}
      >
        <CounterBox icon={pic1} count="100" label="Batches" />
        <CounterBox icon={pic2} count="750" label="Happy Students" />
        <CounterBox icon={pic3} count="800" label="Hours Training" />
        <CounterBox icon={pic4} count="4.8" label="Google Rating" />
      </Flex>
    </Box>
  );
};

export default Counter;
