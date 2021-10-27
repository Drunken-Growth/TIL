// 문제이해
// 가로(W), 세로(H) 길이가 주어질 때, 대각선으로 선을 그어 깨지는 사각형은 사용하지 못한다.
// 사용가능한 정사각형의 개수는?

// 문제 풀이
// 1. 전체개수(가로 * 세로)에서 대각선에 걸친 사각형개수를 빼준다.
// 2. 잘리는 개수는 (가로/세로)의 비율의 올림 * 더 작은 길이

// 2차풀이 (ref참고)
// 대각선을 지나는 사각형은 가로 + 세로 - 두수의 최대공약수 라는 공식이 있음

function solution(w, h) {
  // a,b 에 대하여 r = a % b 일 때  a와 b의 최대공약수는 b와 r (나눈수와 그 나머지)의 최대공약수와 같다.
  // b, r의 최대공약수는 다시  r` = b % r 로 나누어 생각하므로 (나눈수와 그 나머지) r, r` 의 최대공약수
  // 반복하여 나머지가 0이 되었을 때의 나누는 수가 a, b의 최대공약수이다.
  function gcdEuclidean(a, b) {
    if (b === 0) {
      // 나머지가 0이면
      return a;
    }
    return gcdEuclidean(b, a % b);
  }
  let entire = w * h;
  let cut = w + h - gcdEuclidean(w, h);
  return entire - cut;
}
// 1차 풀이
// 케이스별 그려보며, 예외케이스 발견했지만 결국 실패

// function solution(w, h) {
//     let entire = w * h
//     let cut = Math.ceil(Math.max(w/h, h/w)) * Math.min(w,h)
//     if(w > 1 && h > 1 && w % 2 === 1 && h % 2 === 1 && w !== h) cut++
//     return entire - cut
// }
