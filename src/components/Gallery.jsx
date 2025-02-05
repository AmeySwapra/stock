import { useState } from "react";
import { Box, Button, Heading, SimpleGrid, Image, Container, Flex } from "@chakra-ui/react";
import pic1 from '../assets/gallery/pic1.jpg';
import pic2 from '../assets/gallery/pic2.jpg';
import pic3 from '../assets/gallery/pic3.jpg';
import pic4 from '../assets/gallery/pic4.jpg';
import pic5 from '../assets/gallery/pic5.jpg';
import pic6 from '../assets/gallery/pic6.jpg';
import pic7 from '../assets/gallery/pic7.jpg';
import pic8 from '../assets/gallery/pic8.jpg';
import pic9 from '../assets/gallery/pic9.jpg';
import pic10 from '../assets/gallery/pic10.jpg';
import pic11 from '../assets/gallery/pic11.jpg';
import pic12 from '../assets/gallery/pic12.jpg';
import pic13 from '../assets/gallery/pic13.jpg';
import pic14 from '../assets/gallery/pic14.jpg';
import pic15 from '../assets/gallery/pic15.jpg';
import pic16 from '../assets/gallery/pic16.jpg';

const images = [
  pic1, pic2, pic3, pic4,
  pic5, pic6, pic7, pic8,
  pic9, pic10, pic11, pic12,
  pic13, pic14, pic15, pic16
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedImages = showAll ? images : images.slice(0, 8);

  return (
    <Container maxW="container.lg" py={10}>
      <Heading as="h1" textAlign="center" mb={6}>
        Gallery
      </Heading>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={4}>
        {displayedImages.map((image, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg"  overflow="hidden">
            <Image 
              src={image} 
              alt={`Gallery image ${index + 1}`} 
              objectFit="cover" 
              width="100%" 
              height="200px" 
            />
          </Box>
        ))}
      </SimpleGrid>
      <Flex justify="center" mt={6}>
        <Button bg="#00b386" color="#FFFFFF" size={'lg'} _hover={{ bg: "black", color: "#00b386" }} onClick={() => setShowAll(!showAll)}>
          {showAll ? "View Less" : "View More"}
        </Button>
      </Flex>
    </Container>
  );
};

export default Gallery;
