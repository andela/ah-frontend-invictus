import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/notifications.scss';

export default function NotificationsComponent (props) {
  let notificationItems;
  let numberOfNotifications;
  const notifications = props.notificationsResponse.notifications;
  if (notifications !== undefined) {
    numberOfNotifications = notifications.length;
    notificationItems = notifications.map(notify => (
      <>
        < a className="notify-item" href="#" > {notify.message}</a >
        <hr className="hr" />
      </>
    )
    );
  }
  return (
    <>
      <div className="row notification-div">
        <span className="badge notify-badge badge-warning">{numberOfNotifications}</span>
        <div className="dropdown">
          <FontAwesomeIcon className="bell-icon" icon={faBell} />
          <div className="dropdown-content">
            {notificationItems}
          </div>
        </div>
      </div>
    </>
  );
}
