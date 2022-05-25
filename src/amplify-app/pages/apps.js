import { useState, useEffect } from "react";
import Layout from "../components/layout/layout";

//amplify stuff
import { DataStore } from "@aws-amplify/datastore";
import { AppRegistry } from "../models";
import { useAuthenticator } from "@aws-amplify/ui-react";
//

import AppsTable from "../components/appRegistry/apps_Table";


export default function Apps() {
  const [apps, setapps] = useState([]);
  const { user } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    fetchApps();
    async function fetchApps() {
      const groups = user.signInUserSession.accessToken.payload["cognito:groups"];
      console.log(groups);
      let appData = "";
      if (groups.includes("Admin")) {
        appData = await DataStore.query(AppRegistry);
        console.log(appData);
      } else {
        appData = await DataStore.query(AppRegistry, (a) =>
          a.createdBy("eq", user.attributes.email)
        );
      }
      setapps(appData);
    }

    const subscription = DataStore.observe(AppRegistry).subscribe(() =>
      fetchApps()
    );
    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
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
          <AppsTable apps={apps} userEmail={user.attributes.email} />
        </div>
      </Layout>
    </>
  );
}
