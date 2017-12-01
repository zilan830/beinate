const React = require("react");
const ReactRouter = require("react-router");
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const IndexRedirect = ReactRouter.IndexRedirect;
const Template = require("./template");
const Activity = require("./activity");
const Cases = require("./cases");
const Center = require("./center");
const Company = require("./company");
const Contact = require("./contact");
const Home = require("./home");
const ProductCenter = require("./productCenter");
const ProductSever = require("./productSever");
const ProductDetail = require("./productDetail");
require("normalize.css");
require("./web_modules/style/style.less");

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Template}>
          <Route path="home" component={Home} />
          <Route path="productCenter(/:id)" component={ProductCenter} />
          <Route path="productCenterDetail(/:id)" component={ProductDetail} />
          <Route path="productSever(/:id)" component={ProductSever} />
          <Route path="company" component={Company} />
          <Route path="activity" component={Activity} />
          <Route path="contact" component={Contact} />
          <Route path="cases" component={Cases} />
          <Route path="center" component={Center} />
          <IndexRedirect to="home" />
        </Route>
      </Router>
    );
  }
}

module.exports = App;
