window.onload = function() {
    const pron1Boxes = Array.from(document.getElementsByClassName('pron1')),
    pron2Boxes = Array.from(document.getElementsByClassName('pron2')),
    boxes = [...pron1Boxes, ...pron2Boxes],
    boxesLength = boxes.length;

const highlightBox = order => {
    const orderOfRemoveSelectionElement = (order === 0 ? boxesLength : order) - 1;

    boxes[orderOfRemoveSelectionElement].classList.remove('backlight');
    boxes[order].classList.add('backlight');


    setTimeout(() => { highlightBox(order === boxesLength - 1 ? 0 : order + 1) }, 2000);
}

highlightBox(0, boxes);
}
