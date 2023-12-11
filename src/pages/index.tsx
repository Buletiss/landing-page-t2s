import { Loading } from "../components/Loading";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import { useLoading } from "../hooks/use-loading";

export default function Home() {
  const { showLoading } = useLoading();
  return (
    <>
      <Box bg="white" h="100vh">
        {showLoading ? <Loading /> : <NavBar />}
        <Flex alignItems="center" justifyContent="center">
          <Heading as="h1" size="4xl">
            Under Construction
          </Heading>
        </Flex>
      </Box>
    </>
  );
}
