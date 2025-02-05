import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import boy from '../assets/logo/boy.avif';
import girl from '../assets/logo/girl.avif';

const testimonials = [
  {
    img: boy,
    title: "Excellent Teaching",
    content:
      "Thank you so much Sagar sir for making me understand the basic concepts of market with chart patterns and all. Your way of teaching is very nice which makes me understand.",
    name: "Lokesh Soni",
    designation: "Service In Private Sector",
    location: "Virar, Mumbai",
  },
  {
    img: boy,
    title: "Best & Easy Online Teaching",
    content:
      "It was a very nice experience. No doubt about the online coaching. Not any kind of difference between online & offline coaching. I think it will be different but Mr. Sagar Sir is the most brilliant person who solves all queries about the session.",
    name: "Bhushan Pawar",
    designation: "Business [Construction]",
    location: "Nashik",
  },
  {
    img: girl,
    title: "Best Class For Learning Share Market",
    content:
      "It was a great experience with money4me. Best class for learning share market. Very good teaching and explains every point in simple language.",
    name: "Shweta Nandanwar",
    designation: "Housewife [Swing Trader]",
    location: "Nashik",
  },
  {
    img: boy,
    title: "Learn To Control Psychology & Discipline",
    content:
      "Money4me Equity Services is not only teach trading process, techniques and method. But also teaches you the way you should change your behavior and learn discipline to adopt market in such a way to avoid losses by getting into emotional traps. I highly recommend to get into one month learning journey which is definitely gonna teach you to be better Trader and Investor !!",
    name: "Deepak Jadhav",
    designation: "DBA at HDFC",
    location: "Thane",
  },
  {
    img: girl,
    title: "Chart Practice, Doubt Clearing, & Easy To Understand",
    content:
      "Overall very nice experience. I had enrolled for online batch. The important point is that the training was really easy to understand. There was a doubt clearing session and practice everyday before starting daily study. Also discussion regarding daily market updates was really practical and useful.",
    name: "Purva Bhogaonkar",
    designation: "Banker [TJSB]",
    location: "Panchvati, Nashik",
  },
  {
    img: girl,
    title: "Personal Attention & Positive Attitude",
    content:
      "Overall my experience Superb. Below points I love while discussing in session.\n1. basic concepts about market\n2. Technical terms in leman language\n3. Building confidence\n4. Regular discussion on chart analysis\n5. Personal attention on everyone growth\n6. Very positive attitude and mindset on Market. ( Always guide in proper direction). Surely recommend person from Zero To Hero in share Market. I appreciate the way he ( Sager Sir ) create interest on Market. Thank you Sagar Sir.",
    name: "Bhagyashri Avhad",
    designation: "Sr. Data Engineer [Globant India Pvt. Ltd.]",
    location: "Hinjewadi, Pune",
  }
];

const Testimonials = () => {
  return (
    <Box py={10} px={{ base: 4, md: 8, lg: 24 }} overflow={'hidden'}>
      <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="bold" textAlign="center" mb={6}>
        What our Students Say
      </Text>
      <Flex justifyContent="center">
        <Swiper
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} style={{ display: "flex", justifyContent: "center" }}>
              <Box
                border="1px solid black"
                boxShadow="10px 10px black"
                borderRadius="lg"
                mb={6}
                p={6}
                width={{ base: "90%", sm: "80%", md: "60%", lg: "400px" }}
                maxW="400px"
                textAlign="center"
                height="auto"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Image src={testimonial.img} alt={testimonial.title} boxSize="80px" borderRadius="full" mx="auto" mb={4} />
                <VStack spacing={2}>
                  <Text fontSize="lg" fontWeight="bold">
                    {testimonial.title}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {testimonial.content}
                  </Text>
                  <Text fontSize="md" fontWeight="bold">
                    {testimonial.name}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {testimonial.designation}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {testimonial.location}
                  </Text>
                </VStack>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Box>
  );
};

export default Testimonials;
