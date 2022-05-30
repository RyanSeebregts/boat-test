import React from 'react';
import BottomNavPage from '../components/PageWrappers/BottomNavPage';
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import ui from "../redux/reducers/uiReducer";

const About = () => {
    const dispatch = useAppDispatch()
    const countTest = useAppSelector(state => state.ui.countTest)
    const incrementCnt = () => {
        dispatch(ui.actions.setCountTest({countTest: countTest + 1}))
    }
    return (
        <BottomNavPage val={2}>
            <div style={{height: '100%', width: '100%', background: 'red'}}>
                <button onClick={incrementCnt}>
                    test
                </button>
            </div>
        </BottomNavPage>
    );
    
}

export default About;
