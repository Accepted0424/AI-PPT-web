import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import type { UIMessage } from "ai";

export const ChatMessage = ({ role, content }: UIMessage) => {
  const isUser = role === "user";

  return (
    <Flex
      justify={isUser ? "flex-start" : "flex-end"}
      my={2}
      px={4}
      gap={2}
      align="flex-end"
    >
      {isUser &&
          <Avatar.Root key={'solid'} variant={'solid'}>
            <Avatar.Fallback name="User" />
          </Avatar.Root>
      }
      <Box
        bg={isUser ? "gray.100" : "blue.500"}
        color={isUser ? "black" : "white"}
        px={4}
        py={2}
        maxW="70%"
        borderRadius="xl"
        borderBottomLeftRadius={isUser ? "none" : "xl"}
        borderBottomRightRadius={isUser ? "xl" : "none"}
      >
        <Text>{content}</Text>
      </Box>
      {isUser &&
          <Avatar.Root key={'solid'} variant={'solid'}>
            <Avatar.Fallback name="AI" />
          </Avatar.Root>
      }
    </Flex>
  );
};
