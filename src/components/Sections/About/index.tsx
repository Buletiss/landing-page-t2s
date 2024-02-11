import { Flex, Text, Box, Heading, Image } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function About() {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Flex
        justifyContent="center"
        w="80%"
        align="center"
        flexDirection="column"
      >
        <Heading fontFamily={"fantasy"}>Sobre a T2S</Heading>
        <Flex height="400px" marginTop="2rem" align="center" textAlign="center">
          <Text
            fontSize="30px"
            color="black"
            fontWeight="bold"
            fontFamily={"fantasy"}
            marginRight="40px"
          >
            A T2S é especialista em integração de sistemas e outros serviços,
            oferecendo soluções que transformam desafios em oportunidades para
            empresas, seja uma startup inovadora ou uma empresa consolidada. Com
            a missão de otimizar processos, proporcionar eficiência e
            impulsionar o crescimento, a T2S conecta as peças fundamentais do
            seu ecossistema digital. Explore as possibilidades da integração
            conosco e leve sua empresa a novos patamares de sucesso.
          </Text>

          <Player
            src="people_work.json"
            loop
            autoplay
            style={{ height: "500px", width: "500px" }}
          />
        </Flex>
        <Flex w="100%" textAlign="center" justify="space-around">
          <Box>
            <Image src="handle.png" alt="handle" maxW="200px" />
            <Text maxW="200px">
              <strong>
                COLABORAÇÃO num outro patamar para entregar a você não UM
                profissional, mas um EXÉRCITO de DEVs
              </strong>
            </Text>
          </Box>
          <Box>
            <Image src="code.png" alt="handle" maxW="200px" />
            <Text maxW="200px">
              <strong>
                Mais de 400 PROJETOS e mais de 140 EMPRESAS atendidas
              </strong>
            </Text>
          </Box>{" "}
          <Box>
            <Image src="hat.png" alt="handle" maxW="200px" />
            <Text maxW="200px">
              <strong>
                ARTICULAÇÃO ACADÊMICA para CAPTAR os melhores TALENTOS
              </strong>
            </Text>
          </Box>{" "}
          <Box>
            <Image src="grafic.png" alt="handle" maxW="200px" />
            <Text maxW="200px">
              <strong>Garantia de ENTREGAS, que é o mais importante</strong>
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
