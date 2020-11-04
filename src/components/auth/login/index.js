import React from 'react';
import { Button, Modal } from 'react-bootstrap';


export default (props) => (
    <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                تسجيل الدخول  
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form class="sl-formtheme sl-formlogin">
                <fieldset>
                    <div class="form-group">
                        <input type="text" name="email" class="form-control sl-form-control" placeholder="اسم المستخدم"/>
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control sl-form-control" placeholder="كلمة المرور" />
                    </div>
                    <div class="form-group sl-btnarea">
                        <Button 
                            className='btn btn-custom sl-btn'
                            title='login'
                            variant='link'
                        >تسجيل الدخول</Button>
                        {/* <a href="dashboard-insight.html" class="btn btn-custom sl-btn">login</a> */}
                    </div>
                </fieldset>
            </form>
            <div class="sl-loginicon">
                <ul>
                    {/* <li><a href="javascript:void(0);" class="sl-facebookbox"><i class="fab fa-facebook-f"></i>Via facebook</a></li> */}
                    <li><a href="javascript:void(0);" class="sl-googlebox"><i class="fab fa-google"></i>التسجيل بواسطة جوجل</a></li>
                </ul>
            </div>
        </Modal.Body>
    </Modal>
)
