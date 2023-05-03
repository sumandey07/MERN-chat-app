import {
  Box,
  Button,
  Container,
  HStack,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ReactSVG } from "react-svg";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <>
      <Container maxW="xl" centercontent="true" marginBottom="30">
        <Box
          display="flex"
          flexDirection="row"
          alignSelf="center"
          p={6}
          px={32}
          pb={6}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="xl"
          bgGradient="linear(to-l, teal.100, gray.300)"
        >
          <ReactSVG src="logo.svg" />
          <Text
            fontSize="4xl"
            fontFamily="Work sans"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontWeight="extrabold"
          >
            Let Us Talk
          </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab
                as="button"
                p={2}
                color="navy"
                fontWeight="bold"
                _hover={{
                  bgGradient: "linear(to-r, teal.500, green.500)",
                }}
              >
                Login
              </Tab>
              <Tab
                as="button"
                p={2}
                color="navy"
                fontWeight="bold"
                _hover={{
                  bgGradient: "linear(to-r, teal.500, pink.500)",
                }}
              >
                Sign Up
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <VStack
          centercontent="true"
          marginBottom="30"
          position="Bottom"
          width="100%"
          p="8"
        >
          <Text textAlign="center" p="1px 0px 8px 0px" fontWeight="bold">
            Join Our Community Below
          </Text>
          <HStack centercontent="true">
            <Button colorScheme="blackAlpha" leftIcon={<FaGithub />}>
              <Link href="https://github.com/sumandey07" isExternal>
                Github
              </Link>
            </Button>
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
              <Link href="https://twitter.com/iam_sumandey" isExternal>
                Twitter
              </Link>
            </Button>
            <Button colorScheme="pink" leftIcon={<FaInstagram />}>
              <Link href="https://www.instagram.com/sumanhere_/" isExternal>
                Instagram
              </Link>
            </Button>
            <Button colorScheme="linkedin" leftIcon={<FaLinkedinIn />}>
              <Link href="https://www.linkedin.com/in/iamsumandey/" isExternal>
                Linkedin
              </Link>
            </Button>
          </HStack>
        </VStack>
      </Container>
    </>
  );
}

export default Homepage;
