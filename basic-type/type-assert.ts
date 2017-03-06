/**
 * Created by Amaris on 2017/3/6.
 */

//尖括号语法
let someValue: any = 'this is a string';
let strLength1: number = (<string>someValue).length;

//as语法
let strLength2: number = (someValue as string).length;