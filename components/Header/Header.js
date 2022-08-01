import Image from "next/image";
import Link from "next/link";

import styles from './header.module.css'

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/" >
          <a>
          <Image src="/logo.png" height={75} width={75} alt="logo_image"/>
          </a>
          {/* <img src="/logo.png" className={styles.image} alt="logo" /> */}
        </Link>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/users">Users</Link>
      <Link href="/players">Players</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
};

export default Header;
