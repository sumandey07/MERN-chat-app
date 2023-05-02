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
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
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
          >
            <ReactSVG src="logo.svg" />
            Let Us Talk is a Realtime online chat application developed by Suman
            Kumar Dey If you like this app then star the repository at github
          </ModalBody>
          <ModalFooter align="center">
            <Button>Hello</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AboutModal;
