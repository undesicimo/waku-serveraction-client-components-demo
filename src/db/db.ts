import fs from "fs";
class DB {
  db: any;
  data: any;

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
