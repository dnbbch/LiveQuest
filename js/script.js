// Функция для проверки ответов
function checkAnswer(buttonId, answerId, correctAnswers) {
    document.getElementById(buttonId).addEventListener('click', function () {
        const answer = document.getElementById(answerId).value.toLowerCase();
        if (correctAnswers.includes(answer)) {
            alert('Верно! Молодцы! Идём дальше!');
        } else {
            alert('Не верно! Попробуйте ещё раз!');
        }
    });
}

checkAnswer('check1', 'answer1', ['марка']);
checkAnswer('check2', 'answer2', ['жаба клава']);
checkAnswer('check3', 'answer3', ['день моржа']);
checkAnswer('check4', 'answer4', ['стрелец']);
checkAnswer('check5', 'answer5', ['сено, палки, кирпичи']);
checkAnswer('check6', 'answer6', ['eternal threads']);
checkAnswer('check7', 'answer7', ['тулуп']);
checkAnswer('check8', 'answer8', ['п']);
checkAnswer('check9', 'answer9', ['шахбокс']);
checkAnswer('check10', 'answer10', ['12']);
checkAnswer('check11', 'answer11', ['дыхание']);
checkAnswer('check12', 'answer12', ['р']);
checkAnswer('check13', 'answer13', ['50']);
checkAnswer('check14', 'answer14', ['волнистые', 'волнистых']);
checkAnswer('check15', 'answer15', ['тишина']);

document.getElementById("decryptButton").addEventListener("click", function () {
    const decryptionInput = document.getElementById("decryptionInput").value;
    const decryptedWord = "мажадасцсиesтппшс12дер50вета";
  
    if (decryptionInput.toLowerCase() === decryptedWord.toLowerCase()) {
      // Если пароль верный, перенаправляем на страницу qr.html
      window.location.href = "qr.html";
    } else {
      alert("Пароль неверный, попробуйте ещё раз.");
    }
  });
  

// const questions = [
//   { questionId: "answer1", correctAnswers: ["Марка", "марка"] },
//   {
//     questionId: "answer2",
//     correctAnswers: ["Жаба Клава", "жаба клава", "Жаба клава", "жаба Клава"],
//   },
//   {
//     questionId: "answer3",
//     correctAnswers: ["День Моржа", "день моржа", "День моржа", "день Моржа"],
//   },
//   { questionId: "answer4", correctAnswers: ["стрелец", "Стрелец"] },
// ];

// questions.forEach((question) => {
//   const button = document.getElementById(`check${question.questionId}`);
//   const input = document.getElementById(question.questionId);

//   if (button && input) {
//     button.addEventListener("click", function () {
//       const answer = input.value.toLowerCase();

//       if (question.correctAnswers.includes(answer)) {
//         alert("Верно! Идём дальше!");
//       } else {
//         alert("Не верно! Попробуй ещё раз!");
//       }
//     });
//   }
// });
