const numbers = document.querySelectorAll(".number");
const backspace = document.querySelector(".fa-backspace");
let outputSpan = document.querySelector(".output-span");
let operations=document.querySelectorAll('.operation')
console.log(operations);



for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    const currentNumb = this.innerText;
    outputSpan.innerText += currentNumb;
  });


}
backspace.addEventListener("click", function () {
  outputSpan.textContent = outputSpan.textContent.replace(
    outputSpan.textContent[outputSpan.textContent.length - 1],
    ""
  );
  console.log(outputSpan.textContent);
});

document.querySelector(".clear-all").addEventListener("click", () => {
  outputSpan.textContent = "";
  console.log(outputSpan.textContent);
});


document.querySelector('.equals').addEventListener('click',function(){
  if(outputSpan.innerText.includes('+')){
    let newSpan=outputSpan.innerHTML.split('+');
    outputSpan.innerText=Number(newSpan[0])+Number(newSpan[1]);
  }
  else if(outputSpan.innerText.includes('−')){
    let newSpan=outputSpan.innerHTML.split('−');
    outputSpan.innerText=Number(newSpan[0])-Number(newSpan[1]);
  }
  else if(outputSpan.innerText.includes('X')){
    let newSpan=outputSpan.innerHTML.split('X');
    outputSpan.innerText=Number(newSpan[0])*Number(newSpan[1]);
  }
  else if(outputSpan.innerText.includes('÷')){
    let newSpan=outputSpan.innerHTML.split('÷');
    outputSpan.innerText=Number(newSpan[0])/Number(newSpan[1]);
  }else{
    console.log('Problem');
  }
  
})