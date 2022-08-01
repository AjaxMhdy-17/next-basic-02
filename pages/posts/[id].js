export const getServerSideProps = async (context) => {
  try {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/users/${context.query.id}`
    );
    const data = await resp.json();
    return {
      props: {
        post: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

const SinglePost = ({ post }) => {

  return (
    <div className="card">
      <div>{post.name}</div>
      <div>{post.email}</div>
      <div>{post.address.city}</div>
    </div>
  );
};

export default SinglePost;
