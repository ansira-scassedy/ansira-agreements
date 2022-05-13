import Head from "next/head";
import MainNav from "../mainnav";

import { useState, useEffect } from "react";
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';

import { useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from "aws-amplify";


function AdminLayout({children, isPassedToWithAuthenticator, signOut, user }) {
  // const [user, UpdateUser] = useState(null);

  // if (!isPassedToWithAuthenticator) {
  //   throw new Error(`isPassedToWithAuthenticator was not provided`);
  // }
  // useEffect(() => {
  //   Auth.currentAuthenticatedUser()
  //     .then((user) => {
  //       console.log("User: ", user.attributes.email);
  //       UpdateUser(user);
  //     })
  //     .catch(() => UpdateUser(null));
  // }, []);
console.log(user.attributes.email)
  return (
    <>
     <Authenticator.Provider>
      <Head>
        <title>Ansira Agreement</title>
      </Head>
      <div className="min-h-full">
         <MainNav></MainNav>
        <div className="lg:pl-64 flex flex-col flex-1">
        {/* <button
        type="button"
        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={signOut}>
        Button text
      </button> */}
          <main className="flex-1 pb-8">{children}</main>
        </div>
      </div>
      </Authenticator.Provider>
    </>
  );
}

export default withAuthenticator(AdminLayout);


export async function getStaticProps() {
  return {
    props: {
      isPassedToWithAuthenticator: true,
    },
  };
}