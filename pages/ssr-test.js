import Layout from "../components/Layout";
import axios from "axios";
import { Component } from "react";

class SSRTest extends Component {
  /*
        only next js에서만 사용할 수 있다. getInitialProps
    */
  static async getInitialProps({ req }) {
    // return req
    //   ? { from: "server" } // 서버에서 실행 할 시
    //   : { from: "client " }; // 클라이언트에서 실행 할 시

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return { users: response.data };
  }

  render() {
    console.log("TEST", this.props);
    const { users } = this.props;

    const userList = users.map(user => <li key={user.id}>{user.username}</li>);

    return (
      <Layout>
        <ul>{userList}</ul>
      </Layout>
    );
  }
}

export default SSRTest;
