# React-router-dom v6 tutorial

## 1. Route

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="search" element={<Search />} />
</Routes>
```

- 기존 쓰던 Switch 사라지고 Routes로 대체
- component => element로 변경
- props도 바로 전달가능하게 변경 (기존에는 콜백함수를 활용했다.)
- path의 경우 "/"를 생략
- exact도 사라짐
- \*로 어떤 주소든 적용 가능

```jsx
// anything 주소에는 어떤게 뒤에 더붙어도 해당 엘레멘트 보여줌
<Route path="anything/*" element={<div>암거나 떠라 모르겟다.</div>} />
```

## 2. Dynamic Route

```jsx
<Route path="search" element={<Search />}>
  {/* /search */}
  <Route index element={<SearchHome />} />

  {/* /search/:keyword */}
  <Route path=":keyword" element={<SearchDetail />} />

  {/* /search/more */}
  <Route path="more" element={<SearchMore />} />

  {/* /search/more/random */}
  <Route path="*" element={<p>명시되지 않은 주소는 걍 이거 보여줘</p>} />
</Route>
```

- index라는 속성은 해당 주소에서 default 컴포넌트.
- Outlet을 활용하여 라우트안에 서브라우트 표시 가능해짐.

```jsx
import React from "react";
import { Outlet } from "react-router-dom";

const Search = () => {
  return (
    <>
      <div>
        <h2>검색페이지</h2>
        <input />
      </div>

      {/* 서브라우트들이 Outlet에 렌더된다. */}
      <Outlet />
    </>
  );
};

export default Search;
```

- 기본 레이아웃도 Outlet 활용해서 사용할 수도 있음

<strong>Layout.jsx</strong>

```jsx
import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/common/Footer";
import NavLink from "../components/common/NavLink";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
```

<strong>App.jsx</strong>

```jsx
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 명시된 주소들은 레이아웃의 헤더와 푸터를 반영해준다.*/}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="search" element={<Search />}>
            <Route index element={<SearchHome />} />
            <Route path=":keyword" element={<SearchDetail />} />
            <Route path="more" element={<SearchMore />} />
          </Route>
        </Route>

        {/* 명시되지 않은 주소들은 404페이지를 표시하고 헤더와 푸터도 보이지 않게 했다. */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## Link

- 기존 Link와 똑같음
- 해당 주소에서 라우터 훅스없이 상대주소로 이동가능해짐.

```jsx
{
  /* 현재 페이지가 /my 라고 하면 아래 링크는 /myinfo로 절대주소 이동함*/
}
<Link to="/myinfo">내 정보</Link>;

{
  /* /my/myinfo로 상대주소 이동가능해짐 */
}
<Link to="myinfo">내 정보</Link>;
```

- useHistory 삭제 후 useNavigate로 대체됨
- useNavigate 또한 "/"를 제외하면 상대주소로 이동함

```jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const linkData = [
    { path: "/", name: "home" },
    { path: "/search", name: "search" },
    { path: "/search/more", name: "search more" },
  ];

  const navigator = useNavigate();
  const moveHome = () => {
    navigator("/"); // history.push()와 같음
  };

  return (
    <>
      <h1>Ranja React-Router-Dom v6 tutorial</h1>
      <ul>
        {linkData.map((data, i) => {
          return (
            <li key={i}>
              <Link to={data.path}>{data.name}</Link>
            </li>
          );
        })}
        <li onClick={moveHome}>Home이랑께</li>
      </ul>
    </>
  );
};

export default NavBar;
```

- NavLink의 activeClassName, activeStyle 사라짐

```jsx
<NavLink
  // style={{color: 'blue'}}
  // activeStyle={{color: 'red'}}
  style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
  // className="nav-primary"
  // activeClassName="nav-activated"
  className={({ isActive }) => (isActive ? "nav-primary" : "nav-activated")}
>
  집
</NavLink>
```
