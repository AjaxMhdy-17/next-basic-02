import styles from "../styles/notFound.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            // router.go(-1)
            router.push('/')
            // return clearTimeout
        },3000)
    },[])

    const st = {
        textAlign : "center" , 
        marginTop : 20
    }
  return (
    <div style={st}>
      <div className={styles.not__found}>this is not found page</div>
      <Link href='/'>goto home page</Link>
    </div>
  );
};

export default NotFound;
