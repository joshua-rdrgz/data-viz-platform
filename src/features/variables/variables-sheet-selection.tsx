import { Badge } from '@/components/ui/badge';
import { PlusIcon, CheckIcon, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useVariablesStore } from '@/stores/use-variables-store';
import { useMemo, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InfoIcon } from 'lucide-react';

export const VariablesSheetSelection = () => {
  const { variables, toggleVariable } = useVariablesStore();
  const [hoveredVariable, setHoveredVariable] = useState<string | null>(null);
  const hoverTimerRef = useRef<number | null>(null);

  /**
   * Groups variables by their categories and formats them for display
   * @returns An array of category objects, each containing:
   *   - title: The category name
   *   - variables: Array of variables belonging to that category
   */
  const categories = useMemo(() => {
    // Group variables by their category using reduce
    const groupedVariables = variables.reduce(
      (acc, variable) => {
        if (!acc[variable.category]) {
          acc[variable.category] = [];
        }
        acc[variable.category].push(variable);
        return acc;
      },
      {} as Record<string, typeof variables>,
    );

    // Transform the grouped object into an array of category objects
    return Object.entries(groupedVariables).map(([title, vars]) => ({
      title,
      variables: vars,
    }));
  }, [variables]);

  const handleMouseEnter = (variable: (typeof variables)[0]) => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }

    hoverTimerRef.current = window.setTimeout(() => {
      setHoveredVariable(variable.id);
    }, 1500);
  };

  const handleMouseLeave = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    setHoveredVariable(null);
  };

  // Get the hovered variable object
  const hoveredVariableObj = variables.find((v) => v.id === hoveredVariable);

  return (
    <Card className={`relative bg-[##161618] ${hoveredVariable ? 'pb-0' : ''}`}>
      <CardContent className='flex flex-col gap-6'>
        {categories.map((category, index) => (
          <div key={index} className='space-y-3'>
            <h3 className='text-sm font-medium text-muted-foreground'>
              {category.title}
            </h3>
            <div className='flex flex-wrap gap-2'>
              {category.variables.map((variable) => (
                <Badge
                  key={variable.id}
                  variant={variable.selected ? 'default' : 'outline'}
                  className='cursor-pointer'
                  onClick={() => toggleVariable(variable.id)}
                  onMouseEnter={() => handleMouseEnter(variable)}
                  onMouseLeave={handleMouseLeave}
                >
                  {variable.name}
                  <Sparkles className='h-3 w-3' />
                  {variable.selected ? (
                    <CheckIcon className='h-4 w-4' />
                  ) : (
                    <PlusIcon className='h-4 w-4' />
                  )}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>

      <AnimatePresence>
        {hoveredVariable && hoveredVariableObj && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className='border-t bg-card rounded-b-xl'
          >
            <div className='p-6 space-y-2'>
              <div className='flex items-center gap-2'>
                <h2 className='text-lg font-medium'>
                  {hoveredVariableObj.name}
                </h2>
                <InfoIcon className='h-4 w-4 text-muted-foreground' />
              </div>
              <p className='text-muted-foreground'>
                {hoveredVariableObj.contextDescription}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
