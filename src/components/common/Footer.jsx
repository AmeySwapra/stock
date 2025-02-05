import { 
  Box, Flex, Link, Stack, Text, Icon, Image, Divider 
} from "@chakra-ui/react";
import { FaHome, FaBook, FaImages, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaInfoCircle } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import logo1 from '../../assets/logo/logo.jpg';

const Footer = () => {
  return (
    <Box 
      bg="#00b386" 
      color="#FFFFFF" 
      py={10} 
      px={{ base: 4, md: 8, lg: 24 }}
    >
      <Flex 
        direction={{ base: "column", md: "row" }} 
        justify="space-between" 
        align="center"
        wrap="wrap"
        gap={{ base: 6, md: 10 }}
      >
       
        <Flex align="center" gap={4} flexDirection={{ base: "column", md: "row" }}>
          <Image src={logo1} alt="Logo" height={{ base: "50px", md: "70px" }} objectFit="contain" />
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" textAlign={{ base: "center", md: "left" }}>
            ShareMarket<span style={{ color: "#FFD700" }}>Courses</span>
          </Text>
        </Flex>

        
        <Stack 
          direction={{ base: "column", sm: "row" }} 
          spacing={6} 
          align="center"
          wrap="wrap"
          justify="center"
        >
          <FooterLink to="/" icon={FaHome} label="Home" />
          <FooterLink to="/about" icon={FaInfoCircle} label="About" />
          <FooterLink to="/courses" icon={FaBook} label="Courses" />
          <FooterLink to="/gallery" icon={FaImages} label="Gallery" />
          <FooterLink to="/contact" icon={FaEnvelope} label="Contact" />
        </Stack>

        {/* Social Media Icons */}
        <Stack 
          direction="row" 
          spacing={4} 
          align="center"
          justify="center"
          wrap="wrap"
        >
          <SocialIcon href="https://facebook.com" icon={FaFacebook} />
          <SocialIcon href="https://twitter.com" icon={FaTwitter} />
          <SocialIcon href="https://instagram.com" icon={FaInstagram} />
          <SocialIcon href="https://linkedin.com" icon={FaLinkedin} />
        </Stack>
      </Flex>

      {/* Divider */}
      <Divider borderColor="#FFFFFF" my={6} />

      {/* Copyright Text */}
      <Text textAlign="center" fontSize={{ base: "xs", md: "sm" }}>
        © {new Date().getFullYear()} ShareMarketCourses. All Rights Reserved.
      </Text>
      <Text textAlign="center" fontSize={{ base: "xs", md: "sm" }} mt={2} fontWeight="bold">
        Website Design-Development and Maintenance by Swapra Technologies
      </Text>
    </Box>
  );
};

const FooterLink = ({ to, icon: IconComponent, label }) => (
  <Link
    as={RouterLink}
    to={to}
    display="flex"
    alignItems="center"
    gap={2}
    fontSize={{ base: "md", md: "lg" }}
    fontWeight="bold"
    textAlign="center"
    _hover={{ transform: "scale(1.1)" }}
    transition="all 0.2s ease-in-out"
    color="#FFFFFF"
  >
    <IconComponent size={20} />
    {label}
  </Link>
);

const SocialIcon = ({ href, icon: IconComponent }) => (
  <Link href={href} isExternal>
    <Icon 
      as={IconComponent} 
      boxSize={6} 
      _hover={{ transform: "scale(1.2)" }} 
      transition="all 0.2s ease-in-out" 
    />
  </Link>
);

export default Footer;
