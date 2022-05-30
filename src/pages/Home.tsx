import React from 'react';
import BottomNavPage from '../components/PageWrappers/BottomNavPage';

const Home = () => {
  return (
    <BottomNavPage val={1}>
      <div style={{height: '100%', width: '100%', top: '0px', left: '0px', background: 'orange'}}>
      </div>
    </BottomNavPage>
  );
  
}

export default Home;
