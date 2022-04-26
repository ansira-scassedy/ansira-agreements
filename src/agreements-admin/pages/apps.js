import Head from 'next/head'

import AdminLayout from '../components/layout/admin'

import { DataStore } from '@aws-amplify/datastore';
import { AppRegistry } from '../models';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

async function Getagreements () {
  const models = await (await DataStore.query(AppRegistry)).map(app => ({}));
  console.log(models);
}

export default function Apps() {
let appData = Getagreements();

  return (

    <AdminLayout>
      <main>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Apps</h1>
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
