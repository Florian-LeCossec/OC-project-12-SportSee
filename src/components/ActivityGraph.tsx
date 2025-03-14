import { UserActivity } from "../types/types";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, TooltipProps } from "recharts";
import '../styles/components/UserActivityGraph.scss';

type activityProps = {
    activityData: UserActivity,
}

const ActivityGraph = ({activityData}: activityProps) => {

    if (!activityData || !activityData.sessions || activityData.sessions.length === 0) {
        return <span>Aucune donnée d&apos;activité disponible</span>;
    }

    const formattedData = activityData.sessions.map((session, index) => ({
        ...session,
        index: index + 1
    }));

    const CustomToolTip = ({ active, payload }: TooltipProps<number, string>) => {
        if (active && payload && payload.length) {
            return (
                <div className="tooltip">
                    <p>{payload[0].value + 'kg'}</p>
                    <p>{payload[1].value + 'Kcal'}</p>
                </div>
            )
        }
        return null
    }

    return (
        <div className="barChartWrapper">
            <h3 className="barChartWrapper__title">Activité quotidienne</h3>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <BarChart 
                    data={formattedData}
                    barGap={8}
                    margin={{
                        top: 100,
                        right: 40,
                        left: 40,
                        bottom: 40,
                    }}
                >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="index" axisLine={true} tickLine={false} tick={{ fontSize: '14px', fontWeight: '500' }} dy={15}/>
                    <YAxis yAxisId="kilogram" orientation="right" tickCount={3} axisLine={false} tickLine={false} tickMargin={30} type="number" tick={{ color: '9B9EAC', fontSize: '14px', fontWeight: '500' }} domain={["dataMin - 2", "dataMax + 1"]} />
                    <YAxis yAxisId="calories" hide={true} />
                    <Tooltip content={<CustomToolTip />} cursor={{ fill: "rgba(0, 0, 0, 0.1)"}} />
                    <Legend verticalAlign="top" align='right' iconSize={10} wrapperStyle={{ top: "2rem", right: 0 }}/>
                    <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={8} legendType="circle" name="Poids (Kg)" unit="Kg" radius={[20, 20, 0, 0]} />
                    <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={8} legendType="circle" name="Calories brûlées (kCal)" unit="Kcal" radius={[20, 20, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ActivityGraph;