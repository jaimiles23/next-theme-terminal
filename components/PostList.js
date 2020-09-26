import PostHead from "@components/PostHead";

export default function PostList({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostHead post={post} />
      ))}
    </div>
  );
}