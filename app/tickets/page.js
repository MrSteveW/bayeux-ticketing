import {Input} from  "@/components/ui/input"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { createAttendee } from "./actions"

export default function tickets() {
  return (
      <div className="h-screen text-white">
      <div className="h-20 w-3/4 bg-black">Tickets</div>
      <form action={createAttendee} className="grid grid-cols-[max-content_1fr] items-center gap-x-3 gap-y-3 w-3/4 bg-black p-4">
        <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
        <Input
          id="input-field-username"
          name="name"
          type="text"
          placeholder="Enter your username"
          className="w-64"
        />

        <FieldLabel htmlFor="input-field-email">Email</FieldLabel>
        <Input
          id="input-field-email"
          name="email"
          type="text"
          placeholder="Enter your email"
          className="w-64"
        />

        <FieldLabel htmlFor="input-field-date">Date</FieldLabel>
        <Input
          id="input-field-date"
          name="date"
          type="date"
          placeholder="Optional date"
          className="w-64"
        />

        <button type="submit" className="col-span-2 justify-self-start mt-2 rounded-lg bg-white px-4 py-1.5 text-sm font-medium text-black">
          Submit
        </button>
      </form>
    </div>
  );
}
