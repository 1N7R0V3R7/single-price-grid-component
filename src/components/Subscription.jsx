import React from 'react'

function Subscription() {
  return (
    <div className="bg-primary-cyan text-white p-6 md:p-8 md:rounded-bl-lg">
      <p className="font-bold">
        Monthly Subscription
      </p>
      <p className="flex items-center mt-4 mb-2">
        <span className="font-bold text-3xl mr-4">$29</span>
        <span className="text-gray-300">per month</span>
      </p>
      <p className="text-neutral-gray">Full access for less than $1 a day</p>
      <button className="bg-primary-yellow rounded-lg w-full py-3 shadow-lg mt-8">
        Sign Up
      </button>
    </div>
  )
}

export default Subscription