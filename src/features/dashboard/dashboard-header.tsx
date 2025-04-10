import { Button } from '@/components/ui/button';
import { VariablesSheet } from '@/components/variables-sheet';
import { Download, RefreshCcw, RotateCcw, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const headerVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const DashboardHeader = () => {
  return (
    <div className='flex flex-wrap gap-7 items-center justify-between pt-4'>
      <motion.div
        className='flex items-center gap-3'
        variants={headerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Zap className='h-8 w-8' />
        </motion.div>
        <h1 className='text-4xl font-semibold'>Charging Station</h1>
      </motion.div>
      <motion.div
        className='flex items-center gap-2'
        variants={headerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div variants={buttonVariants}>
          <Button variant='outline' size='sm'>
            <RefreshCcw className='h-4 w-4' />
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants}>
          <VariablesSheet>
            <Button variant='outline' size='sm'>
              <RotateCcw className='h-4 w-4' />
              Edit Variables
            </Button>
          </VariablesSheet>
        </motion.div>
        <motion.div variants={buttonVariants}>
          <Button variant='outline' size='sm'>
            <Download className='h-4 w-4' />
            Export
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};
