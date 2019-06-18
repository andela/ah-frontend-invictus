import React, { Component } from "react";
import { connect } from "react-redux";
import { notificationsAction } from "../../redux/actions/NotificationsAction";
import NotificationsComponent from "../components/NotificationsComponent";

export class NotificationsContainer extends Component {
  componentDidMount () {
    this.props.notificationsAction();
  }

  render () {
    return (
      <div>
        <NotificationsComponent
          notificationsResponse={this.props.notificationsResponse} />
      </div >
    );
  }
}

export const mapStateToProps = state => ({
  notificationsResponse: state.notifications.notificationsResponse
});

export default connect(
  mapStateToProps,
  { notificationsAction }
)(NotificationsContainer);
