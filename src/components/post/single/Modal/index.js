import React from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { makeReservation } from "../../../../store/posts";

function Model(props) {
  console.log(props, "model component");
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">حجز خدمة</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form class="sl-form sl-form-appointment1">
          <fieldset>
            <div class="sl-form__wrap">
              <div class="form-group form-group-icon">
                <h3>خدمة صيانة خشب الباركيه</h3>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control sl-form-control"
                  placeholder="ملاحظات (اختياري):"
                  required=""
                ></textarea>
              </div>
            </div>
          </fieldset>
        </form>
        <div class="sl-appointment-holder">
          <div class="sl-appointment-content">
            <div class="sl-appointment-calendar">
              <div id="sl-calendar" class="sl-calendar"></div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div class="sl-appointmentPopup__footer--terms">
          <p>
            عند طلب الخدمة تكون قد وافقة على
            <a href="javascript:void(0);">اتفاقية الخصوصية</a>
          </p>
        </div>
        <button
          className="btn sl-btn"
          onClick={() => props.makeReservation(props.post, props.user)}
        >
          serve
        </button>
        <a href="#" id="appointmentSubmit" class="btn sl-btn">
          طلب الخدمة
        </a>
      </Modal.Footer>
    </Modal>
  );
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => ({
  makeReservation: (post,user) => dispatch(makeReservation(post,user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Model);
