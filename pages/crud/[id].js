import { useRouter } from "next/router";
import styles from "./crud.module.css";
import axios from "axios";

export const getServerSideProps = async (context) => {
  const resp = await axios.get(
    `http://localhost:3000/api/crud/${context.query.id}`
  );
  const data = resp.data;

  return {
    props: {
      item: data,
    },
  };
};

const SingleItem = ({ item }) => {
  const router = useRouter();
  return (
    <div>
      <div>
        <div
          onClick={() => router.push("/crud/allItems")}
          className={styles.back_button}
        >
          go back
        </div>
        <hr />
        <div className={styles.item_detail_box}>
          <div>{item.item.name}</div>
          <div>{item.item.price}</div>
          <div>{item.item.inStock === true ? "inStock" : "outOfStock"}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
