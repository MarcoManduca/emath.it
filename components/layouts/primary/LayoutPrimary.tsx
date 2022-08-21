import Head from 'next/head';
import styles from './LayoutPrimary.module.css';

export interface ILayoutPrimary {
  children: any;
}

const LayoutPrimary: React.FC<ILayoutPrimary> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="e-math.it corporate" />
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default LayoutPrimary;
