"use client";

import { useState } from "react";
import { Participant } from "../db/db";
import ParticipantCard from "./participantcard";

export default function SearchBar() {
  const [participant, setParticipant] = useState<Participant | null>(null);
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
          onClick={async () => {
            if (inputValue === "") {
              return;
            }
            const res = await fetch(
              "https://jsonplaceholder.typicode.com/participants/?id=" +
                inputValue
            );
            const participant = (await res.json()) as Participant;
            setParticipant(participant);
          }}>
          Search Participant
        </button>
      </div>
      {participant && <ParticipantCard {...participant} />}
    </section>
  );
}
