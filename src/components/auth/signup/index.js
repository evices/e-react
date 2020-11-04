import React from 'react';

export default () => (
    <main class="sl-main sl-register-main">
        <div class="sl-registerfixed">
            <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="sl-register-holder">
                                <div class="sl-registerarea">
                                    <div class="sl-registersignarea">
                                        <div class="sl-registersignarea__title">
                                            <h3>سجل اليوم مجانا</h3>
                                        </div>
                                        <ul class="nav sl-registertabs" role="tablist">
                                            <li class="nav-item">
                                                <a class="nav-link" id="sl-signupcustomer" data-toggle="tab"
                                                    eventKey="first" role="tab" aria-selected="false">
                                                    <span><i class="fa fa-check"></i></span>
                                                    <h4><em>التسجيل</em> مستخدم زبون
                                                    </h4>
                                                    <i class="ti-info-alt toltip-content tipso_style"
                                                        data-tipso="Custome"></i>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link active" id="sl-signupprovider" data-toggle="tab"
                                                    eventKey="second" role="tab" aria-selected="true">
                                                    <span><i class="fa fa-check"></i></span>
                                                    <h4><em>التسجيل</em> كمقدم خدمة
                                                    </h4>
                                                    <i class="ti-info-alt toltip-content tipso_style"
                                                        data-tipso="Provider"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <div class="tab-content sl-signup" id="pills-tabContent">
                                            <div class="tab-pane fade" id="signupcustomer" role="tabpanel"
                                                aria-labelledby="sl-signupcustomer">
                                                <form class="sl-formtheme sl-signupform">
                                                    <fieldset>
                                                        <div class="sl-signupform-wrap">
                                                            <div class="form-group form-group-half form-group-icon">
                                                                <i class="ti-info-alt toltip-content tipso_style"
                                                                    data-tipso="name"></i>
                                                                <input type="text" name="name" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="اسم المستخدم" required="" />
                                                            </div>
                                                            <div class="form-group form-group-half form-group-icon">
                                                                <i class="ti-info-alt toltip-content tipso_style"
                                                                    data-tipso="name"></i>
                                                                <input type="text" name="nickname" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="اسم مستعار" required="" />
                                                            </div>
                                                            <div class="form-group">
                                                                <input type="text" name="email" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="البريد الالكتروني" required="" />
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <input type="text" name="name" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="الاسم الاول" required="" />
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <input type="text" name="name" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="اسم العائلة" required="" />
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <div class="sl-select">
                                                                    <select>
                                                                        <option value="" hidden="">الجنس</option>
                                                                        <option value="Male">ذكر</option>
                                                                        <option value="Female">انثى</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <input type="number" name="Phone" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="رقم الهاتف" required="" />
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <input type="password" name="password" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="كلمة المرور" required="" />
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <input type="password" name="password" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="اعادة كلمة المرور" required="" />
                                                            </div>
                                                            <div class="form-group sl-btnarea">
                                                                <div class="sl-checkbox">
                                                                    <input id="terms" type="checkbox" name="category" />
                                                                    <label for="terms">
                                                                        <span>اوافق على <a href="javascript:void(0);">شروط الخدمة</a></span>
                                                                    </label>
                                                                </div>
                                                                <button type="submit" class="btn sl-btn">تسجيل</button>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </form>
                                            </div>
                                            <div class="tab-pane fade active show" id="signupprovider" role="tabpanel"
                                                aria-labelledby="sl-signupprovider">
                                                <form class="sl-formtheme sl-signupform">
                                                    <fieldset>
                                                        <div class="sl-signupform-wrap">
                                                            <div class="form-group form-group-half form-group-icon">
                                                                <i class="ti-info-alt toltip-content tipso_style"
                                                                    data-tipso="name"></i>
                                                                <input type="text" name="name" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="اسم المستخدم" required="" />
                                                            </div>
                                                            <div class="form-group form-group-half form-group-icon">
                                                                <i class="ti-info-alt toltip-content tipso_style"
                                                                    data-tipso="name"></i>
                                                                <input type="text" name="nickname" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="اسم مستعار" required="" />
                                                            </div>
                                                            <div class="form-group">
                                                                <input type="text" name="email" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="البريد الالكتروني" required="" />
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <input type="text" name="name" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="الاسم الاول" required="" />
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <input type="text" name="name" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="اسم العائلة" required="" />
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <div class="sl-select">
                                                                    <select>
                                                                        <option value="" hidden="">الجنس</option>
                                                                        <option value="Male">ذكر</option>
                                                                        <option value="Female">انثى</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <input type="number" name="Phone" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="رقم الهاتف" required="" />
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <input type="password" name="password" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="كلمة المرور" required="" />
                                                            </div>
                                                            <div class="form-group form-group-half">
                                                                <input type="password" name="password" value=""
                                                                    class="form-control sl-form-control"
                                                                    placeholder="اعادة كلمة المرور" required="" />
                                                            </div>
                                                            <div class="form-group sl-btnarea">
                                                                <div class="sl-checkbox">
                                                                    <input id="terms" type="checkbox" name="category" />
                                                                    <label for="terms">
                                                                        <span>اوافق على <a href="javascript:void(0);">شروط الخدمة</a></span>
                                                                    </label>
                                                                </div>
                                                                <button type="submit" class="btn sl-btn">تسجيل</button>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="sl-oroption">
                                            <span></span>
                                        </div>
                                        <div class="sl-loginicon">
                                            <ul>
                                                <li><a href="javascript:void(0);" class="sl-googlebox"><i
                                                            class="fab fa-google"></i>التسجيل جوجل</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="sl-registerarea__terms">
                                        <p>من خلال التسجيل في الموقع فانت توافق على <a href="javascript:void(0);">الشروط</a></p>
                                    </div>
                                    <div class="sl-registerarea__footer">
                                        <p> لديك عضوية قم <a href="index.html"> بتسجيل الدخول</a></p>
                                    </div>
                                </div>
                                <div class="sl-registercontent">
                                    <figure class="sl-registercontent__img">
                                        <img src="images/img-011.jpg" alt="img" />
                                        <figcaption>
                                            <strong class="sl-registerlogo">
                                                <a href="index.html"><img src="images/loader.png"
                                                        alt="Images Description" /></a>
                                            </strong>
                                            <div class="sl-registertitle">
                                                <h4>نحن نتوسع يوما بعد يوم</h4>
                                                <h2>انضم الينا اليوم</h2>
                                            </div>
                                            <div class="sl-descritpion">
                                                <p></p>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </main>
);