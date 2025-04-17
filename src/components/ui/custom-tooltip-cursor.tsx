interface CustomCursorProps {
  points?: Array<{ x: number; y: number }>;
  width?: number;
  height?: number;
  stroke?: string;
  payload?: Array<{ value: number; payload: { month: string; value: number } }>;
  payloadIndex?: number;
}

export const CustomTooltipCursor = ({ points, height }: CustomCursorProps) => {
  if (!points?.[0]) return null;

  return (
    <line
      x1={points[0].x}
      x2={points[0].x}
      y1={0}
      y2={(height || 0) + 20}
      stroke='rgb(220, 255, 127)'
      strokeWidth={2}
      strokeDasharray='4'
      style={{ zIndex: 10 }}
    />
  );
};
