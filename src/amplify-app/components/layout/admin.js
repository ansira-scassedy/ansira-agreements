import Head from "next/head";
import MainNav from "../mainnav";

import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
} from "@heroicons/react/solid";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminLayout({ children }) {
 
  return (
    <>
      <Head>
        <title>Ansira Agreement</title>
      </Head>
      <div className="min-h-full">
    <MainNav></MainNav>

        <div className="lg:pl-64 flex flex-col flex-1">

          <main className="flex-1 pb-8">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
