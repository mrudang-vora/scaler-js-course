/*
 90 to 100  - A
 70 to 89   - B
 50 to 69   - C
 < 50       - F
*/

var studentScore = 90;
if(studentScore >= 90){
    console.log("You scored A");
}else if(studentScore >= 70 && studentScore < 90){
    console.log("You scored B");
}else if(studentScore >= 50 && studentScore < 70){
    console.log("You scored C");
}else{
    console.log("You scored F");
}