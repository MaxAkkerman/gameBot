import React from 'react';
import {Text, Group} from 'react-konva';
import {IScore} from "../types";

const stageWidth = 400
export const LeaderBoard = ({scoresTable, height, stageRef}: { scoresTable: IScore[], height:number, stageRef:any }) => {

    const num = 30
    return (
        <>
            {scoresTable.map(({name, score}, index) =>
                <Group
                    key={name}
                    id={name}
                    height={30}
                    x={0}
                    y={num * index + 1}
                    width={stageRef.current.width()}
                >
                    <Text
                        x={0}
                        fill={'#fff'}
                        text={name}
                        fontSize={16}
                    />
                    <Text
                        x={stageRef.current.width() - 100}
                        width={100}
                        align={'right'}
                        fill={'#fff'}
                        fontSize={16}
                        text={score.toString()}
                    />
                </Group>
            )}
        </>
    )
};
