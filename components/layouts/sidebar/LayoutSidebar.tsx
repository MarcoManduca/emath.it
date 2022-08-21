import Link from 'next/link';
import styles from './LayoutSidebar.module.css';

export interface ILayoutSidebar {}

const LayoutSidebar: React.FC<ILayoutSidebar> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About us</a>
      </Link>
    </nav>
  );
};

export default LayoutSidebar;
