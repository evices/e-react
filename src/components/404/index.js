import React from 'react';

export default () => (
    <main class="sl-main">
        <section class="sl-main-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8">
                        <div class="sl-404">
                            <figure class="sl-404__img">
                                <img src="images\404.png" alt="404 img" />
                            </figure>
                            <div class="sl-404details">
                                <div class="sl-404details__title">
                                    <h2>هذه الصفحة غير متوفرة حاليا!!</h2>
                                </div>
                                <div class="sl-404details__description">
                                    <p></p>
                                </div>
                                <div class="sl-404details__btnarea">
                                    <a href="/" class="btn sl-btn" 
                                    ref={(el) => {
                                        if (el) {
                                          el.style.setProperty('padding-top', '10px', 'important');
                                        }
                                      }}
                                  >الرجوع الى الرئيسية</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
)