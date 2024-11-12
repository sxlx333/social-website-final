import { useContext, useState } from "react";
import { FeedForm } from "../../components/feed-form/FeedForm";
import { PostsContext } from "../../context/PostsContext";
import { Post } from "../../components/posts/Post";

export function Feed() {
    const { posts, loadOlderPosts } = useContext(PostsContext);
    const [hasMorePosts, setHasMorePosts] = useState(true)

    const empty = <div className="alert alert-warning">Šiuo metu nėra jokio turinio. Būk pirmas ir parašyk tokią žinutę!</div>;

    const handleLoadOlderPosts = async () => {
        const newPosts = await loadOlderPosts();

        if (newPosts.length === 0) {
            setHasMorePosts(false);
        }
    };

    return (
        <main>
            <div className="container px-4">
                <div className="row align-items-center g-lg-5">
                    <FeedForm />
                </div>
                <div className="row align-items-center g-lg-5 pt-5">
                    <div className="col-md-10 mx-auto col-lg-6 col-xl-5">
                        {
                            posts.length === 0
                                ? empty
                                : posts.map(post => <Post key={post.post_id} post={post} />)
                        }
                    </div>
                </div>
                <div className="row align-items-center g-lg-5 py-5">
                    {hasMorePosts ? (
                        <button className="btn btn-primary" onClick={handleLoadOlderPosts} type="button">
                            Rodyti daugiau...
                        </button>
                    ) : (
                        <div className="alert alert-info text-center">
                            Daugiau turinio nėra.
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}