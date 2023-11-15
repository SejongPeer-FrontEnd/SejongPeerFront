import honbobEscape from "../../../Assets/honbobEscape.png";
import honbobImg from "../../../Assets/honbobImg.png";

import style from "./MainHonbob.module.css";

const MainHonbob = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapperLeft}>
        <img className={style.left} src={honbobEscape} alt="honbobEscape" />
        <p className={style.text}>혼밥하기 싫을 때</p>
      </div>

      <div className={style.wrapperRight}>
        <img className={style.right} src={honbobImg} alt="honbobImg" />
      </div>
    </div>
  );
};

export default MainHonbob;