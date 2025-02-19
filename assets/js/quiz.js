document.addEventListener('DOMContentLoaded', function() {
    const quizBoxes = document.querySelectorAll('.oxq-box');
    
    quizBoxes.forEach(box => {
        const options = box.querySelectorAll('.btn-ox');
        const answerIndex = Array.from(options).findIndex(option => option.classList.contains('answer'));
        const checkMark = box.querySelector('.oxq-check-mark');
        const btnAns = box.querySelector('.btn-ans');
        const btnHint = box.querySelector('.btn-hint');
        const hint = box.querySelector('.oxq-hint');
        
        // 초기 상태에서 모든 옵션의 스타일을 기본값으로 설정
        options.forEach(option => {
            option.style.backgroundColor = ''; // 기본 배경색
            option.style.color = ''; // 기본 텍스트 색
        });

        options.forEach((option, index) => {
            option.addEventListener('click', function() {
                // 모든 옵션의 선택 상태 해제
                options.forEach(opt => {
                    opt.classList.remove('selected');
                    opt.style.backgroundColor = ''; // 기본 배경색
                    opt.style.color = ''; // 기본 텍스트 색
                });
                // 현재 클릭된 옵션을 선택 상태로 설정
                option.classList.add('selected');
                option.style.backgroundColor = '#001f3f'; // 군청색
                option.style.color = '#ffffff'; // 흰색
            });
        });

        btnAns.addEventListener('click', function() {
            if (btnAns.textContent.trim() === '정답확인') {
                const selectedOption = box.querySelector('.btn-ox.selected');
                if (selectedOption) {
                    checkMark.style.display = 'block';
                    if (Array.from(options).indexOf(selectedOption) === answerIndex) {
                        checkMark.textContent = 'O';
                        new Audio('/assets/sound/o.mp3').play();
                    } else {
                        checkMark.textContent = 'X';
                        new Audio('/assets/sound/x.mp3').play();
                    }
                    // 정답 확인 후 버튼 텍스트 변경 및 힌트 숨기기
                    btnAns.textContent = '재시도';
                    btnHint.style.display = 'none';
                    hint.style.display = 'none'; // 힌트 숨기기
                }
            } else if (btnAns.textContent.trim() === '재시도') {
                // 재시도 버튼을 누르면 초기 상태로 복원
                checkMark.style.display = 'none';
                btnAns.textContent = '정답확인';
                btnHint.style.display = 'inline-block';
                hint.style.display = 'none'; // 힌트 숨기기
                options.forEach(opt => {
                    opt.classList.remove('selected');
                    opt.style.backgroundColor = ''; // 기본 배경색
                    opt.style.color = ''; // 기본 텍스트 색
                });
            }
        });

        btnHint.addEventListener('click', function() {
            // 힌트 버튼을 클릭할 때 display 속성 전환
            if (hint.style.display === 'none' || hint.style.display === '') {
                hint.style.display = 'block';
            } else {
                hint.style.display = 'none';
            }
        });
    });
});