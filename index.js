// code your solution here
function superbowlWin(record){
    const answer = record.find(record => record.result === "W");
    return !!answer ? answer.year :undefined;
}

console.log(superbowlWin);