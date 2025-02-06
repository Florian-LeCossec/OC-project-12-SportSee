import './App.css'
import { getUserPerformance, getUserActivity, getUserAverageSessions, getUserInfo } from './api/api';
import { useEffect, useRef } from 'react';

function App() {
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current) {
      const performance = async () => {
        try {
          const performance = await getUserPerformance(18);
          const activity = await getUserActivity(18);
          const averageSessions = await getUserAverageSessions(18);
          const info = await getUserInfo(18);

          console.log('performance', performance);
          console.log('activity', activity);
          console.log('averageSessions', averageSessions);
          console.log('info', info);

          hasFetchedData.current = true;
        } catch (error) {
          console.error(error);
        }
      }
      void performance();
    }
  }, []);

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
