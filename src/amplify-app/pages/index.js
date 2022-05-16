import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "../components/layout/layout";

//amplify stuff
import { DataStore } from "@aws-amplify/datastore";
import { AppRegistry } from "../models";
//

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {

  return (
    <>
      {/* <EditSlideOver></EditSlideOver> */}
      <Layout>
        {/* Page header */}
        <div className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
              <div className="flex-1 min-w-0">
                {/* Profile */}
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                        Dashboard
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4"></div>
            </div>
          </div>
        </div>
        <div className="mt-8"></div>
      </Layout>
    </>
  );
}
