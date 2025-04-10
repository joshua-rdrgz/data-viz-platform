import { BestScenarioResults } from '@/features/dashboard/best-scenario-results';
import { DashboardHeader } from '@/features/dashboard/dashboard-header';
import { DashboardGraph } from '@/features/dashboard/dashboard-graph';
import { DashboardKpis } from '@/features/dashboard/dashboard-kpis';

export const DashboardPage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <DashboardHeader />
      <BestScenarioResults />
      <div className='flex flex-col xl:flex-row gap-6 w-full'>
        <div className='w-full xl:w-1/2'>
          <DashboardGraph />
        </div>
        <div className='w-full xl:w-1/2'>
          <DashboardKpis />
        </div>
      </div>
    </div>
  );
};
