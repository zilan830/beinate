import React from "react";
import { Row, Col } from "antd";
import supplies2 from "web_modules/images/sp.png";
import supplies3 from "web_modules/images/xd.png";
import supplies4 from "web_modules/images/jt135.png";
import supplies5 from "web_modules/images/xsdj1.png";
import supplies7 from "web_modules/images/zp123.png";
import supplies8 from "web_modules/images/supplies8.jpg";
import supplies9 from "web_modules/images/supplies9.jpg";
import bj1 from "web_modules/images/bj.png";
import ds1 from "web_modules/images/ds1.png";
import ds2 from "web_modules/images/ds2.png";
import hc1 from "web_modules/images/hc1.png";
import hc2 from "web_modules/images/hc2.png";
import hc3 from "web_modules/images/hc3.png";
import hc4 from "web_modules/images/hc4.png";
import jt1 from "web_modules/images/jt135.png";
import jt2 from "web_modules/images/jt246.png";
import jt7 from "web_modules/images/jt79.png";
import jt8 from "web_modules/images/jt810.png";
import lz1 from "web_modules/images/lz1.png";
import lz2 from "web_modules/images/lz2.png";
import sb1 from "web_modules/images/sb1.png";
import sb2 from "web_modules/images/sb2.png";
import ts1 from "web_modules/images/ts.png";
import xd1 from "web_modules/images/xds12.png";
import xd3 from "web_modules/images/xds3.png";
import xd4 from "web_modules/images/xds4.png";
import xd5 from "web_modules/images/xds56.png";
import xs1 from "web_modules/images/xsdj1.png";
import xs2 from "web_modules/images/xsdj2.png";
import xs3 from "web_modules/images/xsdj3.png";
import zp1 from "web_modules/images/zp123.png";
import zp4 from "web_modules/images/zp456.png";
import zp5 from "web_modules/images/zp5.png";
import zp6 from "web_modules/images/zp6.png";
import zp7 from "web_modules/images/zp7.png";
import zp8 from "web_modules/images/zp8.png";

const column = [
  {
    name: "百洁垫",
    imgPath: bj1,
    key: "bj",
    selected: true
  },
  {
    name: "刷盘电机",
    imgPath: supplies2,
    key: "sp"
  },
  {
    name: "洗地刷",
    imgPath: supplies3,
    key: "xd"
  },
  {
    name: "胶  条",
    imgPath: supplies4,
    key: "jt"
  },
  {
    name: "吸水电机",
    imgPath: supplies5,
    key: "xs"
  },
  {
    name: "手柄套",
    imgPath: sb1,
    key: "sb"
  },
  {
    name: "针  盘",
    imgPath: supplies7,
    key: "zp"
  },
  {
    name: "缓冲器",
    imgPath: hc1,
    key: "hc"
  },
  {
    name: "地刷",
    imgPath: ds2,
    key: "ds"
  },
  {
    name: "毯刷",
    imgPath: ts1,
    key: "ts"
  },
  {
    name: "轮子",
    imgPath: lz1,
    key: "lz"
  }
];
//需要填写的耗材名称，同上Column
//洗地机
const washColumn = [
  {
    name: "百洁垫",
    imgPath: bj1,
    key: "bj",
    selected: true
  },
  {
    name: "洗地刷",
    imgPath: supplies3,
    key: "xd"
  },
  {
    name: "针盘",
    imgPath: supplies7,
    key: "zp"
  },
  {
    name: "刷盘电机",
    imgPath: supplies2,
    key: "sp"
  },
  {
    name: "吸水电机",
    imgPath: supplies5,
    key: "xs"
  },
  {
    name: "胶条",
    imgPath: supplies4,
    key: "jt"
  }
];
//扫地机
const rubColumn = [
  {
    name: "边刷",
    imgPath: supplies8,
    key: "bs",
    selected: true
  },
  {
    name: "滚刷",
    imgPath: supplies9,
    key: "gs"
  }
];
//擦地机
const sweepColumn = [
  {
    name: "手套柄",
    imgPath: sb1,
    key: "sb",
    selected: true
  },
  {
    name: "缓冲器",
    imgPath: hc1,
    key: "hc"
  },
  {
    name: "轮子",
    imgPath: lz1,
    key: "lz"
  },
  {
    name: "地刷",
    imgPath: ds2,
    key: "ds"
  },
  {
    name: "针盘",
    imgPath: zp4,
    key: "cdzp"
  },
  {
    name: "毯刷",
    imgPath: ts1,
    key: "ts"
  }
];

