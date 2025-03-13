import { UserPerformance } from '../types/types';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Text, PolarRadiusAxis } from 'recharts';
import '../styles/components/PerformanceGraph.scss';


type PerformanceGraphProps = {
    performanceData: UserPerformance
}

type TickProps = {
    payload: { value: string };
    x: number;
    y: number;
    cx: number;
    cy: number;
}

const PerformanceGraph = ({performanceData}: PerformanceGraphProps) => {
    const translation: {[key: string]: string} = {
        "intensity": "Intensité",
        "speed": "Vitesse",
        "strength": "Force",
        "endurance": "Endurance",
        "energy": "Energie",
        "cardio": "Cardio",
    };

    const transformedData = performanceData.data.map(item => ({
        ...item,
        kind: translation[performanceData.kind[item.kind]]
    }));

    // Utiliser l'objet de translation pour déterminer l'ordre
    const orderedData = transformedData.sort((a, b) => {
        return Object.values(translation).indexOf(a.kind) - Object.values(translation).indexOf(b.kind);
    });
    const renderPolarAngleAxis = ({ payload, x, y, cx, cy, ...rest }: TickProps) => {

		return (
			<Text
				{...rest}
				verticalAnchor="middle"
				y={y + (y - cy) / 10}
				x={x + (x - cx) / 100}
				fill="#FFFFFF"
				fontSize="12px"
			>
				{payload.value}
			</Text>
		)
	}
    return (
        <div className="performance-graph">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={80} data={orderedData}>
                    <PolarGrid 
                        radialLines={false}
                        stroke="#FFFFFF"
                    />
                    <PolarAngleAxis 
                        dataKey="kind" 
                        tick={renderPolarAngleAxis}
                    />
                    <PolarRadiusAxis
						tickCount={6}
						tick={false}
						axisLine={false}
					/>
                    <Radar 
                        dataKey="value" 
                        stroke="#FF0101" 
                        fill="#FF0101" 
                        fillOpacity={0.6} 
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PerformanceGraph