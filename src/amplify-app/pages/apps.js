import Head from 'next/head'
import { useState, useEffect } from 'react'



import AdminLayout from '../components/layout/admin'

//components
import FormSldeOver from '../components/edit_slideover';


//amplify stuff
import { DataStore } from '@aws-amplify/datastore';
import { AppRegistry } from '../models';
//

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Apps() {
  const [apps, setapps] = useState([])
  const [open, setOpen] = useState(true)
  useEffect(() => {
    fetchApps()
    async function fetchApps() {
      const appData = await DataStore.query(AppRegistry)
      setapps(appData)
    } 
    const subscription = DataStore.observe(AppRegistry).subscribe(() => fetchApps())
    return () => subscription.unsubscribe()
  }, [])

  return (

    <AdminLayout>
      <main>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Apps</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {
          apps.map(apps => (
            <p key={apps.id}>{apps.name}</p>
        ))
      }
          </div>
        </div>
        <FormSldeOver></FormSldeOver>
        
      </main>

    </AdminLayout>

  )
}
