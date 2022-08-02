import React from "react";
import { useRouter } from "next/router";
import styles from "./crud.module.css";
import axios from "axios";
import domain from "../../utils/config";
import Link from "next/link";

export const getStaticProps = async () => {
  try {
    const { data } = await axios.get(`${domain}/api/crud/allItems`);
    return {
      props: {
        items: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

const AllItems = ({ items }) => {
  const router = useRouter();
  const { allItems } = items.allItems;


  const deleteItems = async (id) => {
      // console.log(id)

      const {data} = await axios.delete(`http://localhost:3000/api/crud/deleteItem/${id}`)
      router.push('/crud')

  }


  return (
    <div>
      <div onClick={() => router.push("/crud")} className={styles.back_button}>
        go back
      </div>
      <div className="">
        {items.allItems.map((item) => (
          <div key={item._id} className={styles.single_item}>
            <div className={styles.single_item_name}>{item.name}</div>

            <ul>
              <li>
                <div onClick={() => router.push(`/crud/${item._id}`)}>
                  view item details
                </div>
              </li>
              <li>
                <div onClick={() => router.push(`/crud/updateItem/${item._id}`)}>update item info</div>
              </li>
              <li>
                <div onClick={() => deleteItems(item._id)}>delete item</div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