const bjColumn = [
  {
    photo: bj1,
    type: "",
    size: "13寸",
    auto: "Hussar 660B、Ranger 660B、Clever 660BT"
  },
  {
    photo: bj1,
    type: "",
    size: "15寸",
    auto: "Hussar 760B"
  },
  {
    photo: bj1,
    type: "",
    size: "17寸",
    auto: "Hussar 860B、Smart 450B、Smart 450E"
  },
  {
    photo: bj1,
    type: "",
    size: "20寸",
    auto: "Ranger 510B、Smart 510B、Clever 510B、Clever 510E、Clever 510BT"
  }
];

const spColumn = [
  {
    photo: supplies2,
    type: "700121",
    size: "650W",
    auto: "Smart 450B、Smart 510B、Clever 510B、Clever 510BT、Ranger 510B"
  },
  {
    photo: supplies2,
    type: "700251,700241",
    size: "400W",
    auto: "Clever 660BT、Ranger 660B、Hussar 660B、Hussar 760B、Hussar 860B"
  }
];
const xdColumn = [
  {
    photo: xd1,
    type: "242071",
    size: "13寸",
    auto: "Hussar 660B、Ranger 660B、Clever 660BT"
  },
  {
    photo: xd1,
    type: "242081",
    size: "15寸",
    auto: "Hussar 760B"
  },
  {
    photo: xd3,
    type: "242091",
    size: "17寸",
    auto: "Hussar 860B"
  },
  {
    photo: xd4,
    type: "805653",
    size: "17寸",
    auto: "Smart 450B、Smart 450E"
  },
  {
    photo: xd5,
    type: "242041",
    size: "20寸",
    auto: "Ranger 510B、Smart 510B、Clever 510B、Clever 510E、Clever 510BT"
  }
];
const jtColumn = [
  {
    photo: jt1,
    type: "880753/880752/880750",
    size: "前/中/后",
    property: "普通",
    auto: "Smart 450B"
  },
  {
    photo: jt2,
    type: "880753/880751/880750",
    size: "前/中/后",
    property: "耐油",
    auto: "Smart 450B"
  },
  {
    photo: jt1,
    type: "880753/250241/880750",
    size: "前/中/后",
    property: "普通",
    auto: "Smart 510B、Clever 510B、Clever 510BT"
  },
  {
    photo: jt2,
    type: "880753/250231/880750",
    size: "前/中/后",
    property: "耐油",
    auto: "Smart 510B、Clever 510B、Clever 510BT"
  },
  {
    photo: jt1,
    type: "860706/050201/860707",
    size: "前/中/后",
    property: "普通",
    auto: "Clever 660BT"
  },
  {
    photo: jt2,
    type: "860706/250321/860707",
    size: "前/中/后",
    property: "耐油",
    auto: "Clever 660BT"
  },
  {
    photo: jt7,
    type: "250341/250351",
    size: "前/后",
    property: "普通",
    auto: "Ranger 660B,510B"
  },
  {
    photo: jt8,
    type: "250341/250361",
    size: "前/后",
    property: "耐油",
    auto: "Ranger 660B,510B"
  },
  {
    photo: jt7,
    type: "250381/250391",
    size: "前/后",
    property: "普通",
    auto: "Hussar 660,760,860"
  },
  {
    photo: jt8,
    type: "250381/250401",
    size: "前/后",
    property: "耐油",
    auto: "Hussar 660,760,860"
  }
];
const xsColumn = [
  {
    photo: xs1,
    type: "700131",
    size: "",
    auto: "Smart 450B、Smart 510B"
  },
  {
    photo: xs2,
    type: "700151",
    size: "",
    auto: "Clever 510B、Clever 510BT、Clever660BT"
  },
  {
    photo: xs3,
    type: "700261",
    size: "",
    auto: "Ranger 510B、Ranger 660B、Hussar 660B、Hussar 760B、Hussar 860B"
  }
];
const sbColumn = [
  {
    photo: sb1,
    type: "210021",
    size: "",
    auto: "PX-170N、PX-200N、PX-170DS、PX-170、PX-170G、PX-200、HPX-1500"
  },
  {
    photo: sb2,
    type: "210111",
    size: "",
    auto: "SPX-170N.SPX-170W、SPX-170DS.SPX-170"
  }
];
const zpColumn = [
  {
    photo: zp1,
    type: "240091",
    size: "13寸",
    auto: "Hussar 660B、Ranger 660B、Clever 660BT"
  },
  {
    photo: zp1,
    type: "240101",
    size: "15寸",
    auto: "Hussar 760B"
  },
  {
    photo: zp1,
    type: "240111",
    size: "17寸",
    auto: "Hussar 860B"
  },
  {
    photo: zp4,
    type: "240061",
    size: "17寸",
    auto: "Smart 450B、Smart 450E"
  },
  {
    photo: zp4,
    type: "240071",
    size: "20寸",
    auto: "Ranger 510B、Smart 510B、Clever 510B、Clever 510E、Clever 510BT"
  }
];
const cdzpColumn = [
  {
    photo: zp6,
    type: "240041",
    size: "17寸",
    auto: "PX-170N、PX-170DS、PX-170、PX-170G、SPX-170N、SPX-170W、SPX-170DS、SPX-170"
  },
  {
    photo: zp7,
    type: "240051",
    size: "20寸",
    auto: "PX-200N、PX-200"
  },
  {
    photo: zp8,
    type: "240011",
    size: "21寸",
    auto: "HPX-1500"
  }
];
const hcColumn = [
  {
    photo: hc1,
    type: "250011",
    size: "17寸",
    auto: "PX-170N、PX-170DS、PX-170、PX-170G"
  },
  {
    photo: hc2,
    type: "250061",
    size: "17寸",
    auto: "SPX-170N、SPX-170W、SPX-170DS、SPX-170"
  },
  {
    photo: hc3,
    type: "250021",
    size: "20寸",
    auto: "PX-200N、PX-200"
  },
  {
    photo: hc4,
    type: "250081",
    size: "21寸",
    auto: "HPX-1500"
  }
];
const dsColumn = [
  {
    photo: ds2,
    type: "242011",
    size: "17寸",
    auto: "PX-170N、PX-170DS、PX-170、PX-170G、SPX-170N、SPX-170W、SPX-170DS、SPX-170"
  },
  {
    photo: ds2,
    type: "242021",
    size: "20寸",
    auto: "PX-200N、PX-200"
  }
];
const tsColumn = [
  {
    photo: ts1,
    type: "242012",
    size: "17寸",
    auto: "PX-170N、SPX-170N、SPX-170W、SPX-170"
  }
];
const lzColumn = [
  {
    photo: lz1,
    type: "250091",
    size: "4寸",
    auto: "HPX-1500"
  },
  {
    photo: lz2,
    type: "250051",
    size: "5寸",
    auto:
      "PX-170N、PX-200、PX-170DS、PX-170、PX-170G、PX-200、PX-170G、SPX-170N、SPX-170W、SPX-170DS、SPX-170、HPX-1500"
  }
];
const bsColumn = [
  {
    photo: supplies8,
    type: "211411",
    auto: "Tornado 700BD、Tornado 700BS"
  }
];
const gsColumn = [
  {
    photo: supplies9,
    type: "242101",
    auto: "Tornado 700BD、Tornado 700BS"
  }
];

