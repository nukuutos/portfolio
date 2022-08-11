import { useState } from 'react';

const useOpenProject = () => {
  const [isProjectOpened, setIsProjectOpened] = useState(false);
  const openProject = () => setIsProjectOpened(true);
  const closeProject = () => setIsProjectOpened(false);

  return { isProjectOpened, openProject, closeProject };
};

export default useOpenProject;
