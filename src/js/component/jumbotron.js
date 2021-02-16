import React, { Component } from "react";
// import image5 from "../../img/image5.jpg";

export const Jumbotron = () => (
    <div>
        <section className="clean-block clean-hero" style="background-image:url(&quot;/assets/img/tech/image4.jpg?h=0adc0de9a17a7caea6b8641f5d6ae02c&quot;);color:rgba(9, 162, 255, 0.85);">
            <div className="text">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p><a className="btn btn-outline-light active btn-lg" role="button" href="/forecast.html">Forecast Investments</a>
            </div>
        </section>
        <section className="clean-block clean-info dark">
            <div className="container">
                <div className="block-heading">
                    <h2 className="text-info">Info</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6"><img className="img-thumbnail" src="/assets/img/scenery/image5.jpg?h=5a16d46fccd884924ce66752802d76c5"></div>
                    <div className="col-md-6">
                        <h3>Lorem impsum dolor sit amet</h3>
                        <div className="getting-started-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div><button className="btn btn-outline-primary btn-lg" type="button">Join Now</button>
                    </div>
                </div>
            </div>
        </section>
        </div>
);
