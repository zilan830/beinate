import React from "react";
import { Pagination, Icon } from "antd";
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
  onLeft = () => {
    const { index } = this.state;
    this.setState({
      index: index - 1
    });
  };
  onRight = () => {
    const { index } = this.state;
    this.setState({
      index: index + 1
    });
  };
  render() {
    const { index } = this.state;
    return (
      <div>
        <div className="whiteContent">
          <p className="title">贝纳特宣传册 Brochure</p>
        </div>
        <div className="imgContainer publicImg">
          <span
            onClick={this.onLeft}
            style={index === 1 ? { "pointer-events": "none" } : {}}
            className="arrow left"
          >
            <Icon type="left" />
          </span>
          <div className="publicity">
            <img src={`http://47.92.123.27:8888/xcc/${index}.jpg`} />
          </div>
          <span
            onClick={this.onRight}
            style={index === 44 ? { "pointer-events": "none" } : {}}
            className="arrow right"
          >
            <Icon type="right" />
          </span>
          <Pagination
            style={{ textAlign: "center", marginTop: "10px" }}
            total={440}
            current={index}
            onChange={this.pageOnChange}
          />
        </div>
      </div>
    );
  }
}
