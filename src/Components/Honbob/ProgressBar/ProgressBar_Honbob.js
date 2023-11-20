import React, { useContext, useState, useEffect } from "react";
import styles from "./ProgressBar_Honbob.module.css";
import { MyContext } from "../../../App.js";
import { useNavigate } from "react-router-dom";
const ProgressBar = (props) => {
  const [step, setStep] = useState(Array(3).fill(false));
  const [canMoveNext, setCanMoveNext] = useState(false);
  const [canMovePrev, setCanMovePrev] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);
  const { setModalOpen } = useContext(MyContext);
  const { setModalContent } = useContext(MyContext);
  const [clickedPrev, setClickedPrev] = useState(false);

  const navigate = useNavigate();

  const moveRightHandler = () => {
    props.moveNext(true);
  };
  const moveLeftHandler = () => {
    setClickedPrev(true);
    props.moveBefore(true);
  };

  const { honbobSubmit, setHonbobSubmit } = useContext(MyContext);

  const searchHandler = () => {
    if (canMoveNext === true) {
      setHonbobSubmit(true);
    }
  };
  const moveToMain = () => {
    const backToMain = window.confirm(
      "확인을 누르면 메인 화면으로 이동합니다.\n지금까지 작성한 내용들이 모두 초기화 됩니다."
    );
    if (backToMain) {
      navigate("/main");
    }
  };

  useEffect(() => {
    const updateStep = [...step];
    let next = false;
    let prev = false;

    if (props.slide === 0) {
      updateStep[0] = true;
      updateStep[1] = false;
      prev = true;
      next = false;
      if (
        props.phoneNumHonbob !== "" &&
        props.phoneNumHonbob.length === 11 &&
        props.kakaoHonbob !== ""
      ) {
        next = true;
      }
    } else {
      setIsLastPage(false);
    }

    if (props.slide === 1) {
      updateStep[1] = true;
      updateStep[2] = false;

      prev = true;
      next = false;
      if (props.myGenderHonbob !== "") {
        next = true;
        if (!clickedPrev) {
          props.slideMove(props.slide + 1);
        }
      }
    }

    if (props.slide === 2) {
      updateStep[2] = true;
      prev = true;
      next = false;
      setIsLastPage(true);
      if (props.choiceGenderHonbob !== "") {
        next = true;
      }
    }

    setStep(updateStep);
    setCanMoveNext(next);
    setCanMovePrev(prev);
  }, [
    props.choiceGenderHonbob,
    props.myGenderHonbob,
    props.phoneNumHonbob,
    props.kakaoHonbob,
    props.slide,
  ]);

  const nextClass = canMoveNext
    ? styles.nextController
    : styles.nextNonController;
  const prevClass = canMovePrev
    ? styles.prevController
    : styles.prevNonController;

  return (
    <div className={styles.progressBarWrapper}>
      <div className={styles.test}>
        <div className={styles.controllerWrapper}>
          {props.slide === 0 ? (
            <button className={styles.prevController} onClick={moveToMain}>
              나가기
            </button>
          ) : (
            <button
              className={prevClass}
              onClick={moveLeftHandler}
              disabled={!canMovePrev}
            >
              이전
            </button>
          )}

          {isLastPage ? (
            <button className={nextClass} onClick={searchHandler}>
              찾기
            </button>
          ) : (
            <button
              className={nextClass}
              onClick={moveRightHandler}
              disabled={!canMoveNext}
            >
              다음
            </button>
          )}
        </div>
        <div className={styles.barWrapper}>
          {step.map((step, index) => (
            <div
              key={index}
              className={styles.progress}
              style={{
                backgroundColor: step ? "#4F41DE" : "#ccc",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
