
const botToken = '7127454052:AAEJD3RxE3R2JNMfHdT1-g03Kyl_0HxJzuM'; 
const chatId = '7127454052'; 


document.getElementById('telegramForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

     
const name = document.getElementById('name').value;
const surname = document.getElementById('surname').value;
const tel = document.getElementById('tel').value;
const group = document.getElementById('group').value;
const nickname = document.getElementById('nickname').value;


const telegramMessage = `
Имя: ${name}\n
Фамилия: ${surname}\n
Телефон: ${tel}\n
Группа: ${group}\n
Никнейм: ${nickname}
`;   

    
    const url = 'https://api.telegram.org/bot$7127454052:AAEJD3RxE3R2JNMfHdT1-g03Kyl_0HxJzuM/sendMessage';

   
    fetch(url, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            chat_id: 7127454052, 
            text: Message 
        })
    })
    .then(response => response.json()) 
    .then(data => {
        if (data.ok) {
            alert('Сообщение успешно отправлено!');
        } else {
            alert('Ошибка при отправке сообщения.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error); 
        alert('Произошла ошибка при отправке.');
    });
});