import Link from "next/link";
import styles from "./crud.module.css";

const Index = () => {
  return (
    <div>
      <div className="box">
        <Link href={`/crud/allItems`}>
          <div className="user__name">All Items</div>
        </Link>
      </div>
      <div className="box">
        <Link href={`/crud/createItem`}>
          <div className="user__name"> Create Item</div>
        </Link>
      </div>
    </div>
  );
};

export default Index;
