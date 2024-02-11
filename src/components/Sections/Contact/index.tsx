import {
  Box,
  Flex,
  Heading,
  Button,
  Center,
  Link,
  Image,
} from "@chakra-ui/react";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export default function Contact() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCWrt_kT_G7yBYmx4eHjJbbORRANBzGKhw",
  });

  const position = { lat: -23.933558, lng: -46.324633 };
  return (
    <Flex
      bg="linear-gradient(20deg, rgba(50,100,255,1) 38%, rgba(0,180,232,1) 100%)"
      w="100vw"
      h="500px"
      justify="center"
      flexDirection="column"
    >
      <Heading textAlign="center" margin="4rem">
        Entre em contato ou venha nos visitar
      </Heading>
      <Flex
        w="100%"
        h="100%"
        alignItems="center"
        justify="space-around"
        flexDirection="column"
      >
        <Flex
          justify="space-around"
          w="40rem"
          bg="white"
          borderRadius="20px"
          width="60rem"
          boxShadow="dark-lg"
        >
          <Link href="https://www.instagram.com/t2stecnologia/">
            <Image src="instagram_icon.png" alt="social media" />
          </Link>

          <Link href="https://api.whatsapp.com/message/BTJAY5DYMB75M1?autoload=1&app_absent=0">
            <Image src="wpp_icon.png" alt="social media" />
          </Link>

          <Link href="https://www.facebook.com/t2s.tecnologia">
            <Image src="fb_icon.png" alt="social media" />
          </Link>

          <Link href="https://twitter.com/T2STecnologia">
            <Image src="twitter_icon.png" alt="social media" />
          </Link>

          <Link href="https://www.youtube.com/@T2sBr">
            <Image src="youtube_icon.png" alt="social media" />
          </Link>

          <Link href="https://www.linkedin.com/company/t2s/" isExternal>
            <Image src="linkedin_icon.png" alt="social media" />
          </Link>
        </Flex>
        <Flex w="100%" h="100%" justify="center" marginTop="4rem">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width: "50%", height: "100%" }}
              center={position}
              zoom={15}
            >
              <Marker position={position} />
            </GoogleMap>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
