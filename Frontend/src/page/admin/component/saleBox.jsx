import React from "react";

export default function SaleBox() {
  return (
    <div className="sales-boxes">
      <div className="recent-sales box">
        <div className="title">Recent posts</div>
        <div className="sales-details">
          <ul className="details">
            <li className="topic">Date</li>
            <li>
              <a href="#">02 Jan 2021</a>
            </li>
            <li>
              <a href="#">02 Jan 2021</a>
            </li>
            <li>
              <a href="#">02 Jan 2021</a>
            </li>
            <li>
              <a href="#">02 Jan 2021</a>
            </li>
            <li>
              <a href="#">02 Jan 2021</a>
            </li>
            <li>
              <a href="#">02 Jan 2021</a>
            </li>
            <li>
              <a href="#">02 Jan 2021</a>
            </li>
            <li>
              <a href="#">02 Jan 2021</a>
            </li>
            <li>
              <a href="#">02 Jan 2021</a>
            </li>
          </ul>
          <ul className="details">
            <li className="topic">Customer</li>
            <li>
              <a href="#">Alex Doe</a>
            </li>
            <li>
              <a href="#">David Mart</a>
            </li>
            <li>
              <a href="#">Roe Parter</a>
            </li>
            <li>
              <a href="#">Diana Penty</a>
            </li>
            <li>
              <a href="#">Martin Paw</a>
            </li>
            <li>
              <a href="#">Doe Alex</a>
            </li>
            <li>
              <a href="#">Aiana Lexa</a>
            </li>
            <li>
              <a href="#">Rexel Mags</a>
            </li>
            <li>
              <a href="#">Tiana Loths</a>
            </li>
          </ul>
          <ul className="details">
            <li className="topic">Comments</li>
            <li>
              <a href="#">345</a>
            </li>
            <li>
              <a href="#">123</a>
            </li>
            <li>
              <a href="#">3454</a>
            </li>
            <li>
              <a href="#">234</a>
            </li>
            <li>
              <a href="#">234</a>
            </li>
            <li>
              <a href="#">456</a>
            </li>
            <li>
              <a href="#">234</a>
            </li>
            <li>
              <a href="#">234</a>
            </li>
            <li>
              <a href="#">123</a>
            </li>
          </ul>
          <ul className="details">
            <li className="topic">Like</li>
            <li>
              <a href="#">$204.98</a>
            </li>
            <li>
              <a href="#">$24.55</a>
            </li>
            <li>
              <a href="#">$25.88</a>
            </li>
            <li>
              <a href="#">$170.66</a>
            </li>
            <li>
              <a href="#">$56.56</a>
            </li>
            <li>
              <a href="#">$44.95</a>
            </li>
            <li>
              <a href="#">$67.33</a>
            </li>
            <li>
              <a href="#">$23.53</a>
            </li>
            <li>
              <a href="#">$46.52</a>
            </li>
          </ul>
        </div>
        <div className="button">
          <a href="#">Edit</a>
        </div>
      </div>
      <div className="top-sales box">
        <div className="title">Top favorite songs</div>
        <ul className="top-sales-details">
          <li>
            <a href="#">
              {/*<img src="images/sunglasses.jpg" alt="">*/}
              <span className="product">Vuitton Sunglasses</span>
            </a>
            <span className="price">$1107</span>
          </li>
          <li>
            <a href="#">
              {/*<img src="images/jeans.jpg" alt="">*/}
              <span className="product">Hourglass Jeans </span>
            </a>
            <span className="price">$1567</span>
          </li>
          <li>
            <a href="#">
              {/* <img src="images/nike.jpg" alt="">*/}
              <span className="product">Nike Sport Shoe</span>
            </a>
            <span className="price">$1234</span>
          </li>
          <li>
            <a href="#">
              {/*<img src="images/scarves.jpg" alt="">*/}
              <span className="product">Hermes Silk Scarves.</span>
            </a>
            <span className="price">$2312</span>
          </li>
          <li>
            <a href="#">
              {/*<img src="images/blueBag.jpg" alt="">*/}
              <span className="product">Succi Ladies Bag</span>
            </a>
            <span className="price">$1456</span>
          </li>
          <li>
            <a href="#">
              {/*<img src="images/bag.jpg" alt="">*/}
              <span className="product">Gucci Womens's Bags</span>
            </a>
            <span className="price">$2345</span>
          </li>
          <li>
            <a href="#">
              {/*<img src="images/addidas.jpg" alt="">*/}
              <span className="product">Addidas Running Shoe</span>
            </a>
            <span className="price">$2345</span>
          </li>
          <li>
            <a href="#">
              {/*<img src="images/shirt.jpg" alt="">*/}
              <span className="product">Bilack Wear's Shirt</span>
            </a>
            <span className="price">$1245</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
