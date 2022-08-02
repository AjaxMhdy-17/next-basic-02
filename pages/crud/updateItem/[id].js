import React from "react";
import { useForm } from "react-hook-form";
import styles from "../crud.module.css";
import { useRouter } from "next/router";
import domain from "../../../utils/config";
import axios from "axios";

export const getServerSideProps = async (context) => {
  const { data } = await axios.get(
    `${domain}/api/crud/updateItem/${context.query.id}`
  );

  return {
    props: {
      item: data,
    },
  };
};

const UpdateItem = ({ item }) => {
  // console.log(item);
  const it = item.item;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const router = useRouter();

  let id;
  const updateHandler = (val) => {
    id = val;
  };

  const handleSubmitForm = async (data) => {
    // console.log(data);
    const resp = await axios.put(
      `${domain}/api/crud/updateItem/${id}`,
      data
    );
    router.push(`/crud/${id}`)
  };

  return (
    <div>
      <div onClick={() => router.push("/crud")} className={styles.back_button}>
        go back
      </div>
      <div className={styles.card}>
        <div className={styles.heading}>update item</div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div>
              <input
                className={styles.form_input}
                type="text"
                placeholder="Enter item Name"
                {...register("name", {
                  required: true,
                })}
                defaultValue={it.name}
              />
            </div>
            <div>
              <input
                className={styles.form_input}
                type="number"
                placeholder="Enter item Price"
                {...register("price", {
                  required: true,
                })}
                defaultValue={it.price}
              />
            </div>
            <div>
              <select
                className={styles.form_input}
                {...register("inStock", {
                  required: true,
                })}
                defaultValue={it.inStock}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div>
              <button
                onClick={() => updateHandler(it._id)}
                className={styles.btn}
              >
                update item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
