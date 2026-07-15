import { db } from "@/utils/utilities";

export default async function attendees() {
  const attendees = (await db.query('SELECT * FROM attendees')).rows
  return (
      <div className="h-screen">
      <div className="h-20 w-3/4 bg-black">Attendees</div>
      <div className="h-20 w-3/4 bg-black">{JSON.stringify(attendees)}</div>
    </div>
  );
}
