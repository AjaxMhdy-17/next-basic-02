import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styles from "./crud.module.css";
import domain from "../../utils/config";
import axios from "axios";

const CreateItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const route = useRouter()

  const handleSubmitForm = async (data) => {
    console.log(data);
    try {
      const resp= await axios.post(`${domain}/api/crud/createItem` , data)
      console.log(resp.data);
      route.push(`/crud`)
    } catch (error) {
      console.log(error)
      if(error){
        console.log(error.response.data.msg)
      }
    }
  };

  return (
    <div>
      <div onClick={() => route.push('/crud')} className={styles.back_button}>go back</div>
      <div className={styles.card}>
        <div className={styles.heading}>create item</div>
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
              />
            </div>
            <div>
              <select
                className={styles.form_input}
                {...register("inStock", {
                  required: true,
                })}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div>
              <button className={styles.btn}>create item</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
