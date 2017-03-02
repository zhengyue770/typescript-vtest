/**
 * Created by Amaris on 2017/3/2.
 */
//多行文本与内嵌表达式
var name1 = "Gene";
var age = 37;
var sentence = "Hello, my name is " + name1 + ".\n\nI'll be " + (age + 1) + " years old next month.";
document.body.innerHTML = sentence;
