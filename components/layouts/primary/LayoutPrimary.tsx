import Head from 'next/head';
import styles from './LayoutPrimary.module.css';

export interface ILayoutPrimary {
  children: any;
}

const LayoutPrimary: React.FC<ILayoutPrimary> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default LayoutPrimary;
