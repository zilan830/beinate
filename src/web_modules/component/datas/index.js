import React from "react";
import baseReq from "../../api/base";

const getDisplayName = Component =>
  Component.displayName || Component.name || "Component";

const dataHoc = ({ url, data }, mapResponseToProps) => WrapperComponent => {
  class Data extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        propsAddtion: {}
      };
    }
    componentWillMount() {
      // request
      baseReq(url, data)
        .then(res => {
          return mapResponseToProps(res.data);
        })
        .then(propsAddtion => {
          this.setState({ propsAddtion });
        })
        .catch(error => console.log(error));
    }
    render() {
      const props = Object.assign({}, this.props, this.state.propsAddtion);
      return <WrapperComponent {...props} />;
    }
  }
  Data.displayName = `HOC(${getDisplayName(WrapperComponent)})`;
  return Data;
};
export default dataHoc;
