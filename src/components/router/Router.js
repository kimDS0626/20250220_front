import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../style/GlobalStyle.js";
import Header from "../common/Header.js";
import Home from "../common/Home";

import Introduce from "../introduce/Introduce.js";
import Directions from "../introduce/Directions.js";
import Department from "../introduce/Department.js";

import Notice from "../board/notice/Notice.js";

import UserReserv from "../reservation/UserReserv.js";
import NonUserReserve from "../reservation/NonUserReserve.js";

import OnlineCounsel from "../board/onlinecounsel/OnlineCounsel.js";
import OnlienCounselWrite from "../board/onlinecounsel/OnlienCounselWrite.js";
import OnlineCounselUpdate from "../board/onlinecounsel/OnlineCounselUpdate.js";

import Review from "../board/review/Review.js";

import SignIn from "../user/login/SignIn.js";
import SignUp from "../user/login/SignUp.js";
import FindId from "../user/login/FindId.js";
import FindPw from "../user/login/FindPw.js";

import MyPage from "../user/mypage/MyPage.js";

import AdminHome from "../admin/AdminHome.js";
import Footer from "../common/Footer.js";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/introduce" element={<Introduce />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="/department" element={<Department />} />

        <Route path="/notice" element={<Notice />}></Route>

        <Route path="/userreserv" element={<UserReserv />}></Route>
        <Route path="/nonuserreserve" element={<NonUserReserve />}></Route>

        <Route path="/onlineCounsel" element={<OnlineCounsel />}></Route>
        <Route
          path="/onlienCounselWrite"
          element={<OnlienCounselWrite />}
        ></Route>
        <Route
          path="/onlienCounselUpdate"
          element={<OnlineCounselUpdate />}
        ></Route>

        <Route path="/review" element={<Review />}></Route>

        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/findId" element={<FindId />} />
        <Route path="/findPw" element={<FindPw />} />

        <Route path="/mypage" element={<MyPage />}></Route>

        <Route path="/admihome" element={<AdminHome />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default Router;
