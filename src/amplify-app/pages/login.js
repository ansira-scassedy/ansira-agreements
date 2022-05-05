import Head from 'next/head'
import { useState, useEffect } from 'react'

import { LockClosedIcon } from '@heroicons/react/solid'

export default function Login() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAArCAYAAACq2WBoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBNTg4QjI3OThCMThFMzExQkNDRUQ5RTc4RjM4N0M5NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNzBGNEJGQUNCMkQxMUU4ODJBMEI3MzIwNkE3RjVGMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNzBGNEJGOUNCMkQxMUU4ODJBMEI3MzIwNkE3RjVGMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNmMmU5MzY4LTBjMjgtNGQ0ZS1hMDc1LTA3YTE5YjhhYzViNyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmQxM2Q0NzYyLTdjMGQtNzA0My05ODU2LWEzZGFkOTVkM2E5YiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiGKaWsAAApySURBVHja7FwLlFVVGd7ABAJ2gAHEBSkIpLjMSUzNCpalhA8wNUXIjN6rVRkrfPSyEl+JpMYqSo1sZaIrFVHU1AI1S0i05YwjacZMMOKkIEpucIzhMX3f2f+VM7dz9tn7nnuvM7POv9Z/74W9zz5n7//b/2v/Z3qpnDLT63Xjh+DrYvAM8IHgreDfgy+pbWz6V0+aa69c3JnBMgpfj4HHxTRr8CkAzaqeMt/eucgz028TwEIKwEsBqn1zwORE7XI0vo5P6bY/+DM5YHIifaTM/XLA9HByNTUDcsDkRFrv2G9DDpicSA+A33Tod3sOmJwUwmXmW76TFkWh35ocMDkVQLMIXxeA/xvTvBj85Z403zxxV74Qmwm8U8GjwVvADwJMz/W0eToAJqjFx0fBzDm8Fzwy4vUzk/kamAvzJHgl/ivFpgdBsmbT/ynq20+EwFzHBG5oadgM/gf4TypMwesd/lMPamReHwIfAd4P/G5p3CQOLef0EMb/d3mWO+B6D7J02IZ77Y7074OPKeBp4MPBQ8RnWgv+Mfo2JdyH/Y6LyIxgHrj3HqHMno/IbFtGwAQU6Gngr4E/Bu7jOB7V8i3gK/EQLQljb5BdGAeYXpGFpSq/Ajw85Z5bzP3UzzovdqLQhuHjIvBnwSMc5tQBfgR8OcZ/LKJRjsTXbeDV4Cfk+zlolT3SfpCA8cPgY8HX1zZuvkuZc6Ykmoh7NMhzTjVzUgcn9D0Dfe8pktk0kRlBVuMos3bwrSKz5hIAE3DX/VQQXSpxF3wdD3CzP2DCnU/QzfK85woVHv7pNyxg+aT4FbUlzovHAF/FPdoAiH4yzz6dNYR6BjxemQxvlI4FYF5wA0xwCX7PS3mWCGCCSSKziRlk9hZ4Lsa80dHppfoLFuDHoxnBokT9/QbjfbOEa68vASykj4OXCeDiwAJBq7sygIU0W4UHjcEgaJIdYoqjRJM2KQYs1DqNjmZrjgNYojK73DxTJrCQ+oNvwHjfcgBM0Bcfd4iqLiddi7Ene9j4T+DjSxnuR1/nwphx+f+LyjSno8C/lN8Njte8AIC95dCPG/UaxzFrRON9v8zR7tVYrxNcwup3OQy2E/wieB3NtGPYvkh8EseHzUzfE6cvattvKOOibokI1RUw9Y79LnWUQ8G36ufQb5enzEg/l3VLAoxuN/Y/NEfF9Cr4KvG4ER1p+B8ajpgeKr7IhdInierEXLjQBMukOxzHoFk4N/LvkyVSsDnqBNTp4qBOE8FtjOnbaoIA/ZQnYFz7HeQBXDr454Dvi2ljFLRAnO3+RTI70Pgq6hXL2IeAp6domDA0ZadVESHNM6DQ2LX6b+BdRU4qkKthdtShEqIl0Vkl7OSnJZJhGN9Xdt4Hwcsdrj0j8nu6pZ82kYymI4tx9V/BD4DnCch+EunbbMJwvbYEzdGQQZsxcKBf8ynwV8CXmVCfDne40WdFNvpu2dxj0PZt8JoYmWEj6IUiM1th10zXKGmQhFk/wsCrPfwPhqj/VKZoqJjWGYSnRUlv00KjuZLC5OAXJlpJpO3mOTS0UvC4Si4vmI8+302ZF9ZB0bc6CX1fiknYtciutdFw+DAQfjA4JUqKatRLjQ+oHXyfgHmxO41W2Rv6O1xHjcPIbWhMI+aqD7D5MAUEIizV0/3AEl63SXZDHCHMDPZxHOiP4PNTcipMxduSaSw7GCu/h1r6NTk8zw/Ak+PA4qhlWg1YnGmXhMxXuIElXPs28DQ/sITX0XT9KqHxPQLwNMBkor9Y8j2jHMeYazSDdaJcyCUp44yICCCJZqQ75ASu3prB3PiaIybQ7lfVo8ctbSMrDRib8zvM4Xr6Sa7nLytS2gsp+JctfU404wTHZJhzfcb2Ymf1GlVd2mRpGxoXy6fZud7GpIQRzATjUIXJr1pJ0A0sMgW2xFCpGiqO1qa0F0LONSlR2gmmT7BRzOFKkwjTL5fJofXRMLfjvtuzYyDUmuPEsT1EzPOQiMz2dZRLf0fAhIk8hplnSzJsSJXQ3uzeVb8S71//H9GBv1ilH7TSwfuiMNegWcCz3AAp3qeCf9ICx5eHpoPLoGEezQASyvJUkdkUR42eRgNSTBK1ScDQbb1BuzqzimBRyq16zbO/5qn24hKeZZyEsayqazHHHOFG8gGFVu5lnKQSXnoLZfYFuXaZhNnDKiWg6FkST4UfliTWSNU9aJdjvzlibkqlUZKTeRLrNNbD7DwDDdThcZ89nmChj/Eg+CbRkBWnwlkStcgjJjHVEylMSp6iTDnlmxkGej/4z1ivAxwB01C5OYV1RX8AT63mShZ8GB7Mvc9Dba4zajo8Et8e2emzxMnqiqChD8KDNeYdPqdM5vQDJWqbm4oEVV8G/8WXrvN4fsqKpplnSm1FMjtdNoIrYAIei5+T0u8J8QPuxcJbklDBEV0XMJ2SVdcaDrPTLBCbJFyn3MpWEXUFR0fOlFi9xjR93+pomODQvc65LUURnqrzyGOzZawxPoDp7XDjb+CGPG/5tR0sIXWzGmFmp/XvwOeBCXb6cbNTklkFOi0SKXG3PhvjX62t0IN/PqWdB8LHYE6L7WDplH5wBsxxlvYbcUOfOpIRqlsTtY++BTxZNlJHij9j0yZ/B5B2VuhBbTK72RwIa1dnez9fwIy1J5Kc1WRfH9XWDcADjRrW7CbRsBTAVNJ/scnsTg+Zsbz0KF/A2N779QkJ6fDu07VBwMq7sKrPlZ72CIHrqxchWctMd3uMwzxb4AsY2w1OchQEJ3BZ1weL4qHeUg/Q1Fnais/NGos2WCUBs60MMuNZ25Wl5GHWWdrPl9cdbDememQKfXQXBgsBwgQXz0ZYiHW3KXYOLGdpAdPsn7YM+lSnLd/YRCE2VwkwtrKM8+TZbetBWTGROb6UPAyTP0mlkVzch3CDJWLPuYt2ikpkOM5yxpnKvQ71nQLL0qJn7G1yMow2AoaePMNplbCY0RL/ANDZKVHf3Ql5FwphPQD0RgUntcKSg+ljQumARf1LBLg7RGYsMmcC89xSZVZjIiGGzomlDr1kAV3+ihKzqAO7OFiixI1yXQkDL0sow6BwZlRYu5AWS+hcY5HZTJVQZllETOI5/0k1gEQz6bSwDJNgMfVFqucTi6fnJLTVVyFCYgTHbPuCMgzULsrCSuNGj9kfPBX89qsErGu9L8ON90iU9HwXC43vVaYet1zmgWYLPp1uTWhvqIL/UqAfGk2XSWaz054VIKHfxyTlYeCzoq+ZnCnqucPzxq/KIi7vmgpBs8L+SJXttJp0hxlHP5sY6zY2sehqc3UAE56N0c+a7xlKk/h+Euu2XfJstdKfhWavRWygpjN7Aew+36abKw9jq8baKrZ0fqTmlWapxWKySC+l2FMfetGSR2grUuEnyluYNCcnO/paBMA9Zp7a1cysAHA2WnZ1S4qJ8AUNrENwq8iMWt6WV2OhFxOSV0WOedotz9TW3LKhFVqmXa7bYYkCAjpCrHXlC2zMag4WgbaIjV4tIOuGFL7BMFHyLGPU3lJTLbuJqQaeA8Gx1V41Kq/XjZ8CwKx8h+Y1QGRGHh6R2UaR2SqxJiXT/wQYAL7Bwd6RkXweAAAAAElFTkSuQmCC"
              alt="Ansira"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Create Account
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
