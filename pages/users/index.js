import { useRouter } from "next/router";
import styles from "./users.module.css";

export const getStaticProps = async () => {
  const resp = await fetch("http://localhost:3000/api/users");
  const data = await resp.json();

  return {
    props: {
      users: data,
    },
  };
};

const Users = ({ users }) => {
  const router = useRouter();

  // console.log(users.users);

  return (
    <>
      {users.users.map((user, idx) => (
          <div key={idx} className="box">
            <div
              onClick={() => router.push(`/users/${user.id}`)}
              className="user__name"
            >
              {user.name}
            </div>
          </div>
      ))}
    </>
  );
};

export default Users;
