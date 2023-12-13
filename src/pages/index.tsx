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
        bg="white"
        flexDir="column"
        alignContent="center"
        justifyItems="center"
      >
        <Box>{showLoading ? <Loading /> : <Content />}</Box>
      </Flex>
    </>
  );
}
