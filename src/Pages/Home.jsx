import { Button, HStack, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import aero from "../Resources/aero.jpg" 
import star from "../Resources/star.png"; 
import blue from "../Resources/blue.png"; 
import lock from "../Resources/lock.png";
import s2 from "../Resources/s2.png";
import s3 from "../Resources/s3.png";
import group from "../Resources/group.png";

export const Home = () => {
  return (
    <Stack justify={"center"} align="center">
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Text fontSize={"xs"} color="#111822">
        WELCOME TO CREATIVE PROXIES
      </Text>
      <HStack fontSize={"5xl"}>
        <Text>We are the</Text> <Text color={"#268bff"}>Fastest</Text>{" "}
        <Text>and the</Text>
        <Text color={"#16d113"}>Most</Text>
      </HStack>
      <HStack fontSize={"5xl"}>
        <Text color={"#16d113"}>Reliable</Text>{" "}
        <Text>Proxy Service since 2020</Text>
      </HStack>
      <Text fontSize={"xs"} color="#111822">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue
        sit amet mollis molestie.
      </Text>
      <Image src={aero} />
      <Stack p={3} background="#e6f8f2" borderRadius={2}>
        <Image src={star} />
      </Stack>
      <Spacer />
      <Spacer />
      <hr />
      <hr />
      <Spacer />
      <Spacer />
      <HStack gap={4}>
        <Stack
          p={3}
          background="#e6f8f2"
          borderRadius={2}
          border="1px solid grey"
        >
          <Image src={blue} />
        </Stack>
        <Stack
          p={3}
          background="#e6f8f2"
          borderRadius={2}
          border="1px solid grey"
        >
          <Image src={lock} />
        </Stack>
        <Stack
          p={3}
          background="#e6f8f2"
          borderRadius={2}
          border="1px solid grey"
        >
          <Image src={s2} />
        </Stack>
        <Stack
          p={3}
          background="#e6f8f2"
          borderRadius={2}
          border="1px solid grey"
        >
          <Image src={s3} />
        </Stack>
      </HStack>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Stack bg="#0566D4" p={10}>
        <Image src={group} />
      </Stack>
    </Stack>
  );
}
