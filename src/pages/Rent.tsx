import React from 'react';
import BottomNavPage from '../components/PageWrappers/BottomNavPage';

const Home = () => {
  return (
    <BottomNavPage val={0}>
      <div style={{height: '100%', width: '100%', top: '0px', left: '0px', background: 'blue'}}>
      </div>
    </BottomNavPage>
  );
  
}

export default Home;
