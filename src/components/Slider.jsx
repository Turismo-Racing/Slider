import { useRef, useState } from "react";
import cImg1 from "../assets/images/01.png";
import cImg2 from "../assets/images/02.png";
import cImg3 from "../assets/images/03.png";

import gImg1 from "../assets/images/a.png";
import gImg2 from "../assets/images/b.png";
import gImg3 from "../assets/images/c.png";

import hImg1 from "../assets/images/h1.png";
import hImg2 from "../assets/images/h2.png";
import hImg3 from "../assets/images/h3.png";

import Slide from "./Slide";

import { BiAccessibility, BiAperture, BiAward } from "react-icons/bi";

export default function Slider() {
  const [serises, setSerises] = useState([
    {
      id: 1,
      title: "Evoluzine",
      link: "/",
      products: [
        {
          id: 1,
          img: cImg1,
          link: "/",
          text: "turismo Racing",
          color: "orange",
          catagori: "Wood Chair",
          title: "Evoluzione",
          btnImg: cImg1,
          featured: [
            {
              id: 1,
              title: "main featured 1",
              icon: <BiAward />,
            },
            {
              id: 2,
              title: "main featured 2",
              icon: <BiAperture />,
            },
            {
              id: 3,
              title: "main featured 3",
              icon: <BiAccessibility />,
            },
          ],
        },
        {
          id: 2,
          img: cImg2,
          link: "/",
          text: "turismo Chair",
          color: "Red",
          catagori: "Wood Chair",
          title: "Evoluzione",
          btnImg: cImg2,
          featured: [
            {
              id: 1,
              title: "main featured 1",
              icon: <BiAward />,
            },
            {
              id: 2,
              title: "main featured 2",
              icon: <BiAperture />,
            },
            {
              id: 3,
              title: "main featured 3",
              icon: <BiAccessibility />,
            },
          ],
        },
        {
          id: 3,
          img: cImg3,
          link: "/",
          text: "turismo grey",
          color: "slate grey",
          catagori: "Wood Chair",
          title: "Evoluzione",
          btnImg: cImg3,
        },
      ],
    },
    {
      id: 2,
      title: "Evoluzine Icon",
      link: "/",
      products: [
        {
          id: 1,
          img: gImg1,
          link: "/",
          text: "turismo Racing",
          color: "slate grey",
          catagori: "Gaming Chair",
          title: "Evoluzione Icon",
          btnImg: gImg1,
        },
        {
          id: 2,
          img: gImg2,
          link: "/",
          text: "turismo Racing",
          color: "slate grey",
          catagori: "Gaming Chair",
          title: "Evoluzione Icon",
          btnImg: gImg2,
        },
        {
          id: 3,
          img: gImg3,
          link: "/",
          text: "turismo Racing",
          color: "slate grey",
          catagori: "Gaming Chair",
          title: "Evoluzione",
          btnImg: gImg3,
        },
      ],
    },
    {
      id: 3,
      title: "Evoluzine xl",
      link: "/",
      products: [
        {
          id: 1,
          img: hImg1,
          link: "/",
          text: "turismo Racing",
          color: "slate grey",
          catagori: "Gaming Chair",
          title: "Evoluzione",
          btnImg: hImg1,
        },
        {
          id: 2,
          img: hImg2,
          link: "/",
          text: "turismo Racing",
          color: "slate grey",
          catagori: "Gaming Chair",
          title: "Evoluzione xl",
          btnImg: hImg2,
        },
        {
          id: 3,
          img: hImg3,
          link: "/",
          text: "turismo Racing",
          color: "slate grey",
          catagori: "Gaming Chair",
          title: "Evoluzione xl",
          btnImg: hImg3,
        },
      ],
    },
  ]);

  const ref = useRef();

  const [btnId, setBtnId] = useState(serises[0].id);
  const btnHandler = (e, i) => {
    setBtnId(e);
    ref.current.style.marginLeft = `-${i * 100}%`;
  };
  return (
    <div className="slider">
      <div className="contianer">
        <ul className="slider-btn-wrp">
          {serises.map((serise, i) => (
            <li
              key={i}
              onClick={(e) => btnHandler(serise.id, i)}
              className={`slider-btn ${
                (serise.id === btnId && "active") || ""
              }`}
            >
              <h2>{serise.title}</h2>
              <p>serise</p>
            </li>
          ))}
        </ul>
        <div
          className="slider-wrp"
          ref={ref}
          style={{ width: `${serises.length * 100}%` }}
        >
          {serises.map((serise, i) => (
            <Slide key={i} data={serise} id={btnId} />
          ))}
        </div>
      </div>
    </div>
  );
}
