import { Link, useNavigate } from 'react-router-dom';
import style from './MainPage.module.css';
import MainBuddy from './MainBuddy';
import MainStudy from './MainStudy';

const MainPage = () => {
    const navigate = useNavigate();
    const BuddyHandler = () => {
        navigate('/buddy/start1');
    };
    const readyHandler = () => {
        alert("준비중임");
    };

    return <div className={style.container}>
        <button onClick={BuddyHandler} 
        className={style.btn}>
        <MainBuddy />
        </button>
        <button className={style.btn} onClick={readyHandler}>
            <MainStudy />
        </button>
        <footer className={style.footer}>
            <Link to={'/personalinfo'} target='_blank' className={style.ftxt}>
            <span>개인정보처리방침</span>
            </Link>
            <span className={style.ftxt}> | </span>
            <Link to={'/useinfo'} target='_blank' className={style.ftxt}>
            <span>이용약관</span>
            </Link>
        </footer>
    </div>
};

export default MainPage;