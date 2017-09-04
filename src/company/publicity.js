import React from "react";
import { Pagination } from "antd";
import publicity from "web_modules/images/publicity.png";

// let imgs = [];
// for (let i = 1; i < 45; i++) {
//   imgs.push({
//     img: require(`./public/${i}.jpg`)
//   })
// }

export default class Publicity extends React.Component {
  state = {
    index: 1
  };
  pageOnChange = page => {
    this.setState({
      index: page
    });
  };

  render() {
    const { index } = this.state;
    return (
      <div>
        <div className="whiteContent">
          <p className="title">贝纳特宣传册 Brochure</p>
        </div>
        <div className="imgContainer">
          <div className="publicity">
            <img src={`http://47.92.123.27:8888/xcc/${index}.jpg`} />
          </div>
          <Pagination
            style={{ textAlign: "center", marginTop: "10px" }}
            size="small"
            total={440}
            onChange={this.pageOnChange}
          />
        </div>
      </div>
    );
  }
}
