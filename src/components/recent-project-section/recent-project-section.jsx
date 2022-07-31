import React from 'react';
import Chevron from './chevron/chevron';
import Piece from '../shared/piece/piece';

import styles from './recent-project-section.module.scss';

const RecentProjectSection = () => (
  <section className={styles.section}>
    <span className={styles.recent}>
      recent project <Chevron />
    </span>

    <h2 className={styles.heading}>Beaurel</h2>

    <div className={styles.content}>
      <div className={styles.logo}>
        <span>Beau</span>
      </div>

      <div className={styles.description}>
        <p className={styles.text}>
          It is a platform for beauty-masters and their customers. For beauty-masters it allows to
          create a flexible timetable and services, show to customer their works. Customers can book
          an appointments and review masters.{' '}
          <a
            className={styles.beaurel}
            href="http://beaurel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Beaurel
          </a>{' '}
          has some elements of social network like messenger, favorite masters (friends), etc. It
          takes two years of work to move this project from design to production. Unfortunately it
          can&apos;t be used in commercial.
        </p>
        <button className={styles.button} type="button">
          More on this project
        </button>
      </div>

      <Piece className={styles['piece-1']} />
      <Piece className={styles['piece-2']} />
      <Piece className={styles['piece-3']} />
      <Piece className={styles['piece-4']} />
    </div>
  </section>
);

export default RecentProjectSection;
