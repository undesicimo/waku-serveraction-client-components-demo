"use client";

import { useState } from "react";

export default function SearchBar({ getParticipant }: { getParticipant: any }) {
  const [participant, setParticipant] = useState(null);
  const [inputValue, setInputValue] = useState("");
  return (
    <section className='flex flex-col gap-2 p-4'>
      <div className='flex flex-row  gap-2'>
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className='p-2 border border-gray-300 rounded-md'
          type='text'
          name='id'
          placeholder='id'
        />
        <button
          className='p-2 border border-gray-300 rounded-md hover:bg-gray-200 hover:text-gray-900 hover:scale-105 text-sm'
          onClick={() => {
            if (inputValue === "") {
              return;
            }
            const participant = getParticipant(inputValue);
            setParticipant(participant);
          }}>
          Search Participant
        </button>
      </div>
      {participant}
    </section>
  );
}
