import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { UserData } from '../types/types';

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
            fill: '#FBFBFB'
        },
        {
            name: 'score',
            value: scoreValue,
            fill: '#FF0000'
        }
    ];

    return (
        <div style={{ width: 258, height: 263, backgroundColor: '#FBFBFB', borderRadius: '5px', position: 'relative' }}>
            <h2 style={{ 
                position: 'absolute', 
                top: '24px', 
                left: '30px',
                fontSize: '15px',
                fontWeight: '500'
            }}>
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
                    startAngle={90}
                    endAngle={-270}
                >
                    <RadialBar
                        dataKey="value"
                        cornerRadius={10}
                        background={false}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
            }}>
                <p style={{ 
                    fontSize: '26px',
                    fontWeight: 'bold',
                    margin: '0'
                }}>
                    {scoreValue}%
                </p>
                <p style={{ 
                    fontSize: '16px',
                    color: '#74798C',
                    margin: '0'
                }}>
                    de votre<br/>objectif
                </p>
            </div>
        </div>
    );
}

export default ScoreGraph;