
import {  Button, Flex, Heading, HStack, Image, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { SiDiscord } from "react-icons/si";
import logo from "../Resources/logo.jpg";
import icon from "../Resources/Icon.jpg";

export const Navbar = () => {
  return (
    <>
      <HStack justify={"space-around"} align="center" m={2} >
        <Link to="/">
          <Image src={logo} alt="Logo" />
        </Link>
        <Link to="">
          <Text>Pricing</Text>
        </Link>
        <Link>
          <HStack align="center" justify="center">
            <Text>Explore Tools</Text> <Image pt={1} src={icon} />
          </HStack>
        </Link>
        <Link>
          <HStack align="center" justify="center">
            <Text>Resources</Text> <Image pt={1} src={icon} />
          </HStack>
        </Link>
        <Link>FAQs</Link>
        <Link>Blogs</Link>
        <Link>
          <HStack>
            <SiDiscord color="#7983f5" />
            <Text>Join Discord</Text>
          </HStack>
        </Link>
        <Text>|</Text>
        <Link>Log in</Link>
        <Link>
          <Button bg="#077bff" color="white">
            Get Started
          </Button>
        </Link>
      </HStack>
      <hr />
    </>
  );
}
