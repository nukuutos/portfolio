import Chevron from './chevron/chevron';
import Piece from '../shared/piece/piece';
import Logo from './logo/logo';
import Project from './project/project';

import useOpenProject from './hooks/use-open-project';

import styles from './recent-project-section.module.scss';

const RecentProjectSection = ({ isPhone, isDesktop }) => {
  const { isProjectOpened, openProject, closeProject } = useOpenProject();

  return (
    <section className={styles.section}>
      {isProjectOpened && <Project closeModal={closeProject} isPhone={isPhone} />}

      <span className={styles.recent}>
        recent project <Chevron />
      </span>

      <h2 className={styles.heading}>Beaurel</h2>

      <div className={styles.content}>
        <Logo isDesktop={isDesktop} />

        <div className={styles.description}>
          <p className={styles.text}>
            It is a platform for beauty masters and their customers. For beauty masters, it allows
            creating a flexible timetable and services, showing customers their work. Customers can
            book appointments and review masters.{' '}
            <a
              className={styles.beaurel}
              href="http://github.com/nukuutos/beaurel-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beaurel
            </a>{' '}
            has some social network elements like messenger, favorite masters (friends), etc. It
            takes two years of work to move this project from design to production.
          </p>
          <button
            data-test="open-beaurel-project"
            onClick={openProject}
            className={styles.button}
            type="button"
          >
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
};

export default RecentProjectSection;
