import Link from 'next/link';
import { ReactElement } from 'react';
import MathematiciansCard from '../components/cards/mathematicians/MathematiciansCard';
import { mockMathematiciansCardProps } from '../components/cards/mathematicians/MathematiciansCard.mocks';
import LayoutPrimary from '../components/layouts/primary/LayoutPrimary';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

/* https://youtu.be/46V478kPL3A?list=PLDXgla_aKDYKuwP8KTbLWXlKpzC0zE5Yu&t=219 */

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to{' '}
        <Link href="/">
          <a>e-Math</a>
        </Link>
      </h1>
      <div className={styles.containermathematicians}>
        <MathematiciansCard {...mockMathematiciansCardProps.base} />
        <MathematiciansCard {...mockMathematiciansCardProps.base} />
        <MathematiciansCard {...mockMathematiciansCardProps.base} />
        <MathematiciansCard {...mockMathematiciansCardProps.base} />
        <MathematiciansCard {...mockMathematiciansCardProps.base} />
        <MathematiciansCard {...mockMathematiciansCardProps.base} />
      </div>
    </section>
  );
};

export default Home;

Home.getLayout = (page: ReactElement) => {
  return <LayoutPrimary>{page}</LayoutPrimary>;
};
