import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { UserData } from '../types/types';
import '../styles/components/scoreGraph.scss';


type ScoreGraphProps = {
    userData: UserData
}

const ScoreGraph = ({ userData }: ScoreGraphProps) => {

    const score = userData.todayScore || userData.score || 0;
    const scoreValue = score * 100;
    const data = [
        {
            name: 'background',
            value: 100,
            fill: '#FFFFFF'
        },
        {
            name: 'score',
            value: scoreValue,
            fill: '#FF0000'
        }
    ];

    return (
        <div className='score-graph'>
            <h2 className='score-graph__title'>
                Score
            </h2>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="80%"
                    barSize={10}
                    data={data}
                    startAngle={-270}
                    endAngle={90}
                >
                    <circle
                        cx="50%"
                        cy="50%"
                        r="32.5%"
                        fill="#FFFFFF"
                    />
                    <RadialBar
                        dataKey="value"
                        cornerRadius={10}
                        background={false}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className='score-graph__text'>
                <p className='score-graph__text__title'>
                    {scoreValue}%
                </p>
                <p className='score-graph__text__subtitle'>
                    de votre<br/>objectif
                </p>
            </div>
        </div>
    );
}

export default ScoreGraph;