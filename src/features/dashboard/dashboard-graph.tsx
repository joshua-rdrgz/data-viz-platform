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
  { month: 'Apr', value: 35 },
  { month: 'May', value: 20 },
  { month: 'Jun', value: 45 },
  { month: 'Jul', value: 89.6 },
  { month: 'Aug', value: 60 },
  { month: 'Sep', value: 35 },
  { month: 'Oct', value: 58 },
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
          <div className='h-[400px] p-4'>
            <ChartContainer className='h-full w-full' config={chartConfig}>
              <AreaChart
                data={data}
                width={100}
                height={100}
                style={{ width: '100%', height: '100%' }}
                margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
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
                  axisLine={{ stroke: '#525252' }}
                  tickLine={false}
                  tick={{
                    fill: '#ffffff',
                    fontSize: 14,
                    style: { fill: '#ffffff' },
                  }}
                  dy={10}
                />
                <YAxis
                  axisLine={{ stroke: '#525252' }}
                  tickLine={false}
                  tick={{
                    fill: '#ffffff',
                    fontSize: 14,
                    style: { fill: '#ffffff' },
                  }}
                  tickFormatter={(value) => `$${value}K`}
                  dx={-10}
                  domain={[0, 100]}
                  ticks={[20, 40, 60, 80, 100]}
                />
                <Tooltip
                  cursor={<CustomTooltipCursor height={320} />}
                  content={({ active, payload }) => {
                    if (!active || !payload?.length) return null;
                    return (
                      <div className='rounded-lg border border-border bg-card p-4 shadow-lg space-y-1.5'>
                        <p className='text-lg font-semibold'>
                          ${payload[0].value}K
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
