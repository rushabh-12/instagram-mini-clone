import { Avatar, Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowUser from "../hooks/useFollowUser";
import { timeAgo } from "../utils/timeAgo";

const PostHeader = ({ post, creatorProfile }) => {
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(
    post.createdBy
  );

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        {creatorProfile && (
          <Link to={`/${creatorProfile.username}`}>
            <Avatar
              src={creatorProfile.profilePicUrl}
              alt="user profile pic"
              size={"sm"}
            />
          </Link>
        )}

        <Flex fontSize={15} fontWeight={"bold"} gap={2}>
          {creatorProfile && (
            <Link to={`/${creatorProfile.username}`}>
              {creatorProfile.username}
            </Link>
          )}

          <Box color={"gray.500"}>• {timeAgo(post.createdAt)} </Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Button
          size={"xs"}
          bg={"transparent"}
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{
            color: "black",
          }}
          transition={"0.2s ease-in-out"}
          onClick={handleFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
