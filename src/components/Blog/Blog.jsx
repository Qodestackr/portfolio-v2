import { useParams } from "react-router-dom";
// import { useGetPost } from "../../hooks/useRequest";

// TODO: Add GraphQL from Hashnode API

export default function Blog({ article }) {
    const { id } = useParams();
    // const { data, error, isLoading, isSuccess } = useGetPost(id);

    return (
        <article className="Article">
            <h1>Articles</h1>
            {/* {console.log(data)} */}
            {/* <Link to={`/single-post/${_id}`}>Read more &rarr;</Link> */}
        </article>
    );
}