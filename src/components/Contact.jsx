import { 
  Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Textarea, 
  VStack, SimpleGrid, Icon, Link, Text, Card, CardBody, Flex
} from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaHome } from "react-icons/fa";

const Contact = () => {
  return (
    <Container maxW="container.xl"  px={{ base: 4, md: 8, lg: 20 }}  py={10}>
      <Heading as="h2" textAlign="left" mb={1}>
        Course Enrollment or Inquiry
      </Heading>
      <Text textAlign="left" mb={6}>
        Your details will not be shared. Compulsory fields are marked.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Card bg="#fbfcfd" p={6} borderRadius="lg" border={'1px solid black'}   boxShadow="10px 10px 0px black" >
          <CardBody>
            <VStack spacing={4} as="form">
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Name *" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Mobile No.</FormLabel>
                <Input type="tel" placeholder="Phone Number" maxLength={10} />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Select Course</FormLabel>
                <Select placeholder="Select a course">
                <option value="stock_market_structure">Stock Market Structure</option>
                <option value="price_action_analysis">Price Action Analysis</option>
                <option value="derivative_segments">Derivative Segments</option>
                <option value="commodity_market">Commodity Market</option>
                <option value="advanced_technical_analysis">Advanced Technical Analysis</option>
                <option value="currency_market">Currency Market</option>
                <option value="equity_market">Equity Market</option>
                <option value="option_writing">Option Writing</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Message *" rows={5} />
              </FormControl>
              <VStack spacing={3} width="full">
                <Button bg={'black'} color={'white'} width="half">Submit</Button>
                <Button color={'black'} bg={'white'} width="half">Reset</Button>
              </VStack>
            </VStack>
          </CardBody>
        </Card>

        <Card  p={6} >
          <CardBody>
            <Heading as="h3" size="lg" mb={4}>Address Details</Heading>
            <VStack align="start" spacing={'50px'}>
              <Flex alignItems="center">
                <Box bg="#00cbf3" p={2} borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <Icon as={FaPhoneAlt} color="white" w={6} h={6} />
                </Box>
                <VStack align="start" spacing={0} ml={3}>
                  <Text fontWeight="bold">Call us directly:</Text>
                  <Link href="tel:+919890655874">+91 989 065 5874</Link>
                  <Link href="tel:+917385619448">+91 738 561 9448</Link>
                </VStack>
              </Flex>
              <Flex alignItems="center">
                <Box bg="#f68c1f" p={2} borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <Icon as={FaEnvelope} color="white" w={6} h={6} />
                </Box>
                <VStack align="start" spacing={0} ml={3}>
                  <Text fontWeight="bold">Email us directly:</Text>
                  <Link href="mailto:info@swapratechnologies.com">info@swapratechnologies.com</Link>
                  <Link href="mailto:swapratechnologies@gmail.com">swapratechnologies@gmail.com</Link>
                </VStack>
              </Flex>
              <Flex alignItems="center">
                <Box bg="#00a650" p={2} borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <Icon as={FaHome} color="white" w={6} h={6} />
                </Box>
                <VStack align="start" spacing={0} ml={3}>
                  <Text fontWeight="bold">Visit us at:</Text>
                  <Text>
                    Neeta Tower 1st Floor Above Amantran Hotel, Mumbai Pune Highway, Phugewadi, Pune - Maharashtra 411012
                  </Text>
                </VStack>
              </Flex>
            </VStack>
          </CardBody>
        </Card>
      </SimpleGrid>
      <Box mt={10} borderRadius="lg" overflow="hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15126.347805001367!2d73.8309722!3d18.5926515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b957207908e3%3A0x87104ad1956e1901!2sSwaPra%20Technologies!5e0!3m2!1sen!2sin!4v1731580339592!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Container>
  );
};

export default Contact;
