import React from 'react';
import {Text, Group} from 'react-konva';
import {IScore} from "../types";

const pos = {
    width: 200
}
const stageWidth = 200
export const LeaderBoard = ({scoresTable}: { scoresTable: IScore[] }) => {

    const num = 30
    return (
        <>
            {scoresTable.map(({name, score}, index) =>
                <Group
                    key={name}
                    id={name}
                    x={0}
                    y={num * index + 1}
                    width={stageWidth}
                >
                    <Text
                        x={0}
                        fill={'#fff'}
                        text={name}
                    />
                    <Text
                        x={stageWidth}
                        width={100}
                        align={'right'}
                        fill={'#fff'}
                        text={score.toString()}
                    />
                </Group>
            )}
        </>
    )
};
