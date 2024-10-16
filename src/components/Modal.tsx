"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { CloseCircle } from "iconsax-react";

// Define form data type
interface FormData {
  companyName: string;
  location: string;
  representativeName: string;
  email: string;
  phone: string;
  enquiryType: string;
  companyMessage: string;
  projectMessage: string;
  typeofPartnership: string;
  categoryofProject: string;
  typeofProject: string;
  partnerMessage: string;
  consent: boolean;
}

// Define prop types for the Modal component
interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal = ({ isOpen, closeModal }: ModalProps) => {
  const [formError, setFormError] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    location: "",
    representativeName: "",
    email: "",
    phone: "",
    enquiryType: "",
    companyMessage: "",
    projectMessage: "",
    message: "",
    typeofPartnership: "",
    categoryofProject: "",
    typeofProject: "",
    partnerMessage: "",
    consent: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      setFormError("You must agree to the consent checkbox to proceed.");
      return;
    }
    setFormError("");

    const {
      companyName,
      location,
      representativeName,
      email,
      phone,
      enquiryType,
      companyMessage,
      projectMessage,
      typeofPartnership,
      categoryofProject,
      typeofProject,
      partnerMessage
    } = formData;

    const subject = `Enquiry from ${companyName}`;
    const body = `
      Company Name: ${companyName}
      Location: ${location}
      Representative Name: ${representativeName}
      Email: ${email}
      Phone: ${phone}
      Enquiry Type: ${enquiryType}
      CompanyMessage: ${companyMessage}
      Type of Partnership: ${typeofPartnership}
      Category of Project: ${categoryofProject}
      Project Message: ${projectMessage}
      Type of Project: ${typeofProject}
      Partner  Message: ${partnerMessage}
    `;

    const mailtoUrl = `mailto:info@instollar.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    // Clear the form after submission
    setFormData({
      companyName: "",
      location: "",
      representativeName: "",
      email: "",
      phone: "",
      enquiryType: "",
      companyMessage: "",
      projectMessage: "",
      typeofPartnership: "",
      categoryofProject: "",
      typeofProject: "",
      partnerMessage: "",
      consent: false,
    });
  };

  return (
    <Dialog
      transition
      open={isOpen}
      as="div"
      className="relative z-[9999] transition duration-300 ease-out"
      onClose={closeModal}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-[80%] items-center justify-center p-4">
          <DialogPanel className="w-full max-w-2xl rounded-xl bg-white p-6 backdrop-blur-2xl md:h-[80%] h-[70%] overflow-y-scroll">
            <div className="flex items-center justify-end">
              <button onClick={closeModal}>
                <CloseCircle size="32" color="#000" variant="TwoTone" />
              </button>
            </div>
            <div className="">
              <div>
                <h3 className="md:text-[52px] text-3xl mb-3">
                  Discuss a solar project
                </h3>
                <p className="text-lg text-[#21272A] leading-[25.2px] font-normal">
                  Tell us a little about your needs and we will be in touch
                  soonest.
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8 mt-10">
                   {/* Form Inputs */}
                   {formError && (
                    <div className="md:col-span-2 text-red-600">
                      {formError}
                    </div>)}
                  <h4 className="md:col-span-2 text-xl font-bold">
                    Company Information
                  </h4>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="companyName">
                      Company Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Company Name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="location">
                      Location<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="City, Country"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="repName">
                      Representative Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="John Doe"
                      name="representativeName"
                      value={formData.representativeName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email">
                      Email Address<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-input"
                      placeholder="janedoe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="phone">
                      Phone Number<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="form-input"
                      placeholder="+234 6 00 00 00 00"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="enquiryType">
                      Type of enquiry<span className="text-red-600">*</span>
                    </label>
                    <div className="form-input">
                      <select
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleChange}
                        className="bg-transparent w-full"
                        required>
                        <option value=""></option>
                        <option value="Project">Project</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  {/* Conditional message for "Other" */}
                  {formData.enquiryType === "Other" && (
                      <p className="mt-4 text-green-600">
                        An Agent will contact you after 2 working hours.
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col space-y-2 md:col-span-2">
                    <label htmlFor="message">
                      Anything else we should know?
                      <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="companyMessage"
                      value={formData.companyMessage}
                      onChange={handleChange}
                      rows={5}
                      className="form-input"
                      placeholder="Leave us a message"
                      required
                    ></textarea>
                  </div>
                  <h4 className="md:col-span-2 text-xl font-bold">
                    Project Information
                  </h4>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="enquiryType">
                      Category of Project<span className="text-red-600">*</span>
                    </label>
                    <div className="form-input">
                      <select
                        name="categoryofProject"
                        value={formData.categoryofProject}
                        onChange={handleChange}
                        id="" className="bg-transparent w-full text-black">
                        <option value=""></option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Industrial/Mini grid">Industrial/Mini grid</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="enquiryType">
                      Type of Project<span className="text-red-600">*</span>
                    </label>
                    <div className="form-input">
                      <select
                        name="typeofProject"
                        value={formData.typeofProject}  
                        onChange={handleChange}
                        className="bg-transparent w-full text-black">
                        <option value=""></option>
                        <option value="Installation">Installation</option>
                        <option value="Energy Audit/Site Assessment">Energy Audit/Site Assessment</option>
                        <option value="Maintenance & After Sale">Maintenance & After Sale</option>
                        <option value="Other">Other</option>
                      </select>
                    {/* Conditional message for "Other" */}
                    {formData.typeofProject === "Other" && (
                        <p className=" text-green-600">An Agent will contact you after 2 working hours.</p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 md:col-span-2">
                    <label htmlFor="message">
                      Anything else we should know?
                      <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      value={formData.projectMessage}
                      onChange={handleChange}
                      name="projectMessage"
                      // id="message"
                      rows={5}
                      className="form-input"
                      placeholder="Leave us a message"
                    ></textarea>
                  </div>
                  <h4 className="md:col-span-2 text-xl font-bold">
                    Partnership
                  </h4>
                  <div className="flex flex-col space-y-2 md:col-span-2">
                    <label htmlFor="enquiryType">
                      Type of Partnership<span className="text-red-600">*</span>
                    </label>
                    <div className="form-input">
                      <select name="typeofPartnership" id=""
                        value={formData.typeofPartnership}
                        onChange={handleChange}
                        className="bg-transparent w-full">
                        <option value=""></option>
                        <option value="Installation Partnership">Installation Partnership</option>
                        <option value="Sales Partnership">Sales Partnership</option>
                        <option value="Energy Audit Partnership">Energy Audit Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                   {/* Conditional message for "Other" */}
                    {formData.typeofPartnership === "Other" && (
                      <p className="mt-4 text-green-600">
                        An Agent will contact you after 2 working hours.
                      </p>
                    )}

                  <div className="flex flex-col space-y-2 md:col-span-2">
                    <label htmlFor="message">
                      Anything else we should know?
                      <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      value={formData.partnerMessage}
                      onChange={handleChange}
                      name="partnerMessage"
                      rows={5}
                      className="form-input"
                      placeholder="Leave us a message"
                    ></textarea>
                  </div>
                  <div className="space-x-2 md:col-span-2">
                    <input type="checkbox" name="consent" id="consent" />
                    <label htmlFor="consent">
                      By checking this box, I agree to allow Instollar
                      representatives to contact me.
                    </label>
                  </div>

                  <div className="md:col-span-2 text-right">
                    <button
                      type="submit"
                      className="bg-primary-200 text-white px-5 py-2 rounded-full md:w-auto w-full"
                    >
                      Submit Form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
