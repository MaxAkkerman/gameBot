import {Rect} from "react-konva";
import {useRef} from "react";

export const VerticalScrollBar = ({stageRef, mainLayerRef}: { stageRef: any, mainLayerRef: any }) => {
    const verticalScrollbar = useRef(null);
    console.log('stageRef', stageRef.current.width())
    const verticalScrollbarInfo = {
        width: 10,
        height: 100
    };
    return <Rect
        width={verticalScrollbarInfo.width}
        height={verticalScrollbarInfo.height}
        ref={verticalScrollbar}
        fill={"#ccc"}
        opacity={0.75}
        x={stageRef.current.width - verticalScrollbarInfo.width}
        y={0}
        draggable={true}
        dragBoundFunc={function (pos) {
            pos.x = stageRef.current.width - verticalScrollbarInfo.width;
            pos.y = Math.min(pos.y, stageRef.current.width - this.height());
            return pos;
        }
        }
        onDragMove={() => {
            if (!verticalScrollbar.current) return
            // @ts-ignore
            const availableHeight = stageRef.current.height() - verticalScrollbar.current.height();
            // @ts-ignore
            const delta = verticalScrollbar.current.y() / availableHeight;

            mainLayerRef.current.y((stageRef.current.height() - 300) * delta);
        }}
    />
}