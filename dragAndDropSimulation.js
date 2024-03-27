/**
 * Simulate a drag and drop mouse event combo
 * 
 * @param {HTMLElement} draggable Element to be dragged and dropped
 * @param {number} offsetX x axis offset pixels
 * @param {number} offsetY y axis offset pixels
 * 
 * Sample usage: `simulateDragAndDrop(document.getElementById("xxx"), 10, 20);`
 */
const simulateDragAndDrop = (draggable, offsetX, offsetY) => {
  const draggableRect = draggable.getBoundingClientRect();

  // Create mouse events
  const mouseDownEvent = new MouseEvent("mousedown", {
    bubbles: true,
    cancelable: true,
    view: window,
    clientX: draggableRect.left,
    clientY: draggableRect.top,
  });

  const mouseMoveEvent = new MouseEvent("mousemove", {
    bubbles: true,
    cancelable: true,
    view: window,
    clientX: draggableRect.x + offsetX,
    clientY: draggableRect.y + offsetY,
  });

  const mouseUpEvent = new MouseEvent("mouseup", {
    bubbles: true,
    cancelable: true,
    view: window,
    clientX: draggableRect.x + offsetX,
    clientY: draggableRect.y + offsetY,
  });

  // Dispatch the mouse events
  draggable.dispatchEvent(mouseDownEvent);
  draggable.dispatchEvent(mouseMoveEvent);
  draggable.dispatchEvent(mouseUpEvent);
};
