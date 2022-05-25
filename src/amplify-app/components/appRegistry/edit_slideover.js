import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { DataStore } from "@aws-amplify/datastore";
import { AppRegistry } from "../../models";

// Tailwind

import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";


export default function EditSlideOver(props) {
  //const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      webhookURI: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Required"),
      description: yup.string().required("Required"),
      webhookURI: yup.string().url().required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);

      await DataStore.save(
        new AppRegistry({
          name: values.name,
          description: values.description,
          isActive: true,
          createdBy: props.userEmail,
          webhookURI: values.webhookURI,
        })
      );
      resetForm();
    }
  });

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <form
                    onSubmit={formik.handleSubmit}
                    className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                  >
                    <div className="h-0 flex-1 overflow-y-auto">
                      <div className="bg-cyan-700 py-6 px-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-lg font-medium text-white">
                            Add App
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-cyan-700 text-cyan-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                              onClick={() => {props.setOpen(false); formik.resetForm()}}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="text-sm text-cyan-300"></p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="divide-y divide-gray-200 px-4 sm:px-6">
                          <div className="space-y-6 pt-6 pb-5">
                            <div>
                              <label
                                htmlFor="project-name"
                                className="block text-sm font-medium text-gray-900"
                              >
                                {" "}
                                App name{" "}
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                                  placeholder="App Name"
                                  value={formik.values.name}
                                  {...formik.getFieldProps("name")}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                  <p className="text-red-500 text-xs italic">
                                    {formik.errors.name}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-900"
                              >
                                {" "}
                                Description{" "}
                              </label>
                              <div className="mt-1">
                                <textarea
                                  id="description"
                                  name="description"
                                  rows={4}
                                  className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                                  value={formik.values.description}
                                  {...formik.getFieldProps("description")}
                                />
                                {formik.touched.description &&
                                formik.errors.description ? (
                                  <p className="text-red-500 text-xs italic">
                                    {formik.errors.description}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                            <div>
                              <label
                                htmlFor="project-name"
                                className="block text-sm font-medium text-gray-900"
                              >
                                {" "}
                                Web Hook URI{" "}
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="webhookURI"
                                  id="webhookURI"
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                                  placeholder="Web Hook URI"
                                  value={formik.values.webhookURI}
                                  {...formik.getFieldProps("webhookURI")}
                                />
                                {formik.touched.webhookURI &&
                                formik.errors.webhookURI ? (
                                  <p className="text-red-500 text-xs italic">
                                    {formik.errors.webhookURI}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <div className="pt-4 pb-6">
                            <div className="mt-4 flex text-sm"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 justify-end px-4 py-4">
                      <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                        onClick={() => {props.setOpen(false); formik.resetForm()}}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
