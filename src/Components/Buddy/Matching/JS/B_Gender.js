import { useState } from "react";
import con from "../CSS/B_Container.module.css";
import btn2 from "../CSS/B_Btn2.module.css";

const ChoiceGender = (props) => {
  const [isSameClicked, setIsSameClicked] = useState(false);
  const [isDontCareClicked, setIsDontCareClicked] = useState(false);

  const clickSameBtnHandler = () => {
    setIsSameClicked(true);
    setIsDontCareClicked(false);
    const choiceGender = "동성";
    props.sendChoiceGenderData(choiceGender);
  };

  const clickDontCareBtnHandler = () => {
    setIsSameClicked(false);
    setIsDontCareClicked(true);
    const choiceGender = "상관없음";
    props.sendChoiceGenderData(choiceGender);
  };

  const clickSameBtnColor = isSameClicked ? btn2.clicked : btn2.selectBtn;
  const clickDontCareBtnColor = isDontCareClicked
    ? btn2.clicked
    : btn2.selectBtn;

  return (
    <div className={con.container}>
      <p className={con.title}>버디의 성별을 선택해주세요!</p>
      <div>
        <button className={clickSameBtnColor} onClick={clickSameBtnHandler}>
          동성
        </button>
        <button
          className={clickDontCareBtnColor}
          onClick={clickDontCareBtnHandler}
        >
          상관없음
        </button>
      </div>
    </div>
  );
};

export default ChoiceGender;
