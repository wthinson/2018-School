/**
 * Author: Will Hinson 
 *
 * ONYEN: wthinson
 *
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received
 * or given in the completion of this work. I certify that I understand and
 * could now rewrite on my own, without assistance from course staff, 
 * the problem set code I am submitting.
 */
import { print, promptNumber } from "introcs";
export let main = async () => {
    let problemSetWeight: number;
    problemSetWeight = 0.35;
    let examWeight: number;
    examWeight = 0.2;
    let participationWeight: number;
    participationWeight = 0.05;
    let quizWeight: number; 
    quizWeight = 0.4;
    let problemSetGrade: number;
    let participationGrade: number;
    let averageQuizGrade: number;
    problemSetGrade = await promptNumber ("What is your problem set grade, from 0-100?");
    participationGrade = await promptNumber ("What is your participation grade, from 0-100?");
    averageQuizGrade = await promptNumber ("What is your quiz grade, from 0-100?");
    let goalFinalGrade: number;
    goalFinalGrade = await promptNumber ("What is your goal final grade, from 0-100?");
    let examGradeNeeded: number;
    examGradeNeeded = (goalFinalGrade - problemSetWeight * problemSetGrade - participationWeight * participationGrade - quizWeight * averageQuizGrade) / examWeight;
    print (examGradeNeeded);


    // TODO: Your code goes inside of this block!

}; 
main(); 