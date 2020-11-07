import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { makeReservation } from "../../../../store/posts";
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

function Model(props) {

  const [startDate, setStartDate] = useState(new Date());
  const [selectedAddress, setSelectedAddress] = useState();
  const [sugesstion, setSugesstion] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(selectedAddress);
    props.makeReservation(props.post, props.user, startDate.toLocaleDateString(), selectedAddress)
          .then( res => {
            setSugesstion(res.sugesstion);
            // renderSuggestion(res.sugesstion);
            console.log(res.sugesstion);
          });
  };

  const renderSuggestion = (items) => {
    items = items || [];
    console.log(sugesstion);
    console.log(items);
    items.map(item => {
      console.log(item);
      return (
      <p>{item.title}</p>
      )
    })
  }

  const handleChange = (date) => {
    setStartDate(date);
    console.log(date);
  };

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
                <h3>{props.post.title}</h3>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control sl-form-control"
                  placeholder="ملاحظات (اختياري):"
                  required=""
                ></textarea>
              </div>
              <div className="form-group date-div">
                <p>تاريخ الحجز</p>
                <DatePicker name="book_date" value={startDate} selected={startDate} onSelect={handleChange} />
              </div>
              <div className="form-group reservation-address">
                <ul>
                {props.user.user.address.map( (item, i) => {
                  return (
                    <li className={selectedAddress == item ? 'active' : ''} onClick={() => { setSelectedAddress(item) }}>{item.address + ' - ' + item.phone}</li>
                    );
                })}
                </ul>
              </div>
            </div>
          </fieldset>
        </form>
        <div>
          <ul>
          {
            sugesstion.map((item, i) => {
              return (
                <li><a href={"/single/" + item._id}>{item.title}</a></li>
              )
            })
          }
          </ul>
        </div>
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
            <a href="javascript:void(0);"> اتفاقية الخصوصية </a>
          </p>
        </div>
        <button
          className="btn sl-btn"
          onClick={handleSubmit}
        >
          طلب الخدمة
        </button>
        {/* <a href="#" id="appointmentSubmit" class="btn sl-btn">
          طلب الخدمة
        </a> */}
      </Modal.Footer>
    </Modal>
  );
}
const mapStateToProps = (state) => ({
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => ({
  makeReservation: (post,user, date, address) => dispatch(makeReservation(post, user, date, address)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Model);
