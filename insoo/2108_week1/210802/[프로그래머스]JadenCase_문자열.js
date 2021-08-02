// 문제이해
// 문자열을 입력받아, 띄어쓰기를 기준으로 각 첫 문자를 대문자, 나머지는 소문자로 바꾸어 리턴

// 문제풀이
// 1. 문자열을 split
// 2. 일단 전부 LowerCase로 바꾸고, 1번째문자만 대문자로 변경
// 3. join

function solution(s) {
  let arrS = s.split(" ");

  for (let i = 0; i < arrS.length; i++) {
    if (arrS[i] === "") continue;
    arrS[i] = arrS[i][0].toUpperCase() + arrS[i].toLowerCase().slice(1);
  }
  return arrS.join(" ");
}

console.log(solution("3people unFollowed me"));
// "3people Unfollowed Me"
console.log(solution("hEllo      world"));
// "Hello     World"
