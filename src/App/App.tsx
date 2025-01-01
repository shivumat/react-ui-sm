import Header from './Header'
import newStyled from '@emotion/styled'
import Body from './Body'
import { BrowserRouter, Route, Routes } from 'react-router'
import ContainerComponent from '../Components/Container'
// import { useState } from 'react'

const AppContainer = newStyled(ContainerComponent)`
    height : 100vh;
    width : 100vw;
    font-size: 16px;
`
const App = () => {

    return (
        <AppContainer padding={{all : '0px'}} margin={{all : '0px'}}>
            <Header />
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/:id" element={<Body />} />
                </Routes>
            </BrowserRouter>
        </AppContainer>
    )
}

export default App