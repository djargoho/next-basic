import Link from "next/link";

const linkStyle = {
  marginRight: "1rem"
};
/*
 *
 prefetch 기능 사용하기
여기서 더 멋진 기능은 prefetch 기능인 것 같습니다.

이건 Link 컴포넌트를 사용해서 이뤄지는건데요. 
링크 컴포넌트를 렌더링할때 <Link prefetch href="..."> 
형식으로 prefetch 값을 전달해주면 데이터를 먼저 불러온다음에 라우팅을 시작합니다.
데이터를 먼저 불러온후 라우팅을 한다.
Header.js 컴포넌트를 다음과 같이 수정해보세요: 
근데 이제 필요 없어짐 이제 기본으로 적용됌
 */
const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>홈</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>소개</a>
      </Link>
      <Link href="/ssr-test">
        <a style={linkStyle}>SSR 테스트</a>
      </Link>
    </div>
  );
};

export default Header;
