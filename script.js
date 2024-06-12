const hangerTypes = {
    basic: { height: 1070, width: 1050 },
    square: { height: 1140, width: 1100 },
    twoFloor: { height: 2100, width: 1100 },
    twoStep: { height: 1070, width: 2100 },
    twoFloorTwoStep: { height: 2100, width: 2200 },
    zType: { height: 1140, width: 1100 },
    doubleHang: { height: 1140, width: 1100 }
};

let selectedHangerType = 'basic';

document.querySelectorAll('.hanger-type').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.hanger-type').forEach(btn => btn.classList.remove('selected'));
        this.classList.add('selected');
        selectedHangerType = this.getAttribute('data-type');
    });
});

document.getElementById('sizeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let height = parseInt(document.getElementById('height').value);
    let width = parseInt(document.getElementById('width').value);

    let baseHeight = hangerTypes[selectedHangerType].height;
    let baseWidth = hangerTypes[selectedHangerType].width;

    let adjustedHeight = Math.ceil(height / 10) * 10;
    let adjustedWidth = Math.ceil(width / 10) * 10;

    let heightAddition = Math.max(0, (adjustedHeight - baseHeight) / 10);
    let widthAddition = Math.max(0, (adjustedWidth - baseWidth) / 10);

    let resultMessage = `+높이추가 x${heightAddition}개\n+폭추가 x${widthAddition}개`;

    document.getElementById('result').innerText = resultMessage;
});
