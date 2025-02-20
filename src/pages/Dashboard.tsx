import { useParams } from 'react-router-dom';

const Dashboard = () => {
    const { userId } = useParams();

    if (!userId) return <div>Id not found</div>;
    
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard;