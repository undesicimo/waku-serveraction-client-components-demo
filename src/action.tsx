"use server";

import ParticipantCard from "./components/participantcard";
import DB from "./db/db";

export function getParticipant(id: string) {
  const db = new DB();
  const participant = db.getParticipant(id);

  return (
    <ParticipantCard
      fullname={participant.name}
      email={participant.email}
      age={participant.age}
      address={participant.address}
      key={id}
    />
  );
}
