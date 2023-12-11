import { Flex, Box, Button } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <>
      <Flex justifyContent="space-around" margin="4rem">
        <Button
          bgImage="/zero.png"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          width="3rem"
          height="4rem"
          _hover={{ hover: "none" }}
          _active={{ active: "none" }}
        ></Button>
        <Box>
          <Button
            padding="1.2rem"
            bg="white"
            fontSize="18px"
            margin="10px"
            _hover={{ hover: "none" }}
            _active={{ active: "none" }}
          >
            Links
          </Button>
          <Button
            padding="1.2rem"
            bg="white"
            borderColor="#6E07F3"
            color="#6E07F3"
            borderWidth="2px"
            fontSize="18px"
            borderRadius="99999px"
            _hover={{ bg: "#6E07F3", borderColor: "#6E07F3", color: "white" }}
          >
            Me envie uma mensagem
          </Button>
        </Box>
      </Flex>
    </>
  );
};
