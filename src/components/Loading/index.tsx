import { Flex, Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <Flex
      bg="#191D32"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Spinner h="150px" w="150px" color="#fff" thickness="1px" />
    </Flex>
  );
};
