// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to config

    // Important: return the modified config
    return config;
  }
};

/*

    매뉴얼에 따르면 불러올수있는 파일형식을 추가하기 위해서
     loader를 추가하는건 좋지 않다고 합니다.
      그 이유는 클라이언트쪽 코드만 웹팩으로 번들되기 때문에 
      서버사이드렌더링에서 잘 작동하지 않기 때문이라는데요, 
      그 대신 바벨 플러그인을 사용하라고 권고합니다. 
      예를들어 svg 파일을 불러오기 위해서 
      babel-plugin-inline-react-svg 를 사용한다던지 말이죠.
*/

/*

그럼 스타일링은 어떻게?
스타일링에 있어선 가장 추천하는 방식은 styled-jsx 를 사용하는것입니다. 
JS 내부에 CSS를 작성 할 수 있게 해주는 모듈인데요, 
이것 또한 내장되어있기때문에 추가적으로 불러올필요가 없습니다.
 한번 사용해볼까요?
*/
