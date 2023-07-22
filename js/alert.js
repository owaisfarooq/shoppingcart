const notificationContainer = document.createElement("div")
notificationContainer.id = "notification-container";
document.body.appendChild(notificationContainer);

function showNotification(message, type) {
    const notificationContainer = document.getElementById("notification-container");
    const notification = document.createElement("div");

    notification.className = "notification alert " + type;
    notification.role = "alert";
    notification.textContent = message;

    notificationContainer.appendChild(notification);

  //   Automatically remove the notification after a few seconds
    setTimeout(() => {
      notificationContainer.removeChild(notification);
    }, 5000); // 5000 milliseconds (5 seconds), you can adjust the duration as needed
  }