import { UserAverageSessions } from '../types/types'
import { Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

type averageSessionProps = {
    averageSessionsData: UserAverageSessions
}

const AverageSessionsGraph = ({averageSessionsData}: averageSessionProps) => {
    return (
        <div>
            <LineChart 
                width={250} 
                height={250} 
                data={averageSessionsData.sessions}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
            <text
                x={20}
                y={20}
                fontSize={14}
                fontWeight={500}
                fill="#F0F"
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
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis hide={true} domain={["dataMin - 20", "dataMax + 40"]} />
            <Tooltip />
            <Line type="natural" dataKey="sessionLength" stroke="#82ca9d" />
            </LineChart>
        </div>
    )
}

export default AverageSessionsGraph;