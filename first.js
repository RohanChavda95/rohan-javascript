// // rock, paper, scissor
// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");

// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector("#comp-score");

// const genCompChoice = () => {
//   const options = ["rock", "paper", "scissor"];
//   const randIdx = Math.floor(Math.random() * 3);
//   return options[randIdx];
// };

// const drawGame = () => {
//       msg.innerText = "Game was Draw. Play again."
//   msg.style.backgroundColor = "#081b31";

// };
// const showWinner = (userWin, userChoice, compChoice) => {
//   if (userWin) {
//     userScore++;
//     userScorePara.innerText = userScore;
//     msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
//     msg.style.backgroundColor = "green";
//   } else {
//     compScore++;
//     compScorePara.innerText = compScore;
//     msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
//     msg.style.backgroundColor = "red";
//   }
// };

// const playGame = (userChoice) => {
//   const compChoice = genCompChoice();
//   if (userChoice === compChoice) {
//     drawGame();
//   } else {
//     let userWin = true;
//     if (userChoice === "rock") {
//       userWin = compChoice === "paper" ? false : true;
//     } else if (userChoice === "paper") {
//       userWin = compChoice === "scissor" ? false : true;
//     } else {
//       userWin = compChoice === "rock" ? false : true;
//     }
//     showWinner(userWin, userChoice, compChoice);
//   }
// };

// choices.forEach((choice) => {
//   choice.addEventListener("mouseover", () => {
//     const userChoice = choice.getAttribute("id");
//     playGame(userChoice);
//   });
// });

// // let score = prompt("Enter a marks: ");

// // if(score>=90 && score<=100)
// // {
// //     console.log("Grade is A");
// // }
// // else if(score>=70 && score<=89)
// // {
// //     console.log("Grade is B");
// // }
// // else if(score>=60 && score<=69)
// // {
// //     console.log("Grade is C");
// // }
// // else if(score>=50 && score<=59)
// // {
// //     console.log("Grade is D");
// // }
// // else if(score>=0 && score<=49)
// // {
// //     console.log("Grade is F");
// // }
// // else
// // {
// //     console.log("Input is not valid");
// // }

// // for (let count=1; count<=100000; count++)
// // {
// //     console.log("hello lawde");
// // }
// // console.log("fuck of");

// // for (let i=0; i<=100; i++)
// // {
// //     if(i%2!==0)
// //     {
// //         console.log(i);
// //     }
// // }

// let persons = [
//   { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
//   { firstName: "Rohan", lastName: "Chavda", age: 21, eyeColor: "blue" },
// ];

// for (let data of persons){
//     console.log(data.firstName)
// }

let fooditems = [{ test: "hardik" }, { test: "viki" }];

for (let data of fooditems) {
  console.log(data.test);
}

