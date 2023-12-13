import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { NavBar } from "../NavBar";

export const Content = () => {
  return (
    <>
      <NavBar />
      <Flex h="90vh" flexDir="column" align="center">
        <Box>
          <Heading as="h1" size="3xl" noOfLines={1}>
            Olá, Eu sou Vinicius de Souza Feitosa.
          </Heading>
          <Text align="left" fontSize="2xl">
            Desenvolvedor FullStack.
          </Text>
        </Box>
      </Flex>
    </>
  );
};
