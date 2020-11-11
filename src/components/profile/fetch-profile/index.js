import React, { Component } from 'react';
import { editeProfile } from '../../../store/auth';
import { addAddress, uploadImage } from '../../../store/auth';


class UpdateUserInfo extends Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {},
            selectedFiles: '',
            uploading: '',
        };
        this.user = JSON.parse(localStorage.getItem("user"));
        this.state.input = this.user.user;
        this.userData = this.user;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectFile = this.selectFile.bind(this);
    }

    selectFile(event) {
        console.log(event.target.files[0]);

        this.setState({uploading: 'uploading-active'});
        uploadImage(event.target.files[0]).then( res => {
            this.setState({
                selectedFiles: res.path,
                uploading: '',
            });
        });

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
        console.log(11);
        // if (this.validate()) {

        if(this.state.input.addresses) {
            addAddress(this.state.input).then(res => {
                console.log('38 user', res);
            });
        }

        editeProfile(this.state.input, this.userData, this.state.selectedFiles).then(res => {
            console.log('38 user', res);
            this.state.input = this.user;
            document.getElementById('userImage').src = res.user_image;
        });
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
            <div class="sl-dashboardbox sl-newAppointments profile-edit-form">
                <div class="sl-dashboardbox__title">
                    <p>الملف الشخصي</p>
                </div>
                <div class="sl-dashboardbox__content">
                    <form class="sl-form sl-manageServices" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <div class="sl-form__wrap">
                                <div class="form-group form-group-half">
                                    <input class="form-control sl-form-control" type="text" 
                                        name="fullname"
                                        defaultValue={this.state.input.fullname}
                                        onChange={this.handleChange}
                                        class="form-control"
                                        placeholder={this.state.input.fullname}
                                        id="name" />
                                </div>
                                
                                <div class="form-group form-group-half">
                                    <input class="form-control sl-form-control" type="text" 
                                    id="phone"
                                    name="phone"
                                    defaultValue={this.state.input.phone}
                                    placeholder='ادخل رقم الهاتف'
                                    pattern="[0-9]{10}"
                                    onChange={this.handleChange}
                                    class="form-control"
                                    required />
                                </div>
                                
                                <div class="form-group">
                                    <input class="form-control sl-form-control" type="email"
                                    name="email"
                                    defaultValue={this.state.input.email}
                                    onChange={this.handleChange}
                                    class="form-control"
                                    placeholder={this.state.input.email}
                                    />
                                </div>
                                
                                <ul className="form-group profile-address-list">
                                    <li className="sl-newAppointments__items"><p>العنوان</p> <p>رقم الهاتف</p></li>
                                    {
                                        this.state.input.address.map((address, i) => {
                                            return (
                                                <li key={i} class="sl-newAppointments__items sl-allAppointments-notification sl-allAppointments-notification__unread services-list">
                                                    <p>{address.address}</p>
                                                    <p>{address.phone}</p>
                                                </li>
                                            )
                                        })
                                    }
                                    <li>
                                    <input
                                        type="text"
                                        name="addresses"
                                        onChange={this.handleChange}
                                        class="form-control"
                                        id="addresses" />
                                    <input
                                        type="text"
                                        name="phoneAddresses"
                                        onChange={this.handleChange}
                                        class="form-control"
                                        id="phoneAddresses" />
                                    </li>
                                </ul>

                                <div class="form-group image-upload">
                                    <div class={"loader " + this.state.uploading}></div>
                                    <div class="sl-manageServices__upload">
                                        <div class="sl-manageServices__uploadarea">
                                            <span><i class="fas fa-cloud-upload-alt"></i></span>
                                            <h5>الصورة الشخصية</h5>
                                            <p>
                                                <label for="file1">
                                                    <span>
                                                        <input id="file1" type="file" name="photo" onChange={this.selectFile}/>
                                                        اضغط هنا للرفع
                                                    </span>
                                                </label>
                                                <i class="far fa-question-circle toltip-content tipso_style" data-tipso="name"></i>
                                            </p>
                                            <svg>
                                                <rect width="100%" height="204px"></rect>
                                            </svg>  
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group sl-btnarea">
                                    <button type="submit" class="btn sl-btn">حفظ</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}


export default UpdateUserInfo;
