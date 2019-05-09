/**
 * []   [^ ]   -   .   
 *  ^   $   \b  \B
 *  量词 ?   +   *   {}
 */

 /************************************************************************************************
// Part 11111111111111111  11111111111111111  11111111111111111
//字符类 [] 
/**
 * [ ]代表字符类，
 * [^ ]代表字符类取反
 * 一个 - 代表范围
 * 一个 . 代表一个除了*回车和换行符*之外的所有字符 等效于[^\r\n]
 */
console.log("absxsdfe123Ab".replace(/[abd]/,"X"));      // Xbsxsdfe123Ab
console.log("absxsdfe123Ab".replace(/[abd]/g,"X"));     // XXsxsXfe123AX
console.log("absxsdfe123Ab".replace(/[abd]/gi,"X"));    // XXsxsXfe123XX

// 字符类 的取反 [^]
console.log("absxsdfe123Ab".replace(/[^abd]/,"X"));     // abXxsdfe123Ab
console.log("absxsdfe123Ab".replace(/[^abd]/g,"X"));    // abXXXdXXXXXXb
console.log("absxsdfe123Ab".replace(/[^abd]/gi,"X"));   // abXXXdXXXXXAb

//范围类
console.log("12345667".replace(/[3-9]/gi,"X")); // 12XXXXXX
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"X")); // XXsxsXXXXXXXX
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"X")); // absxsdfX23Ab 字母连数字 如果单独替换，则需要分组，见后续
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"X"));    // absxsdfX2Xb

//思考：如何匹配 -
console.log("2017-10-23".replace(/[0-9]/g,"X"));    // XXXX-XX-XX
console.log("2017-10-23".replace(/[0-9-]/g,"X"));   // XXXXXXXXXX
console.log("2017-10-23".replace(/[7-]/g,"X"));   // 201XX10X23
console.log("2017-10-23".replace(/[-]/g,"X"));   // 2017X10X23

// \d、\D、\w、\W、\s、\S 用[]如何表示
// [0-9]
// [^0-9]
// [a-zA-Z_0-9]
// [^a-zA-Z_0-9]
// [\t\n\x0B\f\r]
// [^\t\n\x0B\f\r]

//关于 . 除了回车和换行符之外的所有字符
/ab[0-9][^\r\n]/ //等效于/[ab\d.]/
console.log("@abc@123@".replace(/@./g,"Q"));    // QbcQ23@
console.log("@abc@123@".replace(/.@/g,"Q"));    // @abQ12Q

/************************************************************************************************ */
// Part 2222222222222222  2222222222222222  2222222222222222  2222222222222222
//关于边界 ^ $ \b \B
/**
 *  ^ : 匹配输入的开始。
 *  例如：/^A/ 并不会匹配 "an A" 中的 'A'，但是会匹配 "An E" 中的 'A'。
 */
console.log("This is a Boy is".replace(/is/g,0));   // Th0 0 a Boy 0
console.log("This is a Boy is".replace(/^is/g,0));  // This is a Boy is
console.log("This is a Boy is".replace(/^T/g,0));   // 0his is a Boy is

/**
 *  $ : 匹配输入的结束。
 *  例如，/t$/ 并不会匹配 "eater" 中的 't'，但是会匹配 "eat" 中的 't'。
 */
console.log("This is a Boy is".replace(/is$/g,0));  // This is a Boy 0

/**
 *  \b : 匹配一个词的边界
 *  一个词的边界就是一个词不被另外一个“字”字符跟随的位置或者没有其他“字”字符在其前面的位置。
 *  注意，一个匹配的词的边界并不包含在匹配的内容中。
 *  换句话说，一个匹配的词的边界的内容的长度是0。
 */
console.log("This is a Boy is".replace(/is\b/g,0)); // Th0 0 a Boy 0

/**
 *  \B : 匹配一个非单词边界
 *  他匹配一个前后字符都是相同类型的位置：都是“字”字符或者都不是“字”字符。
 *  一个字符串的开始和结尾都被认为不是“字”字符，或者空字符串。
 */
console.log("This is a Boy is".replace(/is\B/g,0));   // This is a Boy is
console.log("This is a Boy isss".replace(/is\B/g,0)); // This is a Boy 0ss
console.log("This is a Boy is".replace(/\bis/g,0));   // This 0 a Boy 0
console.log("This is a Boy is".replace(/\Bis/g,0));   // Th0 is a Boy is

/************************************************************************************************
// Part 33333333333333333333  33333333333333333333  33333333333333333333
//思考如何匹配 12345789abcdef34534789ede
"12345789abcdef34534789ede".replace(/\d\d\d\d\d\d\d\d/g,"X"); // "XabcdefXede"不用量词的写法，非常不好
"123456789abcdef34534789ede".replace(/\d{8}/g,"X");  // "X9abcdefXede"  8个数字替换为 X

//量词 注意*在这里是量词，不是充当通配符，充当通配符的是 .
//? 出现0次或1次（最多出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));      // 0Bb0b_0aBbb0ba  A + a出现0次或1次

//+ 出现1次或多次（至少出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0));      // 0BbAb_0BbbAba

//* 出现0次或多次（任意次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g,0));      // 0Bb0b_0Bbb0ba

//{n}  n是一个正整数，匹配了前面一个字符刚好发生了n次。
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1}/g,0));    // 0BbAb_0aBbbAba
console.log("AaBbAb_AaaBbbAba".replace(/Aa{2}/g,0));    // AaBbAb_0BbbAba

//{n,m} 出现n到m次   至少n次，最多m次。如果 n 或者 m 的值是0， 这个值被忽略。
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,2}/g,0));  // 0BbAb_0BbbAba

//{n,} 出现至少n次
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,}/g,0)); // AaBbAb_0BbbAba000
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,4}/g,0));    // AaBbAb_0BbbAba0aa00

//注意：0到n次的写法{0,n}而不是{,n}

//思考：
var reg = /d{20}\w\d?\w+\d*\w{3,5}\d{3,}/;
