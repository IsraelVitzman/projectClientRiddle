export function CheckAnswer(answer:string, riddle: any) {
    if (answer.toLowerCase() === "hint") {  
         return {message: `Hint: ${riddle.hint}` };
    }
    if (answer.toLowerCase() === riddle.answer.toLowerCase()) {
         return {message:"תשובה-נכונה"}
    } else {
        return {message:"טעית נסה שוב"};
    }
}