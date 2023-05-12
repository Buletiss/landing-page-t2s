import React from 'react';
import { Flex, ChakraProvider } from '@chakra-ui/react';
import Home from './index';

export default function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}
