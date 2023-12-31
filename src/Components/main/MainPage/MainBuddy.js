import buddyText2 from "../../../Assets/buddyText2.png";
import sejongBuddycat from "../../../Assets/sejongBuddycat.png";

import style from "./MainBuddy.module.css";

const MainBuddy = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapperLeft}>
        <img className={style.left} src={buddyText2} alt="buddyText2" />
        <p className={style.text}>새로운 캠퍼스 짝꿍 찾기</p>
      </div>

      <div className={style.wrapperRight}>
        <img
          className={style.right}
          src={sejongBuddycat}
          alt="sejongBuddycat"
        />
      </div>
    </div>
  );
};

export default MainBuddy;
