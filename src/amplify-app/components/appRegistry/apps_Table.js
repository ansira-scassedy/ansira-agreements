import React, { useState } from "react";

//amplify stuff
import { DataStore } from "@aws-amplify/datastore";
import { AppRegistry } from "../../models";

//
import { Switch } from "@headlessui/react";

//components
import EditSlideOver from "./edit_slideover";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AppsTable(props) {
  const [open, setOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const deleteApp = async (id) => {
    const modelToDelete = await DataStore.query(AppRegistry, id);
    DataStore.delete(modelToDelete);
  };

  const toggleAppStatus = async (id) => {
    const modelToUpdate = await DataStore.query(AppRegistry, id);
    await DataStore.save(
      AppRegistry.copyOf(modelToUpdate, (item) => {
        item.isActive = !modelToUpdate.isActive;
      })
    );
  };

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              App Registry
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              You'll need to register your application in order to access the
              Ansira Agreeemnts API.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:w-auto"
            >
              Register App
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                      >
                        App Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Web Hook URI
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {props.apps.map((app) => (
                      <tr key={app.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                          {app.name}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                          {app.description}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {app.webhookURI}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <Switch
                            checked={app.isActive}
                            onChange={() => toggleAppStatus(app.id)}
                            className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                          >
                            <span className="sr-only">Use setting</span>
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute bg-white w-full h-full rounded-md"
                            />
                            <span
                              aria-hidden="true"
                              className={classNames(
                                app.isActive ? "bg-cyan-600" : "bg-gray-200",
                                "pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"
                              )}
                            />
                            <span
                              aria-hidden="true"
                              className={classNames(
                                app.isActive
                                  ? "translate-x-5"
                                  : "translate-x-0",
                                "pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200"
                              )}
                            />
                          </Switch>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                          <a
                            href="#"
                            className="text-cyan-600 hover:text-cyan-900"
                            onClick={() => deleteApp(app.id)}
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditSlideOver
        open={open}
        setOpen={setOpen}
        userEmail={props.userEmail}
      ></EditSlideOver>
    </>
  );
}
