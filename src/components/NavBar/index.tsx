import { Flex, Box, Button, Image, Text, Link } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <>
      <Flex
        w="100%"
        h="6rem"
        bgColor="transparent"
        justifyContent="space-around"
        alignItems="center"
      >
        <Image src="logo_t2s.png" alt="logo_t2s" maxH="4rem" maxW="8rem" />
        <Box>
          <Button
            fontWeight="bold"
            fontSize="20px"
            color="white"
            bgColor="transparent"
            _hover={{ background: "#1D85F5", boxShadow: "lg" }}
          >
            <Link href="#sobre">Sobre nos</Link>
          </Button>
          <Button
            fontWeight="bold"
            fontSize="20px"
            color="white"
            bgColor="transparent"
            _hover={{ background: "#1D85F5", boxShadow: "lg" }}
          >
            <Link href="#clientes">Clientes</Link>
          </Button>
          <Button
            fontWeight="bold"
            fontSize="20px"
            color="white"
            bgColor="transparent"
            _hover={{ background: "#1D85F5", boxShadow: "lg" }}
          >
            <Link href="#cadastro">Cadastro</Link>
          </Button>
          <Button
            fontWeight="bold"
            fontSize="20px"
            color="white"
            bgColor="transparent"
            _hover={{ background: "#1D85F5", boxShadow: "lg" }}
          >
            <Link href="#contato">Contato</Link>
          </Button>
        </Box>
      </Flex>
    </>
  );
};
