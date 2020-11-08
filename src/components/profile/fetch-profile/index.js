import React from 'react';
import { connect } from 'react-redux';

class updateUserInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // hideAndShowPassword = () => {
    //     let toggle = document.getElementById("password");
    //     if (toggle.type === "password") {
    //         toggle.type = "text";
    //     } else {
    //         toggle.type = "password";
    //     }
    // }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        event.target.reset();
        if (this.validate()) {
            console.log(this.state);

            let input = {};
            input["name"] = "";
            // input["email"] = "";
            input["phone"] = "";
            // input["password"] = "";
            // input["confirm_password"] = "";
            input["addresses"] = "";
            this.setState({ input: input });

            alert('updated Form is submited');
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["name"]) {
            isValid = false;
            errors["name"] = "الرجاء ادخل الاسم الكامل";
        }
        if (!input["phone"]) {
            isValid = false;
            errors["phone"] = "الرجاء ادخل رقم الهاتف";
        }

        //   if (!input["email"]) {
        //     isValid = false;
        //     errors["email"] = "Please enter your email Address.";
        //   }

        //   if (typeof input["email"] !== "undefined") {

        //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        //     if (!pattern.test(input["email"])) {
        //       isValid = false;
        //       errors["email"] = "Please enter valid email address.";
        //     }
        //   }

        // if (!input["password"]) {
        //     isValid = false;
        //     errors["password"] = "الرجاء أدخال كلمة السر";
        // }

        // if (!input["confirm_password"]) {
        //     isValid = false;
        //     errors["confirm_password"] = "الرجاء تأكيد كلمة السر";
        // }

        // if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

        //     if (input["password"] != input["confirm_password"]) {
        //         isValid = false;
        //         errors["password"] = "كلملة السر غير منطابقة ";
        //     }
        // }
        if (!input["addresses"]) {
            isValid = false;
            errors["addresses"] = "الرجاء ادخل عنوان";
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <div class="form-group">
                        <label for="name"> :الاسم الكامل</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.input.name}
                            onChange={this.handleChange}
                            class="form-control"
                            placeholder="ادخل الاسم الكامل"
                            id="name" />

                        <div className="text-danger">{this.state.errors.name}</div>
                    </div>

                    {/* <div class="form-group">
                        <label for="email"> :البريد الألكتروني</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.input.email}
                            onChange={this.handleChange}
                            class="form-control"
                            placeholder="Enter email"
                            id="email" />

                        <div className="text-danger">{this.state.errors.email}</div>
                    </div> */}

                    <div class="form-group">
                        <label for="phone"> :رقم الهاتف</label>
                        <input type="tel"
                            id="phone"
                            name="phone"
                            value={this.state.input.phone}
                            placeholder="07xxxxxxx"
                            pattern="[0-9]{10}"
                            onChange={this.handleChange}
                            required />

                        <div className="text-danger">{this.state.errors.phone}</div>
                    </div>

                    {/* <div class="form-group">
                        <label for="password"> :كلمة السر </label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.input.password}
                            onChange={this.handleChange}
                            class="form-control"
                            placeholder="ادخل كلمة السر"
                            id="password" />

                        <div className="text-danger">{this.state.errors.password}</div>
                    </div>

                    <div class="form-group">
                        <label for="password"> :تأكيد كلمة السر </label>
                        <input
                            type="password"
                            name="confirm_password"
                            value={this.state.input.confirm_password}
                            onChange={this.handleChange}
                            class="form-control"
                            placeholder=" تأكيد كلمة السر"
                            id="confirm_password" />

                        <div className="text-danger">{this.state.errors.confirm_password}</div>
                    </div> */}

                    <div class="form-group">
                        <label for="addresses"> :العنواين </label>
                        <input
                            type="text"
                            name="addresses"
                            value={this.state.input.addresses}
                            onChange={this.handleChange}
                            class="form-control"
                            placeholder=" أضافة او تعديل عنوان"
                            id="addresses" />

                        <div className="text-danger">{this.state.errors.addresses}</div>
                    </div>

                    <input type="submit" value="Submit" class="btn btn-success" />
                </form>
            </div>
        );
    }
}

// const mapStateToProps = (state) => ({

// });

// const mapDispatchToProps = (dispatch) => ({
 
// });


// export default connect(mapStateToProps, mapDispatchToProps)(Service);

export default updateUserInfo;