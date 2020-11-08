import React , { Component } from 'react';
import {editeProfile} from '../../../store/auth'

class UpdateUserInfo extends Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };
        this.user = JSON.parse(localStorage.getItem("user"));
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        console.log(input);
        this.setState({
            input
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        event.target.reset();
        if (this.validate()) {
            console.log(this.state);

            // let input = {};
            // input["name"] = this.user.user.fullName;
            // input["phone"] = this.user.user.phone;
            // input["addresses"] = this.user.user.addresses;
            // this.setState({ input: input });
            editeProfile(this.state.input).then(res=>{
                console.log('38 user',res);
            }
                
            )
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["fullname"]) {
            isValid = false;
            errors["fullname"] = "الرجاء ادخل الاسم الكامل";
        }
        if (!input["phone"]) {
            isValid = false;
            errors["phone"] = "الرجاء ادخل رقم الهاتف";
        }

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
                        <label className="profileLable" for="fullname"> الاسم الكامل:</label>
                        <input
                            type="text"
                            name="fullname"
                            value={this.state.input.fullname}
                            onChange={this.handleChange}
                            class="form-control"
                            placeholder={this.user.user.fullname}
                            id="name" />

                        <div className="text-danger">{this.state.errors.name}</div>
                    </div>


                    <div class="form-group">
                        <label className="profileLable" for="phone"> رقم الهاتف:</label>
                        <br/>
                        <input type="tel"
                            id="phone"
                            name="phone"
                            value={this.state.input.phone}
                            placeholder={this.user.user.phone}
                            pattern="[0-9]{10}"
                            onChange={this.handleChange}
                            class="form-control"
                            required />

                        <div className="text-danger">{this.state.errors.phone}</div>
                    </div>


                    <div class="form-group">
                        <label className="profileLable" for="addresses"> العنواين: </label>
                        <input
                            type="text"
                            name="addresses"
                            value={this.state.input.addresses}
                            onChange={this.handleChange}
                            class="form-control"
                            placeholder={this.user.user.address[0].address}
                            id="addresses" />

                        <div className="text-danger">{this.state.errors.addresses}</div>
                    </div>

                    <input type="submit" value="ارسال" class="btn btn-success btn-profile" />
                </form>
            </div>
        );
    }
}


export default UpdateUserInfo;
