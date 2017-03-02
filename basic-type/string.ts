/**
 * Created by Amaris on 2017/3/2.
 */

//一般字符串
let name: string = "bob";

//多行文本与内嵌表达式
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;

document.body.innerHTML = sentence;