import React from "react";
import { Row, Col } from "antd";
import contact02 from "web_modules/images/contact02.png";
import contact01 from "web_modules/images/contact01.png";
import "./style.less";

export default class Contract extends React.Component {
  componentDidMount() {
    // 百度地图API功能
    var map = new BMap.Map("allmap"); // 创建Map实例
    const point = new BMap.Point(121.047893, 31.259444);
    map.centerAndZoom(point, 20); // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    map.setCurrentCity("昆山"); // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
  }

  render() {
    return (
      <div className="contactContainer">
        <div className="contentContainer">
          <p className="title">联系我们</p>
          <Row className="whiteContent" style={{ marginTop: "0" }}>
            <Col span={8}>
              <div className="contact01" />
            </Col>
            <Col span={8} className="pl30">
              <p className="font14 textColorGrey line20">
                地址：江苏昆山市千灯镇季广北路119号
              </p>
              <p className="font14 textColorGrey line20 mb12">
                Address: No.119 North Jiguang Road, Qiandeng Town, Kunshan City,
                Jiangsu Province, China.
              </p>
              <p className="font14 textColorGrey line20">
                电话 (Tel)：400-775-9100
              </p>
              <p className="font14 textColorGrey line20">
                传真 (Fax)：86 0512 57463631
              </p>
              <div
                className="font14 textColorGrey line20"
                style={{ display: "flex" }}
              >
                <span style={{ display: "inline-block" }}>网址 (web)：</span>
                <div style={{ display: "inline-block" }}>
                  <p>http://www.bntfloorcare.com</p>
                  <p>http://bntfloorcare.1688.com</p>
                </div>
              </div>
              {/*<p className="font14 textColorGrey line20 pl80">*/}
              {/*http://bntfloorcare.1688.com*/}
              {/*</p>*/}
              <p className="font14 textColorGrey line20 mb12">
                邮箱 (e-mail)：bnt@bntfloorcare.com
              </p>
              <p className="font14 textColorGrey line20">
                南通工厂:南通邦纳特清洁设备有限公司
              </p>
              <p className="font14 textColorGrey line20">
                地址:南通滨海园区启动区北区
              </p>
            </Col>
            <Col span={7} offset={1}>
              <div className="smallLogoCon">
                <div className="smallLogo">{/*<img src={contact03} />*/}</div>
              </div>
              <p className="logoTextCh">昆山市贝纳特机械设备有限公司</p>
              <p className="logoTextEn">
                Kunshan Bennett Cleaning Machine Co.,Ltd.
              </p>
              <p className="logoTel">全国热线 400-775-9100 </p>
              <div className="qrcode">
                <img src={contact02} />
              </div>
            </Col>
          </Row>
          <div
            id="allmap"
            style={{
              width: "100%",
              height: "700px",
              border: "50px solid #000",
              marginTop: "50px"
            }}
          />
        </div>
      </div>
    );
  }
}
