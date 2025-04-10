import { BestScenarioResults } from '@/features/dashboard/best-scenario-results';
import { DashboardHeader } from '@/features/dashboard/dashboard-header';
import { DashboardGraph } from '@/features/dashboard/dashboard-graph';
import { DashboardKpis } from '@/features/dashboard/dashboard-kpis';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const DashboardPage = () => {
  return (
    <motion.div
      className='flex flex-col gap-12'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div variants={itemVariants}>
        <DashboardHeader />
      </motion.div>
      <motion.div variants={itemVariants}>
        <BestScenarioResults />
      </motion.div>
      <motion.div
        className='flex flex-col xl:flex-row gap-6 w-full'
        variants={itemVariants}
      >
        <div className='w-full xl:w-1/2'>
          <DashboardGraph />
        </div>
        <div className='w-full xl:w-1/2'>
          <DashboardKpis />
        </div>
      </motion.div>
    </motion.div>
  );
};
