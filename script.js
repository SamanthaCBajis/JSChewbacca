"use strict";

class friendInfo {                                     
    constructor(name, friendly, flyingSkill, dejarikSkill, fearGE) {     
        this.name = name;
        this.friendly = friendly;                          
        this.flyingSkill = flyingSkill;                     
        this.dejarikSkill = dejarikSkill;
        this.fearGE = fearGE;                     
    }
}

let currentCandidate = 0;
let highestScore = 0;


class Friend {                        
    constructor() {
        this.newfriend = [];           
    }
    add(info) {
        this.newfriend.push(info);          
    }
    deleteAt(index) {
        this.newfriend.splice(index, 1);     
    }
    Score(){
        let i;
            for (i = 0; i < this.newfriend.length; i++) {
                currentCandidate = this.newfriend[i].friendly + this.newfriend[i].flyingSkill + this.newfriend[i].dejarikSkill - this.newfriend[i].fearGE;
                
            if (currentCandidate > highestScore) {
                highestScore = currentCandidate;
            }
            

        }
        console.log(this.newfriend[i].name);
    }
    print() {
        for (let i = 0; i < this.newfriend.length; i++) {      
            console.log(this.newfriend.highestScore[i]);                
        }

    }

}


const user = new Friend()
console.log(user);
user.add(new friendInfo("Spongebob", 2, 0, 2, 2)); 
user.add(new friendInfo("Patrick", 4, 1, 1, 1));
user.print();

/* function Score(){
    for (let i = 0; i < this.newfriend.length; i++) {
        currentCandidate = this.newfriend[i].friendly + this.newfriend[i].flyingSkill + this.newfriend[i].dejarikSkill - this.newfriend[i].fearGE;
        
    if (currentCandidate > highestScore) {
        highestScore = currentCandidate
    }
} */

user.Score();

// while loop add remove delete or quit
while (true) {                 
    const choice = prompt("Would you like to add, print, delete a new friend or quit?");
    if (choice === "add") {                                                     
        const name = prompt("Enter name: ");
        const friendly = prompt("Enter friendliness: ");
        const flyingSkill = prompt("Enter flying skill: ");
        const dejarikSkill = prompt("Enter Dejarik skill : ");
        const fearGE = prompt("Enter Fear level : ");
        user.add(new (name,  friendly, flyingSkill, dejarikSkill, fearGE));
    } else if (choice === "print") {                                          
        user.print();
    } else if (choice === "delete") {                                          // Deleting a contact by using the splice(); method and then deleting which ever index the user chooses through the prompt
        const del = prompt("What entry do you want to delete?");
        user.deleteAt(del);
    } else if (choice === "quit") {                                            // Ending the loop with a break and a console.log
        console.log("Okay, see you later.");
        break;
    }
}