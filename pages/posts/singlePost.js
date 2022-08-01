
export const getStaticProps = async (context) => {
  const id = context.params.id 
  let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  let data = await res.json();

  return({
    props : {
      user : data 
    }
  })
}

const singlePost = ({user}) => {
  console.log(user);
  return (
    <div>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio
        architecto quibusdam, repudiandae id inventore corrupti autem obcaecati
        fugit minus quos, optio necessitatibus. Inventore voluptates ea laborum
        cupiditate, eligendi facilis id quasi est dolore! Deserunt, doloribus
        sed atque recusandae ad nostrum maxime mollitia aspernatur repellendus
        quod quas, alias quaerat iste?
      </p>
    </div>
  );
};

export default singlePost;
