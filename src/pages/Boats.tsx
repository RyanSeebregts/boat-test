import React, {useEffect} from 'react';
import BottomNavPage from '../components/PageWrappers/BottomNavPage';
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Home = () => {
  const countTest = useAppSelector(state => state.ui.countTest)

  return (
    <BottomNavPage val={1}>
      <div style={{height: '100%', width: '100%', top: '0px', left: '0px', background: 'orange'}}>
        {countTest}
      </div>
    </BottomNavPage>
  );
  
}

export default Home;
