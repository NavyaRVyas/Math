player1_name=localStorage.getItem(player1_name);
player2_name=localStorage.getItem(player2_name);
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn-"+ player1_name;
document.getElementById("player_answer").innerHTML="answer turn-"+ player2_name;
function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in Lowarcase = "+word);
    char1=word.charAt(1);
    console.log(char1);
    length_divide_2=Math.floor(word.length/2);
    char2=word.charAt(length_divide_2);
    console.log(char2);
    length_minus_1=word.length-1;
    char3=word.charAt(length_minus_1);
    console.log(char3);
    remove_char1=word.replace(char1,"_");
    remove_char2=remove_char1.replace(char2,"_");
    remove_char3=remove_char2.replace(char3,"_");
    console.log(remove_char3);
    question_word="<h4 id='word_display'> Q. "+remove_char3+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br></br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}