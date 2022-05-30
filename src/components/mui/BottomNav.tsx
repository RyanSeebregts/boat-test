import React, {useEffect, useState} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
        console.log(newValue)
        switch(newValue) {
            case 0:
                history.replace('/about')
                break;
            case 1:
                history.replace('/home')
                break;
            case 2:
                history.replace('/about')
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
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
    );
}

export default BottomNav