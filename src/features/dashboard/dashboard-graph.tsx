import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import { CustomTooltipCursor } from '@/components/ui/custom-tooltip-cursor';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { month: 'Apr', value: 30 },
  { month: 'May', value: 45 },
  { month: 'Jun', value: 40 },
  { month: 'Jul', value: 65 },
  { month: 'Aug', value: 50 },
  { month: 'Sep', value: 35 },
  { month: 'Oct', value: 45 },
];

const chartConfig = {
  area: {
    color: 'var(--scenario-foreground)',
  },
};

export const DashboardGraph = () => {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-3xl font-bold'>Graphs</h2>
      </div>
      <Card className='flex-grow'>
        <CardHeader className='flex flex-row items-center justify-end'>
          <Select defaultValue='unsatisfied-demand'>
            <SelectTrigger className='w-[200px]'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='unsatisfied-demand'>
                Unsatisfied Demand %
              </SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className='h-[300px] p-4'>
            <ChartContainer className='h-full w-full' config={chartConfig}>
              <AreaChart
                data={data}
                width={100}
                height={100}
                style={{ width: '100%', height: '100%' }}
              >
                <defs>
                  <pattern
                    id='verticalLines'
                    width='24'
                    height='24'
                    patternUnits='userSpaceOnUse'
                  >
                    <path
                      d='M12 0 V24'
                      stroke='rgb(220, 255, 127)'
                      strokeWidth='2'
                      strokeOpacity='0.2'
                    />
                  </pattern>
                  <filter
                    id='glow'
                    x='-100%'
                    y='-100%'
                    width='300%'
                    height='300%'
                  >
                    <feGaussianBlur stdDeviation='5' result='blur1' />
                    <feColorMatrix
                      in='blur1'
                      type='matrix'
                      values='0 0 0 0 0.863   
                              0 0 0 0 1   
                              0 0 0 0 0.498  
                              0 0 0 0.3 0'
                      result='coloredBlur'
                    />
                    <feMerge>
                      <feMergeNode in='coloredBlur' />
                      <feMergeNode in='SourceGraphic' />
                    </feMerge>
                  </filter>
                </defs>
                <CartesianGrid
                  vertical={false}
                  stroke='#525252'
                  strokeDasharray='4'
                />
                <XAxis
                  dataKey='month'
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#959595' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#959595' }}
                  tickFormatter={(value) => `${value}K`}
                />
                <Tooltip
                  cursor={<CustomTooltipCursor />}
                  content={({ active, payload }) => {
                    if (!active || !payload?.length) return null;
                    return (
                      <div className='rounded-lg border border-border bg-card p-4 shadow-lg space-y-1.5'>
                        <p className='text-lg font-semibold'>
                          ${payload[0].value}.60K
                        </p>
                        <p className='text-muted-foreground text-sm'>
                          4.6% above target
                        </p>
                      </div>
                    );
                  }}
                  animationDuration={200}
                  animationEasing='ease-out'
                />
                <Area
                  type='linear'
                  dataKey='value'
                  stroke='rgb(220, 255, 127)'
                  strokeWidth={2}
                  fill='url(#verticalLines)'
                  dot={false}
                  activeDot={{
                    r: 6,
                    fill: 'black',
                    stroke: 'rgb(220, 255, 127)',
                    strokeWidth: 2,
                    filter: 'url(#glow)',
                  }}
                  isAnimationActive={false}
                />
              </AreaChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
