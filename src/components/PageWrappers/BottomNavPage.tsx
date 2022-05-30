import React, {useState} from 'react';
import styled from '@emotion/styled'
import BottomNav from '../mui/BottomNav';

const bottomNavHeight = 70;

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
`

const PageContainer = styled.div`
    width: 100%;
    height: calc(100% - ${bottomNavHeight}px);
`
const BottomNavContainer = styled.div`
    width: 100%;
    height: ${bottomNavHeight}px;
`

interface propTypes {
    children: any
    val?: number
}
const BottomNavPage = (props:propTypes) => {

    return (
        <Container>
            <PageContainer>
                {props.children}
            </PageContainer>
            <BottomNavContainer>
                <BottomNav value={props.val}/>
            </BottomNavContainer>
        </Container>
    );
}

export default BottomNavPage