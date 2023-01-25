import { Carousel } from "antd";

import pulseira from "../../img/pulseira-viking.webp";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#512522",
};
const App = () => (
  <Carousel autoplay>
    <div>
      <img style={contentStyle} src={pulseira} alt="pulseira" />
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default App;
