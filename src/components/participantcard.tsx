"use client";

import { useState } from "react";

export default function ParticipantCard({
  fullname,
  email,
  age,
  address,
}: {
  fullname: string;
  email: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='p-12 bg-gray-100 rounded-md space-y-7 text-lg'>
      <h1>{fullname}</h1>
      <button
        className='p-2 rounded-md bg-blue-500 text-white'
        onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Collapse" : "Show more"}
      </button>
      {isExpanded && (
        <>
          <h2>{email}</h2>
          <h3>{age}</h3>
          <h4>{address.street}</h4>
          <h4>{address.city}</h4>
          <h4>{address.state}</h4>
          <h4>{address.zip}</h4>
        </>
      )}
    </div>
  );
}
