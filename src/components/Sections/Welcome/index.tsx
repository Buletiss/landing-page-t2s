import { Box, Button, Flex, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TypeIt from "typeit-react";

export default function Welcome() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowButton(true);
    }, 7000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <Flex flexDirection="column" align="center" justifyContent="center">
        <Flex
          align="center"
          justify="center"
          textAlign="center"
          w="80%"
          display="block"
          height="45rem"
        >
          <Box>
            <TypeIt
              getBeforeInit={(instance) => {
                instance
                  .type(
                    "<h1 style='font-size: 8rem; color: white; font-weight: bold;'> Bem vindo a T2S</h1>"
                  )
                  .pause(750)
                  .type(
                    "<span style='font-size: 6rem; font-weight: bold;'>Transforme seu Negócio com Nossas Soluções.</span>"
                  );
                return instance;
              }}
              options={{
                speed: 90,
              }}
            />
          </Box>
          {showButton && (
            <Button
              marginTop="40px"
              w="200px"
              boxShadow="dark-lg"
              bg="white"
              _hover={{ background: "#03B0E9" }}
            >
              <Link href="#sobre">Vamos Começar</Link>
            </Button>
          )}
        </Flex>
      </Flex>
    </>
  );
}
