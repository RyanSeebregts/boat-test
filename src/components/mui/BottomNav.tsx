import React, {useEffect, useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Person from '@mui/icons-material/Person';
import EventNote from '@mui/icons-material/EventNote';
import DirectionsBoat from '@mui/icons-material/DirectionsBoat';
import styled from '@emotion/styled'
import {useHistory} from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100% !important;
  background: green;
`

interface propTypes {
    value: number
}

const BottomNav = (props: propTypes) => {
    const {
        value
    } = props
    const history = useHistory();

    const changeLocation = (newValue: number) => {
        switch(newValue) {
            case 0:
                history.replace('/rent')
                break;
            case 1:
                history.replace('/boats')
                break;
            case 2:
                history.replace('/profile')
                break;
        }
    }
        

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                changeLocation(newValue);
            }}
            component={Container}
        >
            <BottomNavigationAction label="Rent" icon={<EventNote />} />
            <BottomNavigationAction label="Boats" icon={<DirectionsBoat />} />
            <BottomNavigationAction label="Profile" icon={<Person />} />
        </BottomNavigation>
    );
}

export default BottomNav