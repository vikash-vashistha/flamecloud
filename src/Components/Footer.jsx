import { Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { SiDiscord } from "react-icons/si";
import logo from "../Resources/logo.jpg";

const headingStyle = {
  fontWeight: 600,
  fontSize: "26px",
  color: "#111822",
  lineHeight: "31px",
  letterSpacing: "-0.02em",
};

const subHeadingStyle = {
  fontWeight: 400,
  fontSize: "14px",
  color: "#111822",
  lineHeight: "17px",
  letterSpacing: "-0.02em",
  opacity: 0.5,
};

const bodyStyle = {
  fontWeight: 500,
  fontSize: "16px",
  color: "#111822",
  lineHeight: "19px",
  letterSpacing: "-0.02em",
};

export const Footer = () => {
  return (
    <HStack
      p="34px 10px"
      borderTop={"1px solid #D9D8D6"}
      h="224px"
      mb="14px"
      mx="192px"
    >
      <VStack justifyContent={"center"} alignItems={"flex-start"} mr="246px">
        <Image src={logo} alt="Logo" />
        <Text style={subHeadingStyle} pl="11px" w="225px">
          Copyright © 2023 Creative Proxies. All rights reserved.
        </Text>
        <Button
          border="1px solid #5865F2"
          w="221px"
          boxSizing="border-box"
          background={"rgba(88,101,242,0.1)"}
          borderRadius={"10px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap="10px"
          p="10px"
        >
          <SiDiscord />
          <Text style={{ bodyStyle, color: "#5865F2" }}>Join Our Discord</Text>
        </Button>
      </VStack>
      <HStack justify="center" gap="100px" align="center">
        <VStack align="center" gap="10px">
          <Text style={subHeadingStyle}>Explore</Text>
          <Text style={bodyStyle}>Proxy Location Checker</Text>
          <Text style={bodyStyle}>IPv6 Compatibility</Text>
          <Text style={bodyStyle}>Blogs</Text>
        </VStack>
        <VStack align="center" gap="10px">
          <Text style={subHeadingStyle}>Resources</Text>
          <Text style={bodyStyle}>FAQs</Text>
          <Text style={bodyStyle}>Branding</Text>
          <Text style={bodyStyle}>Network Information</Text>
          <Text style={bodyStyle}>Imprint</Text>
        </VStack>
        <VStack align="center" gap="10px">
          <Text style={subHeadingStyle}>Support</Text>
          <Text style={bodyStyle}>Status</Text>
          <Text style={bodyStyle}>Terms of Service</Text>
          <Text style={bodyStyle}>Privacy Policy</Text>
        </VStack>
      </HStack>
    </HStack>
  );
}
