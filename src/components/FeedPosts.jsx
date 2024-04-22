import { Container, Text } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../hooks/useGetFeedPosts";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post} />)}

      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"md"} color={"red.400"}>
            Damn!! Looks like you don&apos;t have any friends.
          </Text>
          <Text color={"red.400"}>
            Stop what are you doing and go make some!!
          </Text>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
