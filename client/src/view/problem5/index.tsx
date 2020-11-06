import React, { useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";

const Problem5: React.FC = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const answer = "2";
  let history = useHistory();

  const endGame = useCallback(async () => {
    const result = await fetch("/problem/done", {
      method: "PATCH",
    });

    if (!result.ok) {
      alert("뭔가 단단히 잘못됨");
      return;
    }

    history.push("/rank");
  }, []);

  const checkAnswer = useCallback(() => {
    if (answer === userAnswer) {
      console.log("correct");
      endGame();
    } else {
      alert("틀렸습니다!");
    }
  }, [userAnswer]);

  return (
    <S.Problem5>
      <S.ProblemLayout>
        <S.Title>문제 3</S.Title>
        <S.Content>
          강관훈은 과외생에게 이상한 사칙연산을 가르치는 중이다. <br />
          이 사람이 말하고 싶은 사칙연산은 대체 뭘까? <br />
          관관훈의 후예들도 그게 궁금한 부분이다.
          <S.HintContainer>
            <S.HintRow>10 – 6 = 0</S.HintRow>
            <S.HintRow> 8 + 10 = 3</S.HintRow>
            <S.HintRow> 8 – 5 = 2</S.HintRow>
            <S.HintRow> 10 + 12 + 6 = ?</S.HintRow>
          </S.HintContainer>
        </S.Content>
        <S.AnswerContainer>
          <S.InputBox
            placeholder="정답을 입력하세요."
            onChange={(e) => {
              setUserAnswer(e.target.value);
              // console.log(e.target.value);
            }}
          ></S.InputBox>
          <S.SubmitButton onClick={checkAnswer}>입력</S.SubmitButton>
        </S.AnswerContainer>
      </S.ProblemLayout>
    </S.Problem5>
  );
};

export default Problem5;