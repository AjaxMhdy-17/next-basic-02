import styles from "./users.module.css";

export const getServerSideProps = async (context) => {

  const resp = await fetch(`http://localhost:3000/api/users/${context.query.id}`);
  const data = await resp.json();
  return {
    props: {
      user: data,
    },
  };
};

const SingleUser = ({user}) => {

    // console.log(user.user.name);
    const {name , id} = user.user 
  return (
    <div>
        <div>
            {name}
        </div>
        <div>
            {id}
        </div>
    </div>
  )
};

export default SingleUser;
