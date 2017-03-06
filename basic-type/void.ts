/**
 * Created by Amaris on 2017/3/6.
 */

function warnUser(): void {
    alert('this is a warning message.');
}

//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
let unusable1: void = undefined;
let unusable2: void = null;