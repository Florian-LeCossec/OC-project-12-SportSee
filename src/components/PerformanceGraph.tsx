import { UserPerformance } from '../types/types'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'

type PerformanceGraphProps = {
    performanceData: UserPerformance
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

    return (
        <div>
            <RadarChart outerRadius={90} width={730} height={250} data={orderedData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </div>
    )
}

export default PerformanceGraph