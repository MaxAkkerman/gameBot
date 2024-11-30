import React from 'react';
import './App.css';
import {Layer, Rect, Stage, Text} from "react-konva";
import {LeaderBoard} from "./components/LeaderBoard";
import {MOCK} from "./mocks/mock";

export const App = () => {

    return (
        <Stage className={'App'} width={300} height={300}>
            <Layer>
                <LeaderBoard scoresTable={MOCK}/>
            </Layer>
        </Stage>
    );
};