import { Loading } from '../components/Loading';
import { Flex } from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';
import { useLoading } from '../hooks/use-loading';

export default function Home() {
  const { showLoading } = useLoading();
  return <>{showLoading ? <Loading /> : <NavBar />}</>;
}
