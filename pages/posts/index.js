import { useRouter } from "next/router";

export const getStaticProps = async () => {
  try {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await resp.json();
    return {
      props: {
        posts: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

const Index = ({ posts }) => {

  const router = useRouter()
  return(
    <div>
      {posts.map(post => (
        <div key={post.id} className="box" onClick={() => router.push(`/posts/${post.id}`)}>
          <div className="lime_back">{post.name}</div>
          <div>{post.email}</div>
        </div>
      ))}
    </div>
  )
};

export default Index;
