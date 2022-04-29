import Link from 'next/link';
import styles from './DashboardLayout.module.css';

export interface IDashboardLayout {}

const DashboardLayout: React.FC<IDashboardLayout> = () => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default DashboardLayout;