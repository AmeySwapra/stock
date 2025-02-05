import { Box, IconButton } from "@chakra-ui/react";
import { FaClipboardList, FaWhatsapp } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import InquiryModal from "../Modal/InquiryModal";

const floatingBg = keyframes`
  0% { background-color: #ff6363; box-shadow: 0 0 10px #ff8484; }
  50% { background-color: #ff6363; box-shadow: 0 0 40px #ff8484; }
  100% { background-color: #ff6363; box-shadow: 0 0 80px #ff8484; }
`;

const floatingGreenBg = keyframes`
  0% { background-color: #28a745; box-shadow: 0 0 10px #34d058; }
  50% { background-color: #28a745; box-shadow: 0 0 40px #34d058; }
  100% { background-color: #28a745; box-shadow: 0 0 80px #34d058; }
`;

const FloatingButtons = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        position="fixed"
        zIndex="100"
        right={{ base: "20px", sm: "30px", md: "50px" }} // Adjust right position for responsiveness
        bottom={{ base: "20px", sm: "30px", md: "50px" }} // Adjust bottom position for responsiveness
        display="flex"
        flexDirection="column"
        gap={{ base: "10px", sm: "15px", md: "20px" }} // Adjust spacing between buttons for responsiveness
      >
        <IconButton
          aria-label="Enquiry"
          icon={<FaClipboardList size="24px" />}
          onClick={onOpen}
          color="white"
          borderRadius="full"
          width={{ base: "40px", sm: "50px" }} // Adjust button size for responsiveness
          height={{ base: "40px", sm: "50px" }} // Adjust button size for responsiveness
          _hover={{ bg: "#ff6363" }}
          animation={`${floatingBg} 2s infinite ease-in-out`}
        />

        <IconButton
          aria-label="WhatsApp"
          as="a"
          href="https://wa.me/+917066802085"
          target="_blank"
          icon={<FaWhatsapp size="24px" />}
          color="white"
          borderRadius="full"
          width={{ base: "40px", sm: "50px" }} 
          height={{ base: "40px", sm: "50px" }} 
          animation={`${floatingGreenBg} 2s infinite ease-in-out`}
        />
      </Box>

      <InquiryModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default FloatingButtons;
