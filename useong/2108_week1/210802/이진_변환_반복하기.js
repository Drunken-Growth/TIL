function solution(s) {
  let zero_count = 0;
  let delete_count = 0;

  while (s.length !== 1) {
    const init_len = s.length;
    delete_count += 1;
    s = s
      .split("")
      .filter((v) => v === "1")
      .join("");
    const cur_len = s.length;

    zero_count += init_len - cur_len;

    s = cur_len.toString(2);
  }

  return [delete_count, zero_count];
}

/*
1. 0을 제거해주는 함수 필요 => 제거 횟수 카운트, 제거한 0의 개수 카운트
2. 0을 제거하고 난 후에 결과 저장
3. 1이 되야 종료
*/
