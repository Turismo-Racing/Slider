import { useRef, useState } from "react";

import ivEvo from "../assets/images/evoluzione-ivory.png";
import slEvo from "../assets/images/evoluzione-slate.png";
import blEvo from "../assets/images/evoluzione-black.png";
import ivEvoI from "../assets/images/evoluzione-ivory-icon.png"
import slEvoI from "../assets/images/evoluzione-slate-icon.png"
import blEvoI from "../assets/images/evoluzione-black-icon.png"

import onEvo from "../assets/images/evoluzione-onyx.png";
import chEvo from "../assets/images/evoluzione-charcoal.png";
import buEvo from "../assets/images/evoluzione-blue.png";
import onEvoI from "../assets/images/evoluzione-onyx-icon.png";
import chEvoI from "../assets/images/evoluzione-charcoal-icon.png";
import buEvoI from "../assets/images/evoluzione-blue-icon.png";
/*
import blXL from "../assets/images/xl-black.png";
import buXL from "../assets/images/xl-blue.png";
import blXLI from "../assets/images/xl-black-icon.png";
import buXLI from "../assets/images/xl-blue-icon.png";
*/
import Slide from "./Slide";

import { BiAccessibility, BiAperture, BiAward } from "react-icons/bi";

export default function Slider() {
  const [serises, setSerises] = useState([
    {
      id: 1,
      title: "Evoluzione",
      link: "/",
      products: [
        {
          id: 1,
          img: ivEvo,
          link: "/",
          text: "Turismo Racing",
          color: "Ivory Grey",
          catagori: "Gaming Chair",
          title: "Evoluzione",
          btnImg: ivEvoI,
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
          img: slEvo,
          link: "/",
          text: "Turismo Racing",
          color: "Slate Grey",
          catagori: "Gaming Chair",
          title: "Evoluzione",
          btnImg: slEvoI,
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
          img: blEvo,
          link: "/",
          text: "Turismo Racing",
          color: "Black",
          catagori: "Gaming Chair",
          title: "Evoluzione",
          btnImg: blEvoI,
        },
      ],
    },
    {
      id: 2,
      title: "Evoluzione Icon",
      link: "/",
      products: [
        {
          id: 1,
          img: onEvo,
          link: "/",
          text: "Turismo Racing",
          color: "Onyx Black",
          catagori: "Gaming Chair",
          title: "Evoluzione Icon",
          btnImg: onEvoI,
        },
        {
          id: 2,
          img: chEvo,
          link: "/",
          text: "Turismo Racing",
          color: "Charcoal Black ",
          catagori: "Gaming Chair",
          title: "Evoluzione Icon",
          btnImg: chEvoI,
        },
        {
          id: 3,
          img: buEvo,
          link: "/",
          text: "Turismo Racing",
          color: "Blue Black",
          catagori: "Gaming Chair",
          title: "Evoluzione Icon",
          btnImg: buEvoI,
        },
      ],
    },
    /*{
      id: 3,
      title: "Evoluzine XL",
      link: "/",
      products: [
        {
          id: 1,
          img: blXL,
          link: "/",
          text: "Turismo Racing",
          color: "Black",
          catagori: "Gaming Chair",
          title: "Evoluzione XL",
          btnImg: blXLI,
        },
        {
          id: 2,
          img: buXL,
          link: "/",
          text: "Turismo Racing",
          color: "Blu",
          catagori: "Gaming Chair",
          title: "Evoluzione XL",
          btnImg: blXLI,
        },
      ],
    },*/
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
              <p>series</p>
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
