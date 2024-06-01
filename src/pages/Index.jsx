import React from "react";
import { Container, Box, Heading, Text, VStack, HStack, IconButton, Image, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" bg="teal.500" color="white" py={4} textAlign="center">
        <Heading as="h1" size="xl">
          Divyang Welfare Association
        </Heading>
      </Box>

      {/* Main Content */}
      <Box as="main" py={8}>
        <VStack spacing={8}>
          <Box textAlign="center">
            <Heading as="h2" size="lg">
              Welcome to Divyang Welfare Association
            </Heading>
            <Text fontSize="lg" mt={4}>
              Our mission is to empower and support differently-abled individuals through various programs and initiatives.
            </Text>
          </Box>
          <Image src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0fGVufDB8fHx8MTcxNzI0NzI0OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Community Support" borderRadius="md" />

          <Box textAlign="center">
            <Heading as="h3" size="md">
              Our Programs
            </Heading>
            <Text fontSize="md" mt={2}>
              We offer a range of programs including skill development, educational support, and community engagement activities.
            </Text>
          </Box>
          <Image src="https://images.unsplash.com/photo-1616674202799-054e7c831378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxza2lsbCUyMGRldmVsb3BtZW50fGVufDB8fHx8MTcxNzI0NzI1MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Skill Development" borderRadius="md" />
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" py={4} textAlign="center">
        <VStack spacing={4}>
          <Text>Follow us on social media</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal>
              <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="facebook" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="twitter" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="pink" />
            </Link>
          </HStack>
          <Text>&copy; 2023 Divyang Welfare Association. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
