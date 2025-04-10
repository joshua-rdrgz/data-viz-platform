import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { useVariablesStore } from '@/stores/use-variables-store';
import { motion } from 'framer-motion';

const containerVariants = {
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
};

export const DashboardKpis = () => {
  const variables = useVariablesStore((state) => state.variables);
  const selectedVariables = variables.filter((variable) => variable.selected);

  return (
    <motion.div
      className='flex flex-col h-full'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div
        className='flex items-center justify-between mb-6'
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className='text-3xl font-bold'>Key Performance Indicators</h2>
        <motion.div variants={buttonVariants} whileHover='hover' whileTap='tap'>
          <Button
            variant='outline'
            size='sm'
            className='flex items-center gap-1 dark:bg-main-background dark:border-sidebar-border'
          >
            Variables
            <Plus className='h-4 w-4' />
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        className='grid grid-cols-2 gap-6 flex-grow'
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {selectedVariables.map((variable, index) => (
          <motion.div
            key={variable.id}
            variants={cardVariants}
            initial='hidden'
            animate='visible'
            whileHover='hover'
            custom={index}
          >
            <Card className='p-6 h-full'>
              <CardContent className='p-0 h-full flex flex-col'>
                <motion.div
                  className='mb-4'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className='text-lg font-medium text-white break-words'>
                    {variable.name}
                  </div>
                  <div className='text-xs text-gray-400 mt-1'>
                    {variable.description}
                  </div>
                </motion.div>
                <motion.div
                  className='text-2xl font-semibold self-end mt-auto'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {variable.value}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
