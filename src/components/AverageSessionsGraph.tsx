import { UserAverageSessions } from '../types/types'
import { Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer, TooltipProps } from "recharts";
import '../styles/components/AverageSessionsGraph.scss';

type averageSessionProps = {
    averageSessionsData: UserAverageSessions
}

type CursorPoint ={
    x: number;
    y: number;
}

const formatDay = (day: number): string => {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return days[day - 1];
}

const AverageSessionsGraph = ({averageSessionsData}: averageSessionProps) => {

    console.log(averageSessionsData);
    

    const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    }

    const CustomCursor = ({ points }: { points: CursorPoint[] }) => {
        const { x } = points[0];
        return (
            <rect
                x={x}
                y={0}
                width="100%"
                height="100%"
                fill="rgba(0, 0, 0, 0.1)"
            />
        );
    };

    return (
        <div className="average-sessions-graph">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                    data={averageSessionsData.sessions}
                    margin={{ top: 50, right: 0, left: 0, bottom: 15 }}
                >
                    <text
                        x={20}
                        y={20}
                        fontSize={14}
                        fontWeight={500}
                        fill="#FFFFFF"
                        opacity={0.5}
                        textAnchor="start"
                        dominantBaseline="central"
                    >
                        <tspan x={30} y={40} fontSize="15">
                            Durée moyenne des
                        </tspan>
                        <tspan x={30} y={65} fontSize="15">
                            sessions
                        </tspan>
                    </text>
                    <XAxis 
                        dataKey="day" 
                        axisLine={false} 
                        tickLine={false}
                        tickFormatter={formatDay}
                        tick={{
                            fill: 'rgba(255,255,255,0.6)',
                            fontSize: '12px',
                            dy: 10
                        }}
                        scale="point"
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis 
                        hide={true} 
                        domain={["dataMin - 10", "dataMax + 10"]} 
                    />
                    <Tooltip 
                        content={<CustomTooltip />} 
                        cursor={<CustomCursor points={[]} />}
                    />
                    <Line 
                        type="natural" 
                        dataKey="sessionLength" 
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{
                            stroke: '#FFF',
                            strokeWidth: 4,
                            r: 2,
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AverageSessionsGraph;