import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  ModalFooter,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import { MdInfoOutline } from "react-icons/md";
import { ReactSVG } from "react-svg";

const AboutModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          display={{ base: "flex" }}
          icon={<MdInfoOutline />}
          onClick={onOpen}
        />
      )}
      <Modal onClose={onClose} isOpen={isOpen} isCentered w="100%">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize="35px"
            fontFamily="Work sans"
            display="flex"
            justifyContent="center"
          >
            About
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="row"
            alignItems="center"
            fontSize="lg"
            pb={10}
            px={10}
          >
            <ReactSVG src="logo.svg" />
            <Text p={5}>
              Let Us Talk is a Realtime Online Chat Application developed by
              SUMAN KUMAR DEY. If you LIKE this App then STAR the repository at
              Github
            </Text>
          </ModalBody>
          <ModalFooter px={24}>
            <Button colorScheme="whatsapp" size="md" variant="outline">
              <Link href="https://github.com/sumandey07" isExternal>
                Source Code Available at Github
              </Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AboutModal;
