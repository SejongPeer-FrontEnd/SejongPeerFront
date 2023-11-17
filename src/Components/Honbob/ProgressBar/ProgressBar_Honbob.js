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

  const navigate = useNavigate();

  const moveRightHandler = () => {
    props.moveNext(true);
  };
  const moveLeftHandler = () => {
    props.moveBefore(true);
  };
  const submitHandler = () => {
    setModalOpen(true);
    setModalContent("HonbobConfirm");
  };
  const moveToMain=()=>{
    navigate("/main");
  }

  useEffect(() => {
    const updateStep = [...step];
    let next = false;
    let prev = false;

    

    if (props.slide === 0) {
      updateStep[0] = true;
      updateStep[1]=false;
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

    if(props.slide===1){
      updateStep[1]=true;
      updateStep[2]=false;
      
      prev=true;
      next=false;
      if(props.myGenderHonbob!==""){
        next=true;
      }
    }

    if(props.slide===2){
      updateStep[2]=true;
      prev=true;
      next=false;
      if(props.choiceGenderHonbob!==""){
        next=true;
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

  const nextClass = canMoveNext ? styles.nextController : styles.nextNonController;
  const prevClass = canMovePrev ? styles.prevController : styles.prevNonController;

  return (
    <div className={styles.progressBarWrapper}>
      <div className={styles.test}>
        <div className={styles.controllerWrapper}>
         {props.slide===0 ? 
          <button 
            className={styles.prevController}
            onClick={moveToMain}
          >
            나가기
          </button>
          :
          <button
            className={prevClass}
            onClick={moveLeftHandler}
            disabled={!canMovePrev}
          >
            이전
          </button>}
          

          {isLastPage ? (
            <button className={styles.submitBtn} onClick={submitHandler}>
              제출
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
