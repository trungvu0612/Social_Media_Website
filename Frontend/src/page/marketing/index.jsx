import React from "react";

export default function Marketing() {
  function parallax(element, distance, speed) {
    const itemMarketing = document.querySelector(element);
    itemMarketing.style.transform = `translateY(${distance * speed}px)`;
  }

  window.addEventListener("scroll", function (e) {
    parallax(
      ".marketing main .about .container .about__img .parallax",
      window.scrollY,
      -0.7
    );
    parallax(".marketing main .about .container .title", window.scrollY, -0.5);
    parallax(
      ".marketing main .about .container .contain",
      window.scrollY,
      -0.5
    );
    parallax(
      ".marketing main .background .container .background__slowgan-title",
      window.scrollY,
      -0.1
    );
    parallax(".register .container .register__btn", window.scrollY, -0.2);
  });
  return (
    <div className="marketing">
      <header className="marketing__header">
        <div className="container">
          <div className=" header__logo">
            <a href="/admin-login.html">
              <img src="/img/logo1.svg" />
            </a>
          </div>
          <div className="header__menu ">
            <span />
          </div>
        </div>
      </header>
      <main>
        {/* background */}
        <section className="background">
          <div className="container">
            <div className="background__slowgan">
              <h2 className="background__slowgan-title">
                enjoy <br />
                the world
                <br /> in a healthy way
              </h2>
            </div>
          </div>
        </section>
        {/* about my website */}
        <section className="about">
          <div className="container">
            <div className="title">
              <h2>
                About <span className="title__stroke">M &amp; C</span>
              </h2>
            </div>
            <div className="contain">
              <p>
                Music and life go hand in hand. So join and experience my{" "}
                <span className="title__stroke">M &amp; C</span> music social
                network now
              </p>
            </div>
            <div className="about__img">
              <img src="/img/about.jpg" className="parallax" />
            </div>
          </div>
        </section>
        {/* register and go home page */}
        <section className="register">
          <div className="container">
            <div className="register__btn">
              <div className="register__btn-in">
                <a href="/login.html">Register</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="header__logo">
            <a href="#">
              <img src="/img/logo1.svg" />
            </a>
          </div>
          <div className="footer__center">
            <h2>M &amp; C</h2>
          </div>
          <div className="footer__author">
            <p>create by: Vu Thanh Trung</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
