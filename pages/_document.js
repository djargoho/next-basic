import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

/*
    만약에 여러페이지에서 공통적으로 사용하는 헤더
    page 디렉토리에 _document.js 파일을 만든뒤 밑 처럼 작성
    default 값을 정한다고 생각하면 된다.
*/
export default class MyDocument extends Document {
  //velopert 방식
  //안되는 부분이니 나중에 수정이 필요
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    const styles = flush(); // flush 가 있는 이유는 스타일링 섹션에서 다시 다룰것
    //Head 컴포넌트가 사용된 페이지의 경우엔 이 default 값 위에 덮어씌운다
    return { html, head, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Next.js 연습!</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

/*

선 styled-jsx 는 기본적으로 클라이언트 사이드에서 스타일링이 이뤄집니다.
 flush() 함수는 jsx-styled로 된 스타일링 작업을 서버사이드에서 사전작업을 해주는데요,
  서버사이드에서 꼭 실행하지 않아도 
  클라이언트 쪽에서 컴포넌트가 불러와지면서 스타일링을 하기 때문에 상관은 없지만 
  클라이언트가 스타일을 만들기위해 필요한 연산을 아껴줍니다. 
  결국 더 빠른 페이지로딩을 할 수 있게 되겠죠.
  저의 경우엔 SASS 를 사용하는걸 선호하는데, 
  아무래도 나중에 사용하게된다면 아예 sass 파일을 빌드한다음에 
  _document.js 에서 불러와서 사용하게 될 것 같군요.
*/
