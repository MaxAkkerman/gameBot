import React, {useRef, useState} from 'react';
import './App.css';
import {Layer, Rect, Stage, Text} from "react-konva";
import {LeaderBoard} from "./components/LeaderBoard";
import {MOCK} from "./mocks/mock";

const verticalScrollbarInfo = {
    width: 10,
    height: 50
};

const LeaderBoardHeight = 100;
const canvasWidth = 400;
const canvasHeight = 800;



export const App = () => {
    const mainLayerRef = useRef(null)
    const stageRef = useRef(null)
    const verticalScrollbar = useRef(null);
    const [posStart, setPosStart] = useState({x:0,y:0})
    return (
        <div className="scrollable-element">
        <Stage
            onTouchStart={(e)=>{
                const temp = {
                    x: e.evt.touches[0].clientX,
                    y: e.evt.touches[0].clientY
                }
                setPosStart(()=>temp)

            }}
            onTouchMove={(e) => {
                e.evt.preventDefault();
// console.log('deltaX',e.evt.de)
                const dx = (Number(e.evt.touches[0].clientX - posStart.x) * -1)/2;
                const dy = (Number(e.evt.touches[0].clientY - posStart.y) * -1)/2;
console.log('posstae',posStart)
                // @ts-ignore
                const minX = stageRef.current.width() - canvasWidth;
                console.log('minX',minX)
                const maxX = 0;
                // @ts-ignore
                const x = Math.max(minX, Math.min(mainLayerRef.current.x() - dx, maxX));
                console.log('x',x)
                // @ts-ignore
                const minY = stageRef.current.height() - canvasHeight;
                const maxY = 0;
                // @ts-ignore
                const y = Math.max(minY, Math.min(mainLayerRef.current.y() - dy, maxY));
                console.log('y',y)

                // @ts-ignore
                mainLayerRef.current.position({x, y});
                // @ts-ignore
                const availableHeight = stageRef.current.height() - verticalScrollbar.current.height();
                // @ts-ignore
                const vy = (mainLayerRef.current.y() / (stageRef.current.height() - canvasHeight)) * availableHeight;
                console.log('vy',vy)

                // @ts-ignore
                verticalScrollbar.current.x(vy);
            }}
            ref={stageRef}
            preventDefault={false}
            className={'App'}
            width={canvasWidth}
            height={canvasHeight-300}
        >
            <Layer preventDefault={false} ref={mainLayerRef}>
                <Text text="Try click on rect"/>
                <LeaderBoard scoresTable={MOCK} height={LeaderBoardHeight} stageRef={stageRef}/>
            </Layer>
            <Layer>
                <Rect
                    width={verticalScrollbarInfo.width}
                    height={verticalScrollbarInfo.height}
                    ref={verticalScrollbar}
                    preventDefault={false}
                    // fill={"#ccc"}
                    opacity={0.75}
                    // @ts-ignore
                    x={stageRef.current?.width() - verticalScrollbarInfo.width}
                    y={0}
                    draggable={true}
                    dragBoundFunc={ (pos) => {
                        // @ts-ignore
                        pos.x = stageRef.current.width() - verticalScrollbarInfo.width;
                        // @ts-ignore
                        pos.y = Math.min(pos.y, stageRef.current.width() - verticalScrollbar.current.height());
                        return pos;
                    }
                    }
                    onDragMove={() => {
                        if (!verticalScrollbar.current) return
                        // @ts-ignore
                        const availableHeight = stageRef.current.height() - verticalScrollbar.current.height();
                        // @ts-ignore
                        const delta = verticalScrollbar.current.y() / availableHeight;
                        // @ts-ignore
                        mainLayerRef.current.y((stageRef.current.height() - canvasWidth) * delta);
                    }}
                />
            </Layer>
        </Stage>
        </div>
    );
};