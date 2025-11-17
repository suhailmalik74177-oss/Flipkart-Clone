import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BsTrash3 } from "react-icons/bs";

function Notification() {
  // Example notifications data
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Order Shipped 🚚",
      message: "Your order #12345 has been shipped successfully!",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Offer Alert 🎉",
      message: "Flat 40% OFF on Fashion Sale today only!",
      time: "1 day ago",
      read: false,
    },
    {
      id: 3,
      title: "Price Drop 💸",
      message: "The item in your wishlist is now ₹500 cheaper!",
      time: "3 days ago",
      read: true,
    },
  ]);

  // Mark all as read
  const markAllRead = () => {
    const updated = notifications.map((n) => ({ ...n, read: true }));
    setNotifications(updated);
  };

  // Delete single notification
  const deleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  // Clear all
  const clearAll = () => setNotifications([]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-8">
      {/* Header */}
      <div className="w-full max-w-3xl flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <IoNotificationsOutline size={26} className="text-green-600" />
          Notifications
        </h1>

        {notifications.length > 0 && (
          <div className="flex gap-3">
            <button
              onClick={markAllRead}
              className="text-sm flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1.5 rounded-md hover:bg-green-200 transition"
            >
              <MdOutlineMarkEmailRead size={16} /> Mark all as read
            </button>
            <button
              onClick={clearAll}
              className="text-sm flex items-center gap-1 bg-red-100 text-red-600 px-3 py-1.5 rounded-md hover:bg-red-200 transition"
            >
              <BsTrash3 size={15} /> Clear all
            </button>
          </div>
        )}
      </div>

      {/* Notifications List */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-4 divide-y divide-gray-100">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <IoNotificationsOutline size={50} className="text-gray-400 mb-3" />
            <h2 className="text-gray-600 text-lg font-medium">
              No new notifications
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              You’re all caught up! 🎉
            </p>
          </div>
        ) : (
          notifications.map((note) => (
            <div
              key={note.id}
              className={`flex justify-between items-start py-4 px-2 rounded-lg transition ${
                note.read ? "bg-white" : "bg-green-50"
              } hover:bg-gray-50`}
            >
              <div className="flex-1">
                <h3
                  className={`text-sm sm:text-base font-semibold ${
                    note.read ? "text-gray-700" : "text-green-700"
                  }`}
                >
                  {note.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{note.message}</p>
                <span className="text-xs text-gray-400 mt-1 inline-block">
                  {note.time}
                </span>
              </div>

              {/* Delete Icon */}
              <button
                onClick={() => deleteNotification(note.id)}
                className="ml-3 text-gray-400 hover:text-red-500 transition"
                title="Delete notification"
              >
                <BsTrash3 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Notification;
