const  birthdayinput = document.getElementById('birthday');
const birthdayBtn = document.querySelector('.age-btn');
const birthdayAdd = document.querySelector('.result');


birthdayBtn.addEventListener('click' , ()=>{
    getBithdayDate();
});

const getBithdayDate =()=>{
    const getDate = birthdayinput.value;
    if(getDate === ""){
        alert('First Add Your birthday Date');
    }else{
        const getBirthday = birthdayCalculate(getDate);
        birthdayAdd.innerText = `Your Age is ${getBirthday}  ${getBirthday < 1 ? "Year" : "years"} old`;
    }
}

const birthdayCalculate = (getDate) =>{
const currentDate = new Date();
const birthdayDate = new Date(getDate);
let findBirthday = currentDate.getFullYear() - birthdayDate.getFullYear();
// console.log(findBirthday);
const findBirthdayMonth = currentDate.getMonth() - birthdayDate.getMonth();
// console.log(findBirthdayMonth);
if(findBirthdayMonth < 0  ||findBirthdayMonth === 0 && currentDate.getDate() < birthdayDate.getDate()){
    findBirthday--;
    
}
return findBirthday;

}


// FOr Understanding what going onhere
// Month Ka Maqsad Samajhte Hain:
// Example:
// Aaj ki date: 2024-12-09
// User ka birthday: 1998-12-15

// Agar hum sirf years ka farq lete hain:

// javascript
// Copy code
// 2024 - 1998 = 26
// Lekin user ka birthday abhi 6 din baad (15 December) aayega, to user ki real age 25 hai, na ke 26.
// Isliye hume month aur date check karna hota hai, taake yeh pata chale ke birthday aage aaya ya peechay chala gaya hai.