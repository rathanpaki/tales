// src/pages/FAQ.js
import React from "react";


const FAQ = () => (
  <>
    <div className="page-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 align-self-center">
            <div className="caption header-text">
              <h6>SEO DIGITAL AGENCY</h6>
              <div className="line-dec"></div>
              <h4>
                Most Frequently Asked <em>Questions</em> Here <em>?</em>
              </h4>
            </div>
          </div>
          <div className="col-lg-5">
            <img src="assets/images/faqs-image.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div className="happy-steps">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Our 4 Steps To Success &amp; Happy Clients</h2>
          </div>
          <div className="col-lg-12">
            <div className="steps">
              <div className="row">
                {[
                  { img: "services-01.jpg", title: "Project Introduction" },
                  { img: "services-02.jpg", title: "Work Development" },
                  { img: "services-03.jpg", title: "Data Analysis" },
                  { img: "services-04.jpg", title: "Project Finishing" },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`col-lg-3 ${index === 3 ? "last-item" : ""}`}
                  >
                    <div className="item">
                      <img
                        src={`assets/images/${step.img}`}
                        alt=""
                        style={{
                          maxWidth: "66px",
                          borderRadius: "50%",
                          margin: "0 auto",
                        }}
                      />
                      <h4>{step.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="most-asked section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>
                Most <em>Frequently</em> Asked <span>Questions</span> ?
              </h2>
              <div className="line-dec"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doers.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="accordions is-first-expanded">
              {[
                {
                  title: "Sartorial Butcher Humblebrag",
                  content:
                    'Tale is the best SEO agency website template using Bootstrap v5.2.2 CSS for your company. It is a free download provided by TemplateMo. There are 3 HTML pages, <a href="index.html">Home</a>, <a href="about.html">About</a>, and <a href="faqs.html">FAQ</a>.',
                },
                {
                  title: "Jean Shorts Microdosing",
                  content:
                    "You are free to use this template for any purpose. You are not allowed to redistribute the downloadable ZIP file of Tale SEO Template on any other template website. Please contact us. Thank you.<br><br>Semiotics blog cray letterpress lo-fi vexillologist before they sold out swag YOLO schlitz. Coloring book roof party gentrify brunch.",
                },
                {
                  title: "Waistcoat Aesthetic Polaroid",
                  content:
                    "Semiotics blog cray letterpress lo-fi vexillologist before they sold out swag YOLO schlitz. Coloring book roof party gentrify brunch.<br><br>Fingerstache cronut taxidermy, echo park quinoa tumblr activated charcoal before they sold out.",
                },
                {
                  title: "Dolores Accordion HTML5",
                  content:
                    "Pickled succulents bitters belly direct trade, shaman iceland raw denim kombucha cray offal. Food truck swag hell of tumblr poutine tilde live-edge shorts microdosing fixie succulents, viral everyday carry tattooed.",
                },
              ].map((item, index) => (
                <article key={index} className="accordion">
                  <div className="accordion-head">
                    <span>{item.title}</span>
                    <span className="icon">
                      <i className="icon fa fa-chevron-right"></i>
                    </span>
                  </div>
                  <div className="accordion-body">
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="get-free-quote">
              <form id="free-quote" method="submit" role="search" action="#">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-heading">
                      <h2>
                        Get a <em>Free Quote</em> Now
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your E-mail"
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="website"
                        name="website"
                        id="website"
                        placeholder="Website URL"
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="phone-number"
                        name="phone-number"
                        id="phone-number"
                        placeholder="Phone Number"
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input
                        type="full-name"
                        name="full-name"
                        id="full-name"
                        placeholder="Full Name"
                        autoComplete="on"
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="orange-button"
                      >
                        Get Your Free Quote
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="cta section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h4>
              Are You Ready To Work & Develop With Us?
              <br />
              Don't Hesitate & Contact Us!
            </h4>
          </div>
          <div className="col-lg-4">
            <div className="main-button">
              <a href="#">Contact Us Now!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default FAQ;
