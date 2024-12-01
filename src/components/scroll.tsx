// const containerWidth = window.innerWidth;
// const containerHeight = window.innerHeight;
//
// const canvasWidth = 3000;
// const canvasHeight = 3000;
// const amountOfElements = 1000;
//
// const colors = ["#092c40", "#5aaddf", "#092c40", "#f93841"];
//
// const stage = new Konva.Stage({
//     container: "root",
//     width: containerWidth,
//     height: containerHeight
// });
//
// const layer = new Konva.Layer();
// stage.add(layer);
//
// const getElement = () => {
//     const x = canvasWidth * Math.random();
//     const y = canvasHeight * Math.random();
//     const fontSize = Math.round(Math.random() * 35);
//     const color = colors[Math.round(Math.random() * (colors.length - 1))];
//
//     return new Konva.Text({
//         x,
//         y,
//         text: "SIP3",
//         fontSize,
//         fill: color
//     });
// };
//
// for (let i = 0; i < amountOfElements; i++) {
//     layer.add(getElement());
// }
//
// const scrollbarsLayer = new Konva.Layer();
// stage.add(scrollbarsLayer);
//
// const verticalScrollbarInfo = {
//     width: 10,
//     height: 100
// };
// const verticalScrollbar = new Konva.Rect({
//     width: verticalScrollbarInfo.width,
//     height: verticalScrollbarInfo.height,
//     fill: "#ccc",
//     opacity: 0.75,
//     x: stage.width() - verticalScrollbarInfo.width,
//     y: 0,
//     draggable: true,
//     dragBoundFunc: function (pos) {
//         pos.x = stage.width() - verticalScrollbarInfo.width;
//         pos.y = Math.min(pos.y, stage.height() - this.height());
//         return pos;
//     }
// });
// scrollbarsLayer.add(verticalScrollbar);
//
// verticalScrollbar.on("dragmove", function () {
//     const availableHeight = stage.height() - verticalScrollbar.height();
//     const delta = verticalScrollbar.y() / availableHeight;
//
//     layer.y((stage.height() - canvasHeight) * delta);
// });
//
// const horizontalScrollbarInfo = {
//     width: 100,
//     height: 10
// };
//
// const horizontalScrollbar = new Konva.Rect({
//     width: horizontalScrollbarInfo.width,
//     height: horizontalScrollbarInfo.height,
//     fill: "#ccc",
//     opacity: 0.75,
//     x: 0,
//     y: stage.height() - horizontalScrollbarInfo.height,
//     draggable: true,
//     dragBoundFunc: function (pos) {
//         pos.x = Math.min(pos.x, stage.width() - this.width());
//         pos.y = stage.height() - horizontalScrollbarInfo.height;
//
//         return pos;
//     }
// });
// scrollbarsLayer.add(horizontalScrollbar);
//
// horizontalScrollbar.on("dragmove", function () {
//     const availableWidth = stage.width() - horizontalScrollbar.width();
//     const delta = horizontalScrollbar.x() / availableWidth;
//
//     layer.x((stage.width() - canvasWidth) * delta);
// });
//
// stage.on("wheel", function (e) {
//     e.evt.preventDefault();
//
//     const dx = e.evt.deltaX;
//     const dy = e.evt.deltaY;
//
//     const minX = stage.width() - canvasWidth;
//     const maxX = 0;
//
//     const x = Math.max(minX, Math.min(layer.x() - dx, maxX));
//
//     const minY = stage.height() - canvasHeight;
//     const maxY = 0;
//
//     const y = Math.max(minY, Math.min(layer.y() - dy, maxY));
//     layer.position({ x, y });
//
//     const availableHeight = stage.height() - verticalScrollbar.height();
//     const vy = (layer.y() / (stage.height() - canvasHeight)) * availableHeight;
//     verticalScrollbar.y(vy);
//
//     const availableWidth = stage.width() - horizontalScrollbar.width();
//
//     const hx = (layer.x() / (stage.width() - canvasWidth)) * availableWidth;
//     horizontalScrollbar.x(hx);
// });

export {}