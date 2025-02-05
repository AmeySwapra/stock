import { 
    Modal, ModalOverlay, ModalContent, ModalHeader, 
    ModalBody, ModalFooter, ModalCloseButton, Button, 
    Input, FormControl, FormLabel, Textarea, Select, useDisclosure 
  } from "@chakra-ui/react";
  import modalbg from '../../assets/modal/modalbg.png';
  
  const InquiryModal = ({ isOpen, onClose }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent 
          bgImage={`url(${modalbg})`} 
          bgSize="cover" 
          bgPosition="center"
          color="white"
        >
          <ModalHeader textAlign="center" color="black">Course Enrollment or Inquiry</ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel color="black">Name</FormLabel>
              <Input placeholder="Enter your name" bg="white" color="black" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel color="black">Email</FormLabel>
              <Input type="email" placeholder="Enter your email" bg="white" color="black" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel color="black">Mobile Number</FormLabel>
              <Input type="tel" placeholder="Enter your mobile number" bg="white" color="black" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel color="black">Select Course</FormLabel>
              <Select placeholder="Choose a course" bg="white" color="black">
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
            <FormControl mb={4}>
              <FormLabel color="black">Message</FormLabel>
              <Textarea placeholder="Your message" bg="white" color="black" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button bg={'black'} color="white" mr={3} onClick={onClose}>
              Submit
            </Button>
            <Button variant="ghost" bg="white"  color="black"onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default InquiryModal;
  