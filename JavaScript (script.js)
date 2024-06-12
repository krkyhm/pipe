document.getElementById('sizeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let height = parseInt(document.getElementById('height').value);
    let width = parseInt(document.getElementById('width').value);
    
    // 기본 사이즈
    const baseSize = 100;

    // 올림 처리
    let adjustedHeight = Math.ceil(height / 10) * 10;
    let adjustedWidth = Math.ceil(width / 10) * 10;

    // 높이와 가로(폭)의 추가 수량 계산
    let heightAddition = Math.max(0, (adjustedHeight - baseSize) / 10);
    let widthAddition = Math.max(0, (adjustedWidth - baseSize) / 10);

    let resultMessage = `+높이추가 x${heightAddition}개\n+폭추가 x${widthAddition}개`;

    document.getElementById('result').innerText = resultMessage;
});
