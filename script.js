class friendInfo {
    constructor(name, flyingSkill, dejarikSkill, galacticFear, currentCandidate) {
      this.name = name;
      this.flyingSkill = parseInt(flyingSkill);
      this.dejarikSkill = parseInt(dejarikSkill);
      this.galacticFear = parseInt(galacticFear);
      this.currentCandidate = currentCandidate;
    }
  }

  class Friend {
    constructor() {
      this.newfriend = [];
    }
    add(info) {
      this.newfriend.push(info);
    }
    print() {
      for (let i = 0; i < this.newfriend.length; i++) {
        console.log(this.newfriend[i]);
      }
    } 
    rank() {
      let bestFriend = null;
      let worstFriend = null;
      for (let i = 0; i < this.newfriend.length; i++) {
            const friends = this.newfriend[i];
            friends.currentCandidate = friends.flyingSkill + friends.dejarikSkill - friends.galacticFear;
            if (friends.currentCandidate > bestFriend){
              bestFriend = friends.name;
            }
              console.log(`${bestFriend} is the best friend for Chewbacca.`);
            if (friends.currentCandidate > worstFriend){
              worstFriend = friends.name;
            }
            console.log(`${worstFriend} is the worst friend for Chewbacca.`);
      }
    }
  }

const user = new Friend;
user.add(new friendInfo("Spongebob", 5, 5, 2)); // 8
user.add(new friendInfo("Patrick", 6, 6, 2));   // 10
user.add(new friendInfo("Squidward", 2, 6, 1)); // 5


while (true) {
    const choice = prompt("Would you like to add a new potential friend, print the list or quit");
    if (choice === "add") {
        const name = prompt("Enter name: ");
        const flyingSkill = prompt("Enter flying skill: ");
        const dejarikSkill = prompt("Enter Dejarik skill: ");
        const galacticFear = prompt("Enter fear level: ");
        user.add(new(name, flyingSkill, dejarikSkill, galacticFear));
    } else if (choice === "print") {
        user.print();
        user.rank();
    } else if (choice === "quit") {                                           
        console.log("Okay, see you later!!");
        break;
    }
}




