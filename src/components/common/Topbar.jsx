import { Box, Flex, Text, Icon, Link, Stack } from "@chakra-ui/react";
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Topbar = () => {
  return (
    <Box bg="#1A202C" color="white" py={2} px={{ base: 4, md: 8, lg: 24 }}>
      <Flex justify="space-between" align="center" flexWrap="wrap" direction={{ base: "column", md: "row" }} textAlign={{ base: "center", md: "left" }}>
        <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 2, md: 6 }} align="center">
          <Text fontWeight="bold">ShareMarketCourses</Text>

          <Flex align="center" gap={2}>
            <Icon as={FaEnvelope} />
            <Link href="mailto:swapratechnologies@gmail.com" _hover={{ textDecoration: "none", color: "gray.300" }}>
              swapratechnologies@gmail.com
            </Link>
          </Flex>

          <Flex align="center" gap={2}>
            <Icon as={FaPhoneAlt} />
            <Text>+91 9876543210</Text>
          </Flex>
        </Stack>

        <Flex align="center" gap={4} mt={{ base: 3, md: 0 }}>
          <Link href="#" isExternal><Icon as={FaFacebookF} /></Link>
          <Link href="#" isExternal><Icon as={FaTwitter} /></Link>
          <Link href="#" isExternal><Icon as={FaLinkedinIn} /></Link>
          <Link href="#" isExternal><Icon as={FaInstagram} /></Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Topbar;
