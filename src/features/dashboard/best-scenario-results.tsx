import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, MoreHorizontal, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const contentVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
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

export const BestScenarioResults = () => {
  const [isSectionOpen, setIsSectionOpen] = useState(true);

  return (
    <Collapsible open={isSectionOpen} onOpenChange={setIsSectionOpen}>
      <div className='space-y-2'>
        <CollapsibleTrigger asChild>
          <motion.div
            className='flex items-center justify-between cursor-pointer'
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className='flex items-center gap-3'>
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <Sparkles className='text-scenario-icon text-xl' />
              </motion.div>
              <h2 className='text-xl font-medium text-scenario'>
                Best Scenario Results
              </h2>
            </div>
            <motion.div
              className='border border-scenario rounded-full px-3 py-1.5'
              animate={{ rotate: isSectionOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className='h-5 w-5 text-scenario' />
            </motion.div>
          </motion.div>
        </CollapsibleTrigger>
        <AnimatePresence>
          {isSectionOpen && (
            <motion.div
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={contentVariants}
            >
              <CollapsibleContent>
                <div className='space-y-2 mt-4'>
                  <motion.div
                    className='rounded-lg border border-scenario-border bg-scenario-background p-4 text-sm text-scenario-foreground'
                    variants={cardVariants}
                    initial='hidden'
                    animate='visible'
                    whileHover='hover'
                  >
                    <div className='flex items-center justify-between'>
                      <span>
                        The best found configuration based on profit is
                        characterized by 11 zones (max) with charging stations
                        and 48 total number of poles.
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button variant='ghost' size='icon' className='h-8 w-8'>
                          <MoreHorizontal className='h-4 w-4' />
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.div
                    className='rounded-lg border border-scenario-border bg-scenario-background p-4 text-sm text-scenario-foreground'
                    variants={cardVariants}
                    initial='hidden'
                    animate='visible'
                    whileHover='hover'
                  >
                    <div className='flex items-center justify-between'>
                      <span>
                        The best found configuration based on satisfied demand
                        is characterized by 11 zones (max) with charging
                        stations and 48 total number of poles.
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button variant='ghost' size='icon' className='h-8 w-8'>
                          <MoreHorizontal className='h-4 w-4' />
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </CollapsibleContent>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Collapsible>
  );
};
