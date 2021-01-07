/*
* 
* Author: 
* 
* ONYEN: 
* 
* UNC Honor Pledge: I certify that no unauthorized assistance has been received 
* or given in the completion of this work. I certify that I understand and 
* could now rewrite on my own, without assistance from course staff, 
* the problem set code I am submitting. 
*/

import { print, promptString } from "introcs";

export let main = async () => {

    let alive: boolean;
    alive = true;
    let hunger: number;
    hunger = 50;
    let happiness: number;
    happiness = 50;
    let day: number;
    day = 1;
    let name: string;
    name = await promptString("What do you want to name your Tamagotchi?");

    while (alive === true) {
        print("Day " + day);
        let feedOrPlay: string;
        feedOrPlay = await promptString("Do you want to play with or feed " + name + "? Type 'play', 'feed', or 'neither'.");

        if (feedOrPlay === "feed") {
            hunger = hunger - 10;
            happiness = happiness - 10;
            print (name + " has been fed!");
        } else if (feedOrPlay === "play") {
            hunger = hunger + 15;
            happiness = happiness + 10;
            print (name + " is happy!");
        } else if (feedOrPlay === "neither") {
            hunger = hunger + 15;
            happiness = happiness - 10;
            print(name + " was neither fed nor played with.");

    }   
        if (hunger <= 0) {
            alive = false;
            print (name + " hunger has reached 0%");

    }   if (hunger > 100) {
            alive = false;
            print (name + " hunger has exceeded 100%");

    }   if (happiness <= 0) {
            alive = false;
            print (name + " happiness has reached 0%");

        }   
        if (alive === true) {
        print (name + " is still living!");
        print (name + "'s hunger level is " + hunger);
        print (name + "'s happiness level is " + happiness);
        day++;
    }

}   print ("This means that " + name + " has died after " + day + " days :(");



    // TODO: Put all of your code here
};
main();
