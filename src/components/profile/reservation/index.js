import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  loadReservationFromApi,
  respondingToReservation,
} from "../../../store/reservation";
import { If, Then } from 'react-if';

const Single = (props) => {
  let status = {};
  switch (props.reserve.is_approved) {
    case 1:
      status = { className: "sl-bg-green", isApproved: "approved" };

      break;
    case 2:
      status = { className: "sl-bg-red", isApproved: "declined" };
      break;

    default:
      status = { className: "sl-bg-orange", isApproved: "pending" };

      break;
  }
  return (
    <div class="sl-newAppointments__detail">
      <div class="sl-newAppointments__userDetail">
        <div class="sl-newAppointments__userText">
          <div class="sl-slider__tags">
            <span class={status.className}>{status.isApproved}</span>
          </div>
          <h5>
            <a href="javascript:void(0);">{props.reserve.client.fullname}</a>
          </h5>
          <p>{props.reserve.book_date.toLocaleString()}</p>
        </div>
      </div>
      <div class="sl-newAppointments__services">
        <div class="sl-newAppointments__services--description">
          <h6>الخدمة المطلوبة</h6>
          <ul>
            <li>
              <p>{props.reserve.post ? props.reserve.post.title : ''}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Reservation = (props) => {
  useEffect(() => {
    props.loadReservationFromApi(props.user.user._id);
  }, []);

  return (
    <>
      {props.reservations.map((reserve, i) => {
        return (
          <li
            key={props.key}
            class="sl-newAppointments__items sl-allAppointments-notification sl-allAppointments-notification__unread"
          >
            <Single reserve={reserve} key={i} />

            <If condition={props.user.user.role !== 'user'}>
              <Then>
                <div className="reservation-btn">
                  <button
                    class="btn sl-btn sl-btn-md"
                    onClick={() =>
                      props.respondingToReservation(reserve._id, props.user, "1")
                    }
                  >
                    تاكيد
                  </button>
                  <button
                    class="btn sl-btn sl-btn-md"
                    onClick={() =>
                      props.respondingToReservation(reserve._id, props.user, "2")
                    }
                  >
                    رفض
                  </button>
                </div>
              </Then>
            </If>
          </li>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => ({
  reservations: state.reservation.Reservations,
  user: state.auth.user,
});
const mapDispatchToProps = (dispatch) => ({
  loadReservationFromApi: (user_id) =>
    dispatch(loadReservationFromApi(user_id)),
  respondingToReservation: (id, user, status) =>
    dispatch(respondingToReservation(id, user, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
