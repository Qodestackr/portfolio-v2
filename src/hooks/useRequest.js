import { useQuery } from "react-query";
import { GraphQLClient, gql } from "graphql-request";

const API_URL = `https://api.hashnode.com`;

const graphQLClient = new GraphQLClient(API_URL
    /*, {
    headers: {
        Authorization: `Bearer ${process.env.API_KEY}`
    }
}*/);

export function useGetPosts() {
    return useQuery("get-posts", async () => {
        const { getPostList } = await graphQLClient.request(gql`
      query {
        user(username: "Qodestackr") {
            publication {
              posts(page: 0) {
               slug
               title
               brief
               coverImage
              }
            }
          }
      }
    `);
        return getPostList;
    });
}

export function useGetPost(postId) {
    return useQuery(["get-post", postId], async () => {
        const { getPost } = await graphQLClient.request(
            gql`
        query getPost($postId: ID!) {
          getPost(_id: $postId) {
            _id
            content
            description
            title
          }
        }
      `,
            { postId }
        );
        return getPost;
    });
}