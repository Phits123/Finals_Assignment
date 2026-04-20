import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactValues = {
  sender: string;
  message: string;
};

export default function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>();

  const onSubmit = (data: ContactValues) => {
    setSubmittedData(data);
    setShowModal(true);
    reset();
  };

  return (
    <>
      <section className="card">
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <label>Sender Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("sender", { required: "Sender name is required" })}
          />
          {errors.sender && <p className="error-text">{errors.sender.message}</p>}

          <label>Message</label>
          <textarea
            placeholder="Enter your message"
            rows={5}
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <p className="error-text">{errors.message.message}</p>}

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </section>

      {showModal && submittedData && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Message Submitted</h2>
            <p>
              <strong>Sender:</strong> {submittedData.sender}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
            <button onClick={() => setShowModal(false)} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}