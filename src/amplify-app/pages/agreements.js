import Head from 'next/head'

import AdminLayout from '../components/layout/admin'


// amplify stuff
import { Amplify, API } from "aws-amplify";
import awsExports from "../src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

import { Agreement } from '../models';
// end amplify 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// async function Getagreements () {
//   const models = await (await DataStore.query(Agreements)).map(agreement => ({}));
//   console.log(models);
// }
// let agreementData = Getagreements();

export default function Agreements() {


  return (

    <AdminLayout>
      <main>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Agreements</h1>
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
