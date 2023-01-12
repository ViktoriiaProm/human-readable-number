module.exports = function toReadable(number) {
    const num = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const ty = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const numString = number.toString();
    if (number === 0) {
        return "zero";
    }
    if (number < 20) {
        return num[number];
    }
    if (numString.length === 2) {
        const strNum = ty[numString[0]] + " " + num[numString[1]];
        return strNum.trim();
    }
    if (numString.length === 3) {
        if (numString[1] === "0" && numString[2] === "0")
            return num[numString[0]] + " hundred";
        else
            return (
                num[numString[0]] +
                " hundred " +
                toReadable(+(numString[1] + numString[2]))
            );
    }
    return "";
};
