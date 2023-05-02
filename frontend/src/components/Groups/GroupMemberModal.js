import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  IconButton,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import { ChatState } from "../../Context/ChatProvider";
import { MdSupervisorAccount } from "react-icons/md";
import UserListItem from "../userAvatar/UserListItem";

const GroupMemberModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { selectedChat } = ChatState();

  return (
    <>
      <IconButton icon={<MdSupervisorAccount />} onClick={onOpen} />

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize="35px"
            fontFamily="Work sans"
            display="flex"
            justifyContent="center"
          >
            {selectedChat.chatName.toUpperCase()}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" alignItems="center">
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={3}
              align="stretch"
            >
              <Box w="100%" display="flex" flexWrap="wrap" pb={3}>
                {selectedChat.users.map((u) => (
                  <UserListItem
                    key={u._id}
                    user={u}
                    admin={selectedChat.groupAdmin}
                  />
                ))}
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GroupMemberModal;
