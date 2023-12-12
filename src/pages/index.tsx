import { Loading } from "../components/Loading";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import { useLoading } from "../hooks/use-loading";

export default function Home() {
  const { showLoading } = useLoading();
  return (
    <>
      <Flex
        bg="white"
        h="100vh"
        flexDir="column"
        alignContent="center"
        justifyItems="center"
      >
        <Box margin="2rem">{showLoading ? <Loading /> : <NavBar />}</Box>
      </Flex>
    </>
  );
}
