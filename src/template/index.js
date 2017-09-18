import React from "react";
import { Link } from "react-router";
import busIcon from "web_modules/images/icLogo.png";
import { Row, Col, Radio } from "antd";
import logoImg from "web_modules/images/logo.png";
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

class Template extends React.Component {
  // getChildContext() {
  //   return {
  //     router:this.context.router
  //   };
  // }

  constructor(props) {
    super(props);
    const column = [
      {
        name: "首页",
        path: "/home",
        selected: true,
        key: "home"
      },
      {
        name: "产品中心",
        path: "/productCenter",
        selected: false,
        key: "productCenter"
      },
      {
        name: "产品服务",
        path: "/productSever",
        selected: false,
        key: "productSever"
      },
      {
        name: "贝纳特",
        path: "/company",
        selected: false,
        key: "company"
      },
      {
        name: "公司动态",
        path: "/activity",
        selected: false,
        key: "activity"
      },
      {
        name: "联系我们",
        path: "/contact",
        selected: false,
        key: "contact"
      },
      {
        name: "案例集锦",
        path: "/cases",
        selected: false,
        key: "cases"
      },
      {
        name: "授权服务中心",
        path: "/center",
        selected: false,
        key: "center"
      }
    ];
    // if(this.context.router){
    //   console.log("this.context.router",this.context.router)
    // }
    this.state = {
      column
    };
  }

  componentWillMount(nextProps) {
    console.log("nextProps.location", nextProps);
  }

  componentDidMount() {
    console.log("$PARANSthis.props.location", this.props.location);
    const width = document.getElementById("en").clientWidth;

    const { column } = this.state;
    const route = window.location.href;
    column.forEach((item, index) => {
      item.selected = false;
    });
    for (const item of column) {
      if (route.indexOf(item.key) > -1) {
        item.selected = true;
        break;
      }
    }
    this.setState({
      column
    });
  }

  onClick(key) {
    const { column } = this.state;
    column.forEach((item, index) => {
      item.selected = false;
    });
    for (const item of column) {
      if (item.key === key) {
        item.selected = true;
        break;
      }
    }
    this.setState({
      column
    });
  }

  onLanguageChange = () => {
    window.location.href = "http://www.english.bntfloorcare.com";
  };

  render() {
    const { column } = this.state;
    const navContent = column.map(item => {
      return (
        <Col
          key={item.key}
          className={item.selected ? "navItem active" : "navItem"}
          onClick={() => {
            this.onClick(item.key);
          }}
        >
          <Link to={item.path}>
            {item.name}
          </Link>
        </Col>
      );
    });
    return (
      <div className="container">
        <header className="header font-hei">
          <div className="logoContainer">
            <img src={logoImg} className="logoImg" />
            <div className="sloganContainer">
              <p id="ch">
                <span>高</span>
                <span>端</span>
                <span>清</span>
                <span>洁</span>
                <span>设</span>
                <span>备</span>
                <span>引</span>
                <span>领</span>
                <span>者</span>
              </p>
              <p id="en">High-end Cleaning Machine Leader</p>
            </div>
            <div className="languageChangeCon">
              <RadioGroup>
                <RadioButton value="large" disabled>
                  中文
                </RadioButton>
                <RadioButton
                  value="large"
                  onClick={() => {
                    this.onLanguageChange();
                  }}
                >
                  English
                </RadioButton>
              </RadioGroup>
            </div>
          </div>
        </header>
        <nav className="navigation">
          <Row className="navInnerContainer">
            {navContent}
          </Row>
        </nav>
        <div className="content">
          {this.props.children}
        </div>
        <footer className="footer">
          <Row className="footCon">
            <Col span={20} className="footLink">
              <Link
                to="/contact"
                className="footLinkTag"
                onClick={() => {
                  this.onClick("contact");
                }}
              >
                联系我们
              </Link>
              <p>
                <span>昆山市贝纳特机械设备有限公司</span>
                <span>地址：江苏省昆山市千灯镇季广北路119号</span>
                <span>
                  <a href="http://www.miibeian.gov.cn/" target="_blank">
                    苏IPC备11072808
                  </a>
                </span>
              </p>
            </Col>
            <Col span={4} className="busIcon">
              <a
                href="http://www.szgswljg.gov.cn/license?id=29551"
                target="_blank"
              >
                <img src={busIcon} />
              </a>
            </Col>
          </Row>
        </footer>
      </div>
    );
  }
}

// Template.contentType = {
//   router: React.PropTypes.string,
// };
//
// Template.childContextTypes = {
//   router:React.PropTypes.string,
// };

export default Template;
