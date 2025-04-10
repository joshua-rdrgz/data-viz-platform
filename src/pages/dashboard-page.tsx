import { BestScenarioResults } from '@/features/dashboard/best-scenario-results';
import { DashboardHeader } from '@/features/dashboard/dashboard-header';
import { DashboardGraph } from '@/features/dashboard/dashboard-graph';
import { DashboardKpis } from '@/features/dashboard/dashboard-kpis';

export const DashboardPage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <DashboardHeader />
      <BestScenarioResults />
      <div className='grid grid-cols-[60%_40%] gap-6'>
        <div className='flex flex-col h-full'>
          <DashboardGraph />
        </div>
        <div className='flex flex-col h-full'>
          <DashboardKpis />
        </div>
      </div>
    </div>
  );
};
