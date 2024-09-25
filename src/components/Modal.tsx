"use client";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { CloseCircle } from "iconsax-react";

import { useRouter } from "next/navigation";

const Modal = ({ isOpen, closeModal }) => {
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
                <p>
                  Tell us a little about your needs and we will be in touch
                  soonest.
                </p>
              </div>
              <div>
                <form action="" className="grid md:grid-cols-2 gap-8 mt-10">
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
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="email">
                      Email Address<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="janedoe@example.com"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="phone">
                      Phone Number<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="+234 6 00 00 00 00"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="enquiryType">
                      Type of enquiry<span className="text-red-600">*</span>
                    </label>
                    <div className="form-input">
                      <select name="" id="" className="bg-transparent w-full">
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 md:col-span-2">
                    <label htmlFor="message">
                      Anything else we should know?
                      <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      className="form-input"
                      placeholder="Leave us a message"
                    ></textarea>
                  </div>
                  <h4 className="md:col-span-2 text-xl font-bold">
                    Company Information
                  </h4>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="enquiryType">
                      Category of Project<span className="text-red-600">*</span>
                    </label>
                    <div className="form-input">
                      <select name="" id="" className="bg-transparent w-full">
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="enquiryType">
                      Type of Project<span className="text-red-600">*</span>
                    </label>
                    <div className="form-input">
                      <select name="" id="" className="bg-transparent w-full">
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 md:col-span-2">
                    <label htmlFor="message">
                      Anything else we should know?
                      <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
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
                      <select name="" id="" className="bg-transparent w-full">
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 md:col-span-2">
                    <label htmlFor="message">
                      Anything else we should know?
                      <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
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
