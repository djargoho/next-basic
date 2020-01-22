import Layout from "../components/Layout";
/*

loader 방식이 안좋기 때문..
그럼 스타일링은 어떻게?
스타일링에 있어선 가장 추천하는 방식은 styled-jsx 를 사용하는것입니다. 
JS 내부에 CSS를 작성 할 수 있게 해주는 모듈인데요, 
이것 또한 내장되어있기때문에 추가적으로 불러올필요가 없습니다.
 밑에 예시가 styled-jsx를 사용하는 것 고민
*/
const About = () => (
  <Layout>
    <style jsx>
      {`
        h2 {
          color: green;
        }
      `}
    </style>
    <h2>안녕하세요 저는 최재현입니다.. 입니다..</h2>
  </Layout>
);

export default About;