export default class Supplies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: washColumn,
      contentColumn: bjColumn
    };
  }

  componentDidMount() {
    const { type } = this.props;
    this.setColumn(type);
  }

  componentWillReceiveProps(props) {
    if (props.type !== this.props.type) {
      const type = props.type;
      this.setColumn(type);
    }
  }

  setColumn = type => {
    switch (type) {
      case "SuppliesWash":
        this.getKey(washColumn);
        this.setState({
          column: washColumn
        });
        break;
      case "SuppliesRub":
        this.getKey(sweepColumn);
        this.setState({
          column: sweepColumn
        });
        break;
      case "SuppliesSweep":
        this.getKey(rubColumn);
        this.setState({
          column: rubColumn
        });
        break;
    }
  };

  getKey = column => {
    for (const item of column) {
      if ((item.selected = true)) {
        this.handleOnClick(item.key);
        break;
      }
    }
  };

  handleOnClick = key => {
    const { column } = this.state;
    let contentColumn = [];
    column.forEach(item => {
      item.selected = false;
    });
    for (const item of column) {
      if (item.key === key) {
        item.selected = true;
        break;
      }
    }

    switch (key) {
      case "bj":
        contentColumn = bjColumn;
        break;
      case "sp":
        contentColumn = spColumn;
        break;
      case "xd":
        contentColumn = xdColumn;
        break;
      case "jt":
        contentColumn = jtColumn;
        break;
      case "xs":
        contentColumn = xsColumn;
        break;
      case "sb":
        contentColumn = sbColumn;
        break;
      case "zp":
        contentColumn = zpColumn;
        break;
      case "hc":
        contentColumn = hcColumn;
        break;
      case "ds":
        contentColumn = dsColumn;
        break;
      case "ts":
        contentColumn = tsColumn;
        break;
      case "lz":
        contentColumn = lzColumn;
        break;
      case "bs":
        contentColumn = bsColumn;
        break;
      case "gs":
        contentColumn = gsColumn;
        break;
      case "cdzp":
        contentColumn = cdzpColumn;
        break;
      default:
        break;
    }

    this.setState({
      column,
      contentColumn
    });
  };

  render() {
    const { type } = this.props;
    const { column, contentColumn } = this.state;
    let name = "";
    switch (type) {
      case "SuppliesWash":
        name = "洗地机";
        break;
      case "SuppliesSweep":
        name = "扫地机";
        break;
      case "SuppliesRub":
        name = "擦地机";
        break;
      default:
        break;
    }
    const imgContent = column.map(item => {
      return (
        <Col
          data-name={item.name}
          key={item.key}
          className={item.selected ? "itemImgCon hover" : "itemImgCon"}
          onClick={() => {
            this.handleOnClick(item.key);
          }}
        >
          <div className="imgCon">
            <img
              style={{ width: "100px", height: "auto" }}
              src={item.imgPath}
            />
          </div>
        </Col>
      );
    });
    const trContent = contentColumn.map(item => {
      return (
        <tr>
          <td>
            <img style={{ width: "50px" }} src={item.photo} />
          </td>
          <td>
            {item.type}
          </td>
          <td>
            {item.size}
          </td>
          {item.hasOwnProperty("property")
            ? <td>
                {item.property}
              </td>
            : null}
          <td>
            {item.auto}
          </td>
        </tr>
      );
    });
    return (
      <div className="productServerContainer">
        <p className="title">{`耗材-${name}系列`}</p>
        <div className="suppliesImgCons">
          <Row className="suppliesImgCon">
            {imgContent}
          </Row>
        </div>
        <div className="textContent suppliesTableCon">
          <table className="suppliesIntTable">
            <tr>
              <th>照片</th>
              <th>产品零件号</th>
              <th>
                {contentColumn === jtColumn ? "位置" : "尺寸"}
              </th>
              {contentColumn === jtColumn ? <th>性能</th> : null}
              <th>适用机型</th>
            </tr>
            {trContent}
          </table>
        </div>
      </div>
    );
  }
}
