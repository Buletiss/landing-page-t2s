import {
  Button,
  Flex,
  UnorderedList,
  ListItem,
  Heading,
  Box,
  Link,
  Text,
} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Cadastro() {
  return (
    <>
      <Flex flexDir="column" w="100%">
        <Heading textAlign="center">Cadastre-se e receba novidades</Heading>
        <Flex alignItems="center" textAlign="center" marginTop="8rem">
          <Box w="800px">
            <Player
              src="signup.json"
              loop
              autoplay
              style={{ height: "400px", width: "500px" }}
            />
            <Button
              bg="#3264FF"
              color="white"
              _hover={{ background: "#03AFE9" }}
            >
              <Link href="https://encurtador.com.br/eqyzK" isExternal>
                Cadastre-se e Receba nossas novidades
              </Link>
            </Button>
          </Box>
          <Box w="800px">
            <Text
              fontWeight="black"
              fontSize="20px"
              fontFamily={"fantasy"}
              textAlign="left"
            >
              Você está pronto para ficar por dentro das últimas novidades,
              atualizações exclusivas e conteúdos envolventes? Não perca a
              oportunidade de estar à frente e se manter informado sobre tudo o
              que acontece em nosso universo! Ao se cadastrar, você terá acesso
              privilegiado a:
              <UnorderedList>
                <br />
                <ListItem>
                  <strong>Atualizações Exclusivas:</strong> Seja o primeiro a
                  conhecer nossos lançamentos, eventos e notícias importantes
                  diretamente em sua caixa de entrada.
                </ListItem>
                <ListItem>
                  <strong>Conteúdos Exclusivos:</strong> Receba conteúdos
                  especiais, dicas valiosas e informações exclusivas preparadas
                  especialmente para você.
                </ListItem>
                <ListItem>
                  <strong> Ofertas Especiais:</strong> Esteja entre os primeiros
                  a aproveitar ofertas exclusivas, descontos especiais e
                  promoções irresistíveis. Não perca tempo!
                </ListItem>
              </UnorderedList>
              <br />
              Ao se cadastrar, você está concordando em receber nossos e-mails e
              pode cancelar a inscrição a qualquer momento. Garantimos total
              privacidade e segurança de suas informações.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
