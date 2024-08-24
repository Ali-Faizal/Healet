import React, { useState } from "react";
import Slider from "react-slick";
// Importing images
import img2 from "./assets/images/p1.png";
import img3 from "./assets/images/p2.png";
import img4 from "./assets/images/p3.png";
import img5 from "./assets/images/p4.png";
import img6 from "./assets/images/p5.png";
import img7 from "./assets/images/p6.png";
import img8 from "./assets/images/p7.png";
import img9 from "./assets/images/p8.png";
import aboutImg from "./assets/images/about-img.jpg";
import offerImg1 from "./assets/images/o1.jpg";
import offerImg2 from "./assets/images/o2.jpg";
import offerImg3 from "./assets/images/o3.jpg";
import blogImg1 from "./assets/images/b1.jpg";
import blogImg2 from "./assets/images/b2.jpg";
import clientImg from "./assets/images/client.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  var settings = {
    dots: true,
    autoplay: true,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };
  const [navbar, setNavbar] = useState(false);

  const openNav = () => {
    setNavbar(!navbar);
    document.getElementById("myNav").classList.toggle("menu_width");
    document
      .querySelector(".custom_menu-btn")
      .classList.toggle("menu_btn-style");
  };

  return (
    <>
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <span>Healet</span>
            </a>
            <div className="custom_menu-btn">
              <button onClick={openNav}>
                <span className="s-1"> </span>
                <span className="s-2"> </span>
                <span className="s-3"> </span>
              </button>
              <div id="myNav" className={`overlay `}>
                <div className="overlay-content">
                  <a href="index.html">Home</a>
                  <a href="about.html">About</a>
                  <a href="shop.html">Shop</a>
                  <a href="blog.html">Blog</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="slider_section position-relative">
        <div className="slider_bg_box bg-back">
          {/* <img src={img1} alt="" /> */}
        </div>
        <div className="slider_bg"></div>
        <div className="container">
          <div className="col-md-9 col-lg-8">
            <div className="detail-box">
              <h1>
                Best Jewellery
                <br /> Collection
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div>
                <a href="" className="slider-link">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Latest Products</h2>
          </div>
          <div className="row">
            {[
              { img: img2, name: "Necklace", price: "$200" },
              { img: img3, name: "Necklace", price: "$300" },
              { img: img4, name: "Necklace", price: "$110" },
              { img: img5, name: "Ring", price: "$45" },
              { img: img6, name: "Ring", price: "$95" },
              { img: img7, name: "Earrings", price: "$70" },
              { img: img8, name: "Earrings", price: "$400" },
              { img: img9, name: "Necklace", price: "$450" },
            ].map((product, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                <div className="box">
                  <a href="">
                    <div className="img-box">
                      <img src={product.img} alt="" />
                    </div>
                    <div className="detail-box">
                      <h6>{product.name}</h6>
                      <h6>
                        Price <span>{product.price}</span>
                      </h6>
                    </div>
                    <div className="new">
                      <span>New</span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-box">
            <a href="">View All Products</a>
          </div>
        </div>
      </section>

      <section className="about_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={aboutImg} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offer_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 px-0">
              <div className="box offer-box1">
                <img className="hoverImg" src={offerImg1} alt="" />
                <div className="detail-box">
                  <h2>Upto 15% Off</h2>
                  <a href="">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="col-md-5 px-0">
              <div className="box offer-box2">
                <img  src={offerImg2} alt="" />
                <div className="detail-box">
                  <h2>Upto 10% Off</h2>
                  <a href="">Shop Now</a>
                </div>
              </div>
              <div className="box offer-box3">
                <img src={offerImg3} alt="" />
                <div className="detail-box">
                  <h2>Upto 20% Off</h2>
                  <a href="">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog_section">
        <div className="container">
          <div className="heading_container">
            <h2>Latest From Blog</h2>
          </div>
          <div className="row">
            {[
              { img: blogImg1, date: "14 July", title: "Blog 1" },
              { img: blogImg2, date: "15 July", title: "Blog 2" },
            ].map((blog, index) => (
              <div key={index} className="col-md-6">
                <div className="box">
                  <div className="img-box hoverImgbox">
                    <img className="hoverImg" src={blog.img} alt="" />
                    <h4 className="blog_date">{blog.date}</h4>
                  </div>
                  <div className="detail-box">
                    <h5>{blog.title}</h5>
                    <p>Some random text here about the blog.</p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="client_section layout_padding">
        <div className="heading_container">
          <h2>Testimonial</h2>
        </div>
        <Slider {...settings}>
          <div className="row">
            <div className="col-md-11 col-lg-10 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={clientImg} alt="" />
                </div>
                <div className="detail-box">
                  <div className="name">
                    <h6>Samantha Jonas</h6>
                  </div>
                  <p>
                  It is a long established fact that a reader will be
                  distracted by the readable content.
                  </p>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 col-lg-10 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={clientImg} alt="" />
                </div>
                <div className="detail-box">
                  <div className="name">
                    <h6>Samantha Jonas</h6>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </p>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-11 col-lg-10 mx-auto">
              <div className="box">
                <div className="img-box">
                  <img src={clientImg} alt="" />
                </div>
                <div className="detail-box">
                  <div className="name">
                    <h6>Samantha Jonas</h6>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </p>
                  <i className="fa fa-quote-left" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Slider>
       
      </section>
      <section className="info_section layout_padding2">
    <div className="container">
      <div className="row info_form_social_row">
        <div className="col-md-8 col-lg-9">
          <div className="info_form">
            <form action="">
              <input className="text-dark" type="email" placeholder="Enter your email" />
              <button>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">

          <div className="social_box ">
            <a className="rounded" href="">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a className="rounded" href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a className="rounded" href="">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row info_main_row">
        <div className="col-md-6 col-lg-3">
          <div className="info_links">
            <h4>
              Menu
            </h4>
            <div className="info_links_menu">
              <a href="index.html">Home</a>
              <a href="about.html">About</a>
              <a href="shop.html">Shop</a>
              <a href="blog.html">Blog</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="info_insta">
            <h4>
              Instagram
            </h4>
            <div className="insta_box">
              <div className="img-box hoverImgbox">
                <img className="hoverImg" src={img2} alt=""/>
                
              </div>
              <p>
                long established fact that a reader
              </p>
            </div>
            <div className="insta_box">
              <div className="img-box hoverImgbox">
              <img className="hoverImg" src={img3} alt=""/>
              </div>
              <p>
                long established fact that a reader
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="info_detail">
            <h4>
              About Us
            </h4>
            <p className="mb-0">
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <h4>
            Contact Us
          </h4>
          <div className="info_contact">
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call +01 1234567890
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope"></i>
              <span>
                demo@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


  <footer className="footer_section">
    <div className="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/"> Faiz</a>
      </p>
    </div>
  </footer>
      {/* <section className="contact_section layout_padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="form_container">
                <div className="heading_container">
                  <h2>Get In Touch</h2>
                </div>
                <form action="">
                  <div>
                    <input type="text" placeholder="Full Name " />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" placeholder="Phone number" />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="Message"
                    />
                  </div>
                  <div className="d-flex ">
                    <button type="submit">SEND</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="info_social">
                <div>
                  <a href="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {[
              { label: "London", address: "221B Baker Street, London" },
              { label: "USA", address: "999 Street, New York" },
            ].map((location, index) => (
              <div key={index} className="col-md-4 col-lg-3">
                <h6>{location.label}</h6>
                <p>{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Hero;
