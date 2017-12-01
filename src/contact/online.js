import React from "react";
import { Form, Row, Col, Input, Button, message } from "antd";
import apiList from "../web_modules/api/apilist";
// import XLSX from "xlsx";
const FormItem = Form.Item;
const { TextArea } = Input;

class Online extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  handleSearch = () => {
    this.setState({
      loading: true
    });
    this.props.form.validateFields((err, values) => {
      if (!!err) {
        this.setState({
          loading: false
        });
        return;
      } else {
        console.log("$PARANSvalues", values);
        apiList
          .sendEmail(values)
          .then(res => {
            this.setState({
              loading: false
            });
            message.success("提交成功");
          })
          .catch(err => {
            this.setState({
              loading: false
            });
            message.error(err);
          });
      }
    });
  };

  componentDidMount() {
    // this.sendEmail();
    // this.creatExcel(this.jsono)
  }

  //生成excel
  // creatExcel = (json, type) => {
  //   let tmpDown = new Blob;
  //   // let tmpdata = json[0];
  //   json.unshift({});
  //   let keyMap = []; //获取keys
  //   for (var k in tmpdata) {
  //     keyMap.push(k);
  //     json[0][k] = k;
  //   }
  //   let tmpdata = [];//用来保存转换好的json
  //   json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
  //     v: v[k],
  //     position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
  //   }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
  //     v: v.v
  //   });
  //   let outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
  //   let tmpWB = {
  //     SheetNames: ['mySheet'], //保存的表标题
  //     Sheets: {
  //       'mySheet': Object.assign({},
  //         tmpdata, //内容
  //         {
  //           '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
  //         })
  //     }
  //   };
  //   tmpDown = new Blob([this.s2ab(XLSX.write(tmpWB,
  //     {bookType: (type == undefined ? 'xlsx' : type), bookSST: false, type: 'binary'}//这里的数据是用来定义导出的格式类型
  //   ))], {
  //     type: ""
  //   }); //创建二进制对象写入转换好的字节流
  //   console.log("tmpDown", tmpDown)
  //   let href = URL.createObjectURL(tmpDown); //创建对象超链接
  //   console.log('$PARANShref', href)
  //   document.getElementById("hf").href = href; //绑定a标签
  //   document.getElementById("hf").click(); //模拟点击实现下载
  //   setTimeout(function () { //延时释放
  //     URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
  //   }, 100);
  // };
  //
  // s2ab = (s) => { //字符串转字符流
  //   const buf = new ArrayBuffer(s.length);
  //   const view = new Uint8Array(buf);
  //   for (let i = 0; i != s.length; ++i) {
  //     view[i] = s.charCodeAt(i) & 0xFF;
  //   }
  //   return buf;
  // };
  //
  // // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
  // getCharCol = (n) => {
  //   let temCol = '',
  //     s = '',
  //     m = 0
  //   while (n > 0) {
  //     m = n % 26 + 1
  //     s = String.fromCharCode(m + 64) + s
  //     n = (n - m) / 26
  //   }
  //   return s
  // };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading } = this.state;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 }
    };
    return (
      <div className="whiteContent">
        <p className="title">在线留言</p>
        <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
          <Row gutter={40}>
            <Col span={6}>
              <FormItem label="姓名">
                {getFieldDecorator(`name`, {
                  rules: [{ required: true, message: "请输入姓名" }]
                })(<Input placeholder="请输入姓名" />)}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="公司名称">
                {getFieldDecorator(`company`)(
                  <Input placeholder="请输入公司名称" />
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="联系方式">
                {getFieldDecorator(`phone`, {
                  rules: [{ required: true, message: "请输入联系方式" }]
                })(<Input placeholder="请输入联系方式" />)}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="邮箱">
                {getFieldDecorator(`email`, {
                  rules: [{ type: "email", message: "请输入正确的邮箱格式" }]
                })(<Input placeholder="请输入邮箱" />)}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem label="留言内容">
                {getFieldDecorator(`remark`, {
                  rules: [{ required: true, message: "请输入留言内容" }]
                })(
                  <TextArea
                    style={{ height: "100px" }}
                    rows={4}
                    placeholder="请输入留言内容"
                    autosize
                  />
                )}
              </FormItem>
            </Col>
            <Col span={4} offset={20}>
              <Button type="primary" htmlType="submit" loading={loading}>
                提交
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

Online = Form.create()(Online);
export default Online;
