import { 
  Box, Flex, IconButton, Link, Stack, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, Image 
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaHome, FaBook, FaImages, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import logo1 from '../../assets/logo/logo.jpg';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box 
      bg="#00b386" 
      color="#FFFFFF" 
      py={4} 
      px={{ base: 4, md: 8, lg: 24 }} 
      boxShadow="md" 
      position="sticky" 
      top={0} 
      zIndex={1000} 
      w="100%"
    >
      <Flex justify="space-between" align="center" wrap="wrap">
        {/* Logo Section */}
        <Flex align="center" gap={2} flexShrink={0}>
          <Image src={logo1} alt="Logo" h={{ base: "40px", md: "50px" }} />
          <Box fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" whiteSpace="nowrap">
            ShareMarket<span style={{ color: "#FFD700" }}>Courses</span>
          </Box>
        </Flex>

        
        <Stack 
          direction="row" 
          spacing={6} 
          display={{ base: "none", lg: "flex" }} 
          flexWrap="wrap"
          justify="flex-end"
        >
          <NavItem to="/" icon={FaHome} label="Home" />
          <NavItem to="/about" icon={FaInfoCircle} label="About" />
          <NavItem to="/courses" icon={FaBook} label="Courses" />
          <NavItem to="/gallery" icon={FaImages} label="Gallery" />
          <NavItem to="/contact" icon={FaEnvelope} label="Contact" />
        </Stack>

       
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon boxSize={6} />}
          display={{ base: "flex", lg: "none" }}
          onClick={onOpen}
          color="#FFFFFF"
          bg="transparent"
          _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
        />
      </Flex>

     
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#00b386" color="#FFFFFF">
          <Flex justify="flex-end" p={4}>
            <IconButton 
              aria-label="Close menu" 
              icon={<CloseIcon />} 
              onClick={onClose} 
              bg="transparent" 
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }} 
            />
          </Flex>
          <DrawerBody>
            <Stack spacing={6}>
              <NavItem to="/" icon={FaHome} label="Home" onClick={onClose} />
              <NavItem to="/about" icon={FaInfoCircle} label="About" onClick={onClose} />
              <NavItem to="/courses" icon={FaBook} label="Courses" onClick={onClose} />
              <NavItem to="/gallery" icon={FaImages} label="Gallery" onClick={onClose} />
              <NavItem to="/contact" icon={FaEnvelope} label="Contact" onClick={onClose} />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

const NavItem = ({ to, icon: Icon, label, onClick }) => (
  <Link
    as={RouterLink}
    to={to}
    display="flex"
    alignItems="center"
    gap={3}
    fontSize={{ base: "lg", md: "xl" }}
    fontWeight="bold"
    color="#FFFFFF"
    _hover={{ transform: "scale(1.1)" }}
    transition="all 0.2s ease-in-out"
    onClick={onClick}
  >
    <Icon size={24} />
    {label}
  </Link>
);

export default Header;
