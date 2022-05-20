import Head from "next/head";
import { useState, useEffect } from "react";
import Layout from "../components/layout/layout";

//amplify stuff
import { DataStore } from "@aws-amplify/datastore";
import { AppRegistry } from "../models";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
//

import AppsTable from "../components/appRegistry/apps_Table";
import EditSlideOver from "../components/appRegistry/edit_slideover";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Apps() {
  const [apps, setapps] = useState([]);
  const [open, setOpen] = useState(true);
  const { user } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    fetchApps();
    async function fetchApps() {
      const authUser = await Auth.currentAuthenticatedUser();
      const groups =
        user.signInUserSession.accessToken.payload["cognito:groups"];
      let appData = "";
      if (groups.includes("Admin")) {
        appData = await DataStore.query(AppRegistry);
      } else {
        appData = await DataStore.query(AppRegistry, (a) =>
          a.createdBy("eq", user.attributes.email)
        );
      }
      //todo check user role and get email or id to verify createdby

      setapps(appData);
    }

    const subscription = DataStore.observe(AppRegistry).subscribe(() =>
      fetchApps()
    );
    return () => subscription.unsubscribe();
  }, []);

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
                      {/* <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                        App Registry
                      </h1> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                {/* empty  */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <AppsTable apps={apps} />
        </div>
      </Layout>
    </>
  );
}
