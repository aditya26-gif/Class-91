p1_name = localStorage.getItem("p1_name");
p2_name = localStorage.getItem("p2_name");

p1_score = 0;
p2_score = 0;

document.getElementById("p1_name").innerHTML = p1_name + " : ";
document.getElementById("p2_name").innerHTML = p2_name + " : ";

document.getElementById("p1_score").innerHTML = p1_score;
document.getElementById("p2_score").innerHTML = p2_score;

document.getElementById("p_question").innerHTML = "Question turn: " + p1_name;
document.getElementById("p_answer").innerHTML = "Answer turn:" + p2_name;

function send()
{
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    new_word = get_word.toLowerCase();
    console.log("word in lowercase =" + word);
    len=word.length;
    
    for(var i=2;i<len; )
    {
        temp=word.charAt(i);
        word=word.replace(temp,"_");
        i=i+2;
    }

    console.log(word);

    question_word = "<h4 id='word_display'> Q. "+word+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'></input>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
