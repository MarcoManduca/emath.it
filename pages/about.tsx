import { ReactElement } from 'react';
import LayoutPrimary from '../components/layouts/primary/LayoutPrimary';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h1>Marco Manduca</h1>
      <p>
        Mi chiamo Marco Manduca, da sempre interessato al mondo della
        matematica, dopo diversi studi in ambito scientifico, ho deciso di
        aprire un blog di divulgazione della matematica.
      </p>
      <p>
        Una sorta di enciclopedia digitale dove gli utenti (dai primissimi anni
        di studi alle scuole elementari) posso trovare risposte, curiosità,
        esercizi e tanto altro legato al mondo della Matematica.
      </p>
    </section>
  );
};

export default About;

About.getLayout = (page: ReactElement) => {
  return <LayoutPrimary>{page}</LayoutPrimary>;
};
