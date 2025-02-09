import { motion } from 'framer-motion';
import './projectsPage.css';

const pageVariants = {
  initial: { x: '100%', opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
};

const ProjectsPage = () => {
  return (
    <motion.div
      className="page projectsPage"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <h1>My Projects</h1>
      <p>Here are some of the projects I have worked on.</p>
    </motion.div>
  );
};

export default ProjectsPage;