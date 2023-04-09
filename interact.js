const words = [ "Hello", "Programming", "Code", "Javascript", "Town", "Country", "Testing"
, "Youtube", "Linkedin", "Twitter", "Github", "Leetcode", "Internet", "Python", "Scala",
"Destructuring", "Paradigm", "Styling", "Cascade", "Documentation", "Coding", "Funny",
"Working", "Dependencies", "Task", "Runner", "Roles", "Test", "Rust", "Playing"];
document.querySelector(".score .total").innerHTML=words.length;
document.querySelector(".start").onclick=function(){
    document.querySelector(".start").remove();
    document.querySelector("input").focus();
    check()
};
let timespan=document.querySelector(".time span");
let duration=6;
timespan.innerHTML=duration;
let upcome=document.querySelector(".upcoming-words")
function check(){
    let random=Math.floor(Math.random()*words.length);
    let chosenword=words[random];
    let index=words.indexOf(chosenword);
    document.querySelector(".the-word").innerHTML=chosenword;
    words.splice(index,1);
    upcome.innerHTML="";
    for(let i=0;i<words.length;i++){
        let newdiv=document.createElement("div");
        let text1=document.createTextNode(words[i]);
        newdiv.appendChild(text1);
        upcome.appendChild(newdiv);
    }
    play()
}
let score=0
document.querySelector(".score .got").innerHTML=score;
function play(){
    duration=6;
    let start=setInterval(() => {
        duration--;
        timespan.innerHTML=duration;
        if(duration==0){
            clearInterval(start);
            if(document.querySelector("input").value.toLocaleLowerCase()===document.querySelector(".the-word").innerHTML.toLocaleLowerCase()){
                score++;
                document.querySelector("input").value="";
                document.querySelector(".score .got").innerHTML=score;
                if(words.length>0){
                    check();
                }else{
                    document.querySelector(".finish").innerHTML="perfect";
                    document.querySelector(".finish").classList.add("good");
                }
            }else{
                document.querySelector(".finish").innerHTML="Game Over";
                document.querySelector(".finish").classList.add("bad");
            }
        }
    }, 1000);
}