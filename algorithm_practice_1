// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let sortedArray = A.sort((a,b) => a - b);
    let missingInts = [];

    for(let i = 0; i < sortedArray.length; i++) {
        if(sortedArray[i+1] - sortedArray[i] === 0 || sortedArray[i+1] - sortedArray[i] === 1) {
            continue;
        } else {
            return missingInts.push(sortedArray[i+1])
        }
    }
    console.log(missingInts);
    let smallestInt = Math.min(...missingInts);
    console.log(smallestInt);
}



//Make a program that filters a list of strings and returns a list with only your friends name in it.
//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! 
//Otherwise, you can be sure he's not...

function friend(friends){
  
    let myFriends = [];
    
    for (let i = 0; i< friends.length; i++){
      if (friends[i].length === 4 && isNaN(friends[i]) ){
        myFriends.push(friends[i])
      }
    }
      return myFriends;
  
  
}

function friend(friends){
  
    const result = friends.filter(friend => friend.length === 4);
    
    return result;
    
    
  }

console.log(friend(["Mike", "John", "Anna", "Bob"]));
