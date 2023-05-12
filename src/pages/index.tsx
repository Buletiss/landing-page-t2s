import { Loading } from '../components/Loading';
import { Flex, Box } from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';
import { useLoading } from '../hooks/use-loading';

export default function Home() {
  const { showLoading } = useLoading();
  return (
    <>
      <Box bg="#191D32" h="100vh">
        {showLoading ? <Loading /> : <NavBar />}
      </Box>
    </>
  );
}
