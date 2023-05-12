import {
  Image,
  Button,
  Flex,
  Link,
  Box,
  ListItem,
  OrderedList,
} from '@chakra-ui/react';

export const NavBar = () => {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        background="0,0,0,0,0"
      >
        <Image src="/testIcon.png" alt="iconImage" w={100} h={100} />
        <Flex alignItems="center">
          <OrderedList display="flex" paddingRight={5} color="white">
            <Link href="#" paddingLeft="30px">
              <ListItem>a</ListItem>
            </Link>
            <Link href="#" paddingLeft="30px">
              <ListItem>b</ListItem>
            </Link>
            <Link href="#" paddingLeft="30px">
              <ListItem>c</ListItem>
            </Link>
            <Link href="#" paddingLeft="30px">
              <ListItem>d</ListItem>
            </Link>
          </OrderedList>
          <Button>test</Button>
        </Flex>
      </Flex>
    </>
  );
};
