import { Box, Container, Flex, Heading, Text, Button, useDisclosure } from "@chakra-ui/react";
import InquiryModal from "../Modal/InquiryModal";
import bob from '../../assets/modal/blob.svg';

const InquiryForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="section" px={{ base: 4, md: 8, lg: 24 }} boxShadow="lg"  py={10} position="relative">
      <Container maxW="container.xl">
        <Flex 
          direction={{ base: "column", md: "row" }} 
          align="center" 
          justify="space-between" 
          bg="white" 
          boxShadow="lg" 
          borderRadius="md" 
          p={6}
          position="relative" 
          overflow="hidden"
        >
          
          <Box 
            position="absolute"
            top="-80px"
            right="-90px"
            width="350px"
            height="350px"
            backgroundImage={`url(${bob})`}
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            zIndex={1}
            animation="rotate 10s linear infinite"
          />

         
          <Box textAlign={{ base: "center", md: "left" }} zIndex={2}>
            <Heading size="lg" mb={2}>
              Ready to start your career in Share Market?
            </Heading>
            <Text fontSize="md" color="gray.600">
              We are here to help you!
            </Text>
          </Box>

          <Button 
            color={'black'}
            bg={'white'}
            size="lg" 
            mt={{ base: 4, md: 0 }}
            onClick={onOpen}
            zIndex={2}
          >
            Get Started
          </Button>
        </Flex>
      </Container>

     
      <InquiryModal isOpen={isOpen} onClose={onClose} />

     
      <style>
        {`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </Box>
  );
};

export default InquiryForm;
