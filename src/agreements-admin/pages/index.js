import Head from 'next/head'
import { useState, useEffect } from 'react'

import AdminLayout from '../components/layout/admin'
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

// import { DataStore } from '@aws-amplify/datastore';
// import { Agreements } from '../models';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// async function Getagreements () {
//   const models = await (await DataStore.query(Agreements)).map(agreement => ({}));
//   console.log(models);
// }
// let agreementData = Getagreements();

export default function Home({ posts = [] }) {
  const [posts, setPosts] = useState(posts);
  useEffect(() => {
    // 👇 Notice how the client correctly uses the top-level `API` import
    API.graphql({ query: listAgreements }).then(({ data }) => setPosts(data.listAgreements.items));
  }, [])

  console.log(posts)

  return (

    <AdminLayout>
      <main>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="py-4">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </AdminLayout>

  )
}
