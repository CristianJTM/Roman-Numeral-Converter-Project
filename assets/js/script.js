const number = document.getElementById("number");
const checkButton = document.getElementById("convert-btn");
const result = document.getElementById("output")

const checkUserInput = () =>{
  const inputInt = number.value;
  if (!inputInt || inputInt.match(/[e.]/g)){
    result.innerHTML = `<p>Please enter a valid number</p>`;
  } else if (inputInt<1){
    result.innerHTML = `<p>Please enter a number greater than or equal to 1</p>`;
  } else if (inputInt>3999){
    result.innerHTML = `<p>Please enter a number less than or equal to 3999</p>`;
  } else {
    result.innerHTML=convertToRoman(inputInt)    
  }
}
const convertToRoman=(input)=>{
    const RomanToArabic=[['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]];
    const romanNum = [];
 for (var i=0; i<=RomanToArabic.length-1;i++){
   const aux = RomanToArabic[i][1];
   while (input>=aux){
     romanNum.push(RomanToArabic[i][0]);
     input-= RomanToArabic[i][1];
   }
 }
 return romanNum.join('');
}


checkButton.addEventListener("click", checkUserInput);
