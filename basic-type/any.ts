/**
 * Created by Amaris on 2017/3/6.
 */

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = true;
// 你可能认为Object有相似的作用，就像它在其它语言中那样.
// 但是Object类型的变量只是允许你给它赋任意值,
// 但是却不能够在它上面调用任意的方法，即便它真的有这些方法.

let list: any[] = [1, true, 'free'];
list[1] = 1;