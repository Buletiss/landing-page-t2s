import { Loading } from "../components/Loading";
import { Box, Flex } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import { useLoading } from "../hooks/use-loading";
import { Content } from "../components/Content";

export default function Home() {
  const { showLoading } = useLoading();
  return (
    <>
      <Flex
        bg="linear-gradient(20deg, rgba(50,100,255,1) 38%, rgba(0,180,232,1) 100%)"
        h="100vh"
        display="block"
        flexDir="column"
        alignContent="center"
        justifyItems="center"
      >
        <Box>{showLoading ? <Loading /> : <Content />}</Box>
      </Flex>
    </>
  );
}
