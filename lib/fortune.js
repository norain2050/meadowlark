/**
 * Created by xinyiba on 16/5/1.
 */
var fortunes = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten"

];

exports.getFortune = function(){
    var idx = Math.floor(Math.random()*fortunes.length);
    return fortunes[idx];
};