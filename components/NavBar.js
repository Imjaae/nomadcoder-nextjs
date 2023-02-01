import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <p>
        <Link
          href="/"
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }}`}
        >
          Home
        </Link>
      </p>
      <p>
        <Link
          href="/about"
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : "",
          ]}
        >
          About
        </Link>
      </p>
    </nav>
  );
}
