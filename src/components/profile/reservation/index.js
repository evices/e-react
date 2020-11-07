import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadReservationFromApi,respondingToReservation } from "../../../store/reservation";

// git all reservation form api
// the reservation should be for the user thet is login as provider
// add functionality to accept and refuse the request
const Reservation = (props) => {
  useEffect(() => {
    props.loadReservationFromApi(props.user.user._id);
  }, []);
  console.log("props of reservation component >>", props.reservations);

  return (
    <div>
      <h1>Reservation</h1>
      {props.reservations.map((reserve, i) => {
        return (
          <div key={i}>
            <h2>Reservation number ({i + 1})<span>is_Approve: {reserve.is_approved}</span></h2>
            <h4>{reserve.client.fullname}</h4>
            <h4>{reserve.book_date}</h4>
            {reserve.client.address.map((address, i) => {
              return (
                <>
                  <h4>
                    address {i + 1}: {address.address}
                  </h4>
                  <h4>
                    phone {i + 1}: {address.phone}
                  </h4>
                </>
              );
            })}
            <button onClick={()=>props.respondingToReservation(reserve._id,props.user,'1')}>approve</button>
            <button onClick={()=>props.respondingToReservation(reserve._id,props.user,'2')}>refuse</button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  reservations: state.reservation.Reservations,
  user:state.auth.user
});
const mapDispatchToProps = (dispatch) => ({
  loadReservationFromApi: (user_id) => dispatch(loadReservationFromApi(user_id)),
  respondingToReservation: (id,user,status)=> dispatch(respondingToReservation(id,user,status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
