import React, { useState } from "react";
import Swal from "sweetalert2";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    hostName: "",
    persons: "",
    date: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { hostName, persons, date, mobile } = formData;

    if (hostName.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Host Name Required",
        text: "Please enter host name.",
      });
      return false;
    }

    if (!/^[A-Za-z ]+$/.test(hostName)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Name",
        text: "Host name should contain only letters.",
      });
      return false;
    }

    if (persons === "" || Number(persons) < 1) {
      Swal.fire({
        icon: "error",
        title: "Invalid Persons",
        text: "Please enter number of persons.",
      });
      return false;
    }

    if (date === "") {
      Swal.fire({
        icon: "error",
        title: "Select Date",
        text: "Please select booking date.",
      });
      return false;
    }

    const today = new Date().toISOString().split("T")[0];

    if (date < today) {
      Swal.fire({
        icon: "error",
        title: "Invalid Date",
        text: "Booking date cannot be in the past.",
      });
      return false;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Mobile Number",
        text: "Enter a valid 10 digit mobile number.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost/booking/sendBooking.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Table Booked!",
          text: "Your booking request has been sent successfully.",
        });

        setFormData({
          hostName: "",
          persons: "",
          date: "",
          mobile: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: result.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Unable to send booking request.",
      });
    }

    setLoading(false);
  };

  return (
    <section className="booking">
      <div className="container-fluid g-0">
        <div className="booking-row">

          {/* LEFT IMAGE */}

          <div className="booking-image">
            <img
              src={require("../assets/connect2.png")}
              alt="Booking"
            />
          </div>

          {/* RIGHT FORM */}

          <div className="booking-form-wrapper">

            <div className="booking-content">

              <div className="booking-heading">
                <h5 className="heading-tag">
                  Reserve Your Table
                </h5>

                <p className="page-description">
                  Reserve your table in advance and enjoy a memorable dining
                  experience with your family and friends.
                </p>
              </div>

              <form
                className="booking-form"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="hostName"
                  className="booking-input"
                  placeholder="Host Name"
                  value={formData.hostName}
                  onChange={handleChange}
                />

                <input
                  type="number"
                  name="persons"
                  className="booking-input"
                  placeholder="Number of Persons"
                  value={formData.persons}
                  onChange={handleChange}
                  min="1"
                />

                <input
                  type="date"
                  name="date"
                  className="booking-input"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                />

                <input
                  type="tel"
                  name="mobile"
                  className="booking-input"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  maxLength="10"
                />

                <button
                  type="submit"
                  className="booking-btn"
                  disabled={loading}
                >
                  {loading ? "Booking..." : "Book Table"}
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;