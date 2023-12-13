import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { NavBar } from "../NavBar";

export const Content = () => {
  return (
    <>
      <NavBar />
      <Flex flexDir="column" align="center" marginTop="10rem">
        <Box>
          <Heading as="h1" size="3xl" noOfLines={1}>
            Olá, Eu sou Vinicius de Souza.
          </Heading>
          <Text align="left" fontSize="2xl">
            Desenvolvedor FullStack.
          </Text>
        </Box>
      </Flex>
      <Flex marginTop="10rem" justifyContent="space-around" align="center">
        <Text w="300px" fontSize="2xl">
          Olá! Meu nome é Vinicius, e é um prazer estar aqui. Sou Desenvolvedor
          Web, apaixonado por tecnologia e o mundo da programação. Ao longo da
          minha jornada, tenho desenvolvido habilidades em JavaScript, Java,
          Spring, Node, React, estou buscando constantemente aprender e crescer
          profissionalmente.
        </Text>
        <Image maxH="600px" src="hero-image.jpg" alt="avatar" />
      </Flex>
    </>
  );
};
