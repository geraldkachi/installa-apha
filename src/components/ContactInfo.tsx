import { urlFor } from "@/sanity/utils";
import Image from "next/image";
import React, { useState } from "react";

const ContactInfo = ({ contactPage }) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({} as any);

  // Validation function
  const validateForm = () => {
    let formErrors: any = {};

    if (!formData.fname) formErrors.fname = "First name is required";
    if (!formData.lname) formErrors.lname = "Last name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.message) formErrors.message = "Message is required";
    if (!formData.consent)
      formErrors.consent = "You must agree before submitting";

    return formErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted Successfully", formData);
      // You can now send `formData` to an API endpoint here
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <section className="md:px-20 px-5 md:py-24 py-20 bg-background">
      <div className="flex md:flex-row flex-col gap-8 md:justify-between">
        <div className="space-y-4 md:order-first order-last">
          {contactPage?.contactInfo.map((info: any, index: number) => (
            <div key={index} className="flex space-x-4">
              <Image
                src={urlFor(info.icon).url()}
                width={48}
                height={48}
                alt="contact icon"
                className=""
              />
              <div className="space-y-1">
                <h3 className="font-semibold text-xl">{info.header}</h3>
                <p>{info.text}</p>
                <p>{info.contactLink}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:mb-0 mb-10">
          <div>
            <h4 className="md:text-[44px] text-3xl mb-5">Send a Message</h4>
            <p>
              Fill out the form, and someone in our team will get back to you
              shortly.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 mt-8 gap-8"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="fname">
                First Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="fname"
                className="form-input"
                placeholder="First name"
                value={formData.fname}
                onChange={handleInputChange}
              />
              {errors.fname && <p className="text-red-600">{errors.fname}</p>}
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="lname">
                Last Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="lname"
                className="form-input"
                placeholder="Last name"
                value={formData.lname}
                onChange={handleInputChange}
              />
              {errors.lname && <p className="text-red-600">{errors.lname}</p>}
            </div>

            <div className="flex flex-col space-y-2 md:col-span-2">
              <label htmlFor="email">
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div>

            <div className="flex flex-col space-y-2 md:col-span-2">
              <label htmlFor="phone">
                Phone number<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="phone"
                className="form-input"
                placeholder="+234 6 00 00 00 00"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <p className="text-red-600">{errors.phone}</p>}
            </div>

            <div className="flex flex-col space-y-2 md:col-span-2">
              <label htmlFor="message">
                Message<span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={10}
                className="form-input"
                placeholder="Leave us a message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              {errors.message && (
                <p className="text-red-600">{errors.message}</p>
              )}
            </div>

            <div className="space-x-2 md:col-span-2">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleInputChange}
              />
              <label htmlFor="consent">
                By checking this box, I agree to allow Instollar representatives
                to contact me.
              </label>
              {errors.consent && (
                <p className="text-red-600">{errors.consent}</p>
              )}
            </div>

            <div className="md:col-span-2 text-right">
              <button
                type="submit"
                className="bg-primary-200 text-white px-5 py-2 rounded-full md:w-auto w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
