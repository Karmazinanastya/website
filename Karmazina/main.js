// task 1
function calculateRectangle() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    if (!isNaN(length) && !isNaN(width) && length >= 0 && width >= 0) {
        const perimeter = 2 * (length + width);
        const area = length * width;
        const diagonal = Math.sqrt(length ** 2 + width ** 2);

        document.getElementById('perimeter').textContent = perimeter;
        document.getElementById('area').textContent = area;
        document.getElementById('diagonal').textContent = diagonal;
    } else {
        document.getElementById('perimeter').textContent = 'Невірно введено дані';
        document.getElementById('area').textContent = 'Невірно введено дані';
        document.getElementById('diagonal').textContent = 'Невірно введено дані';
    }
}


// task 2
const user1Button = document.getElementById('user1Button');
const user2Button = document.getElementById('user2Button');

user1Button.addEventListener('click', () => sendMessage('user1'));
user2Button.addEventListener('click', () => sendMessage('user2'));

function sendMessage(user) {
    const input = document.getElementById(user + 'Input');
    const message = input.value;
    const messagesDiv = document.getElementById('messages');
    const newMessage = document.createElement('div');

    if (message.trim() === '') {
        return; 
    }    

    newMessage.textContent = message;
    newMessage.classList.add(user === 'user1' ? 'user1Message' : 'user2Message');
    messagesDiv.appendChild(newMessage);

    input.value = '';

    messagesDiv.scrollTop = messagesDiv.scrollHeight;
} 


// task 3
const ukrainianToLatinMap = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ye',
    'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'yi', 'й': 'y', 'к': 'k', 'л': 'l',
    'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '', 'ю': 'yu',
    'я': 'ya', 'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'H', 'Ґ': 'G', 'Д': 'D', 'Е': 'E', 'Є': 'Ye',
    'Ж': 'Zh', 'З': 'Z', 'И': 'Y', 'І': 'I', 'Ї': 'Yi', 'Й': 'Y', 'К': 'K', 'Л': 'L',
    'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
    'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch', 'Ь': '', 'Ю': 'Yu',
    'Я': 'Ya',
};

const ukrainianText = document.getElementById('ukrainianText');
const transliteratedText = document.getElementById('transliteratedText');

ukrainianText.addEventListener('input', function () {
    const inputText = ukrainianText.value;
    let transliteratedOutput = '';

    for (const char of inputText) {
        transliteratedOutput += ukrainianToLatinMap[char] || char;
    }

    transliteratedText.value = transliteratedOutput;
});



// task 4
function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
  }
  
  function findDayOfWeek() {
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value);
    const day = parseInt(document.getElementById("day").value);
  
    // Перевірка на некоректні введення
    if (year < 0 || month < 1 || month > 12 || day < 1 || day > 31) {
      document.getElementById("error").innerText = "Помилка: Неправильно введений рік, місяць або день.";
      document.getElementById("result").innerText = "";
      return;
    }
  
    // Перевірка лютого залежно від високосного року
    if (month === 2) {
      const isLeap = isLeapYear(year);
      const maxDays = isLeap ? 29 : 28;
      if (day > maxDays) {
        document.getElementById("error").innerText = "Помилка: у Лютому цього року всього " + maxDays + " днів.";
        document.getElementById("result").innerText = "";
        return;
      }
    }
  
    // Видалення повідомлення про помилку, якщо воно було відображено раніше
    document.getElementById("error").innerText = "";
  
    const a = Math.floor((14 - month) / 12);
    const y = year - a;
    const m = month + 12 * a - 2;
    const dayOfWeek = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;
  
    const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    const result = `Ви народилися в ${days[dayOfWeek]}.`;
  
    document.getElementById("result").innerText = result;
  }
  