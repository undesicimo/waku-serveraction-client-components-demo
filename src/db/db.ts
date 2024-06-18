import fs from "fs";

export type Participant = {
  name: string;
  email: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
};

class DB {
  db;
  data;

  constructor() {
    this.db = fs.readFileSync(
      process.cwd() + "/src/db/dummyParticipants.json",
      "utf8"
    );
    this.data = JSON.parse(this.db);
  }

  getParticipant(id: string) {
    return this.data[id];
  }
}

export default DB;
