import Font from "../Font";

import quadrada01 from "../../assets/nails/quadrada/quadrada1.jpg";
import quadrada02 from "../../assets/nails/quadrada/quadrada2.jpg";
import quadrada03 from "../../assets/nails/quadrada/quadrada3.jpg";
import quadrada04 from "../../assets/nails/quadrada/quadrada4.jpg";
import quadrada05 from "../../assets/nails/quadrada/quadrada5.jpg";
import quadrada06 from "../../assets/nails/quadrada/quadrada6.jpg";

export function Quadrada() {
  return (
    <div className="nail">
      <Font text="Quadrada" />
      <div className="card-nail">
        <img src={quadrada01} alt="" />
        <img src={quadrada02} alt="" />
        <img src={quadrada03} alt="" />
        <img src={quadrada04} alt="" />
        <img src={quadrada05} alt="" />
        <img src={quadrada06} alt="" />
      </div>
    </div>
  );
}

import almond01 from "../../assets/nails/almond/almond1.jpg";
import almond02 from "../../assets/nails/almond/almond2.jpg";
import almond03 from "../../assets/nails/almond/almond3.jpg";
import almond04 from "../../assets/nails/almond/almond4.jpg";
import almond05 from "../../assets/nails/almond/almond5.jpg";
import almond06 from "../../assets/nails/almond/almond6.jpg";

export function Almond() {
  return (
    <div className="nail">
      <Font text="Almond" />
      <div className="card-nail">
        <img src={almond01} alt="" />
        <img src={almond02} alt="" />
        <img src={almond03} alt="" />
        <img src={almond04} alt="" />
        <img src={almond05} alt="" />
        <img src={almond06} alt="" />
      </div>
    </div>
  );
}

import stiletto01 from "../../assets/nails/stiletto/stiletto1.jpg";
import stiletto02 from "../../assets/nails/stiletto/stiletto2.jpg";
import stiletto03 from "../../assets/nails/stiletto/stiletto3.jpg";
import stiletto04 from "../../assets/nails/stiletto/stiletto4.jpg";
import stiletto05 from "../../assets/nails/stiletto/stiletto5.jpg";
import stiletto06 from "../../assets/nails/stiletto/stiletto6.jpg";

export function Stiletto() {
  return (
    <div className="nail">
      <Font text="Stiletto" />
      <div className="card-nail">
        <img src={stiletto01} alt="" />
        <img src={stiletto02} alt="" />
        <img src={stiletto03} alt="" />
        <img src={stiletto04} alt="" />
        <img src={stiletto05} alt="" />
        <img src={stiletto06} alt="" />
      </div>
    </div>
  );
}
