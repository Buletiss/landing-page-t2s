import { Box, Button, Flex } from "@chakra-ui/react";
import { NavBar } from "../NavBar";
import About from "../Sections/About";
import Clientes from "../Sections/Clientes";
import Welcome from "../Sections/Welcome";
import Cadastro from "../Sections/Cadastro";
import Contact from "../Sections/Contact";

export const Content = () => {
  return (
    <>
      <NavBar />
      <Flex flexDir="column" align="center" justify="center">
        <Flex h="100vh" id="home">
          <Welcome />
        </Flex>
        <Flex id="sobre">
          <About />
        </Flex>
        <Flex marginTop="10rem" id="clientes">
          <Clientes />
        </Flex>
        <Flex marginTop="10rem" id="cadastro">
          <Cadastro />
        </Flex>
        <Flex marginTop="10rem" id="contato">
          <Contact />
        </Flex>
      </Flex>
    </>
  );
};
