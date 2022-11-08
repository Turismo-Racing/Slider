import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Slide({ data, id }) {
  const [product, setProduct] = useState({});
  const ref = useRef();
  const ref1 = useRef();

  const [btnId, setBtnId] = useState(1);
  const btnHnadler = (e) => {
    setProduct(e);
    setBtnId(e.id);
  };

  useEffect(() => {
    setProduct(data.products[0]);
    ref.current.style.transition = "0s";
    ref.current.style.transform = "translateY(110%)";
    // details box
    ref1.current.style.transition = "0s";
    ref1.current.style.transform = "translateX(-100%)";

    const timer = setTimeout(() => {
      ref.current.style.transition = "1s";
      ref.current.style.transform = "translateY(0)";
      // details box
      ref1.current.style.transition = "1s";
      ref1.current.style.transform = "translateX(0)";
    }, 1000);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div className="slide">
      <Link to={data.link}>
        <img className="slide-img" src={product.img} alt="" />
      </Link>

      <h2 className="watermark">{data.title}</h2>
      <div className="hidden">
        <ul className="slide-btn-wrp" ref={ref}>
          {data.products.map((product, i) => (
            <li
              key={i}
              onClick={(e) => btnHnadler(product)}
              className={`slide-btn ${
                (product.id === btnId && "active") || ""
              }`}
            >
              <img src={product.btnImg} alt="" />

              <div className="slide-btn-text">
                <h3>{product.color}</h3>
                <p>{product.catagori}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="slide-details">
        <div className="hide" ref={ref1}>
          <div className="slide-details-top">
            <span>{product.text}</span>
            <strong>{product.title}</strong>
            <strong>{product.color}</strong>
            <p>{product.catagori}</p>
          </div>
          <div className="slide-details-mid">
            <strong>Main Feature</strong>

            <ul>
              {product.featured?.map((feature, i) => (
                <li key={i}>
                  <span>{feature.title}</span>
                  <span>{feature?.icon}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link to={data.link} className="slide-details-bottom">
            get The {product.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
