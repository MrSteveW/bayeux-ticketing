'use server'

import { db } from "@/utils/utilities"

export async function createAttendee(formData) {
  const name = formData.get("name")
  const email = formData.get("email")
  const date = formData.get("date") || null

  await db.query(
    "INSERT INTO attendees (name, email, date) VALUES ($1, $2, $3)",
    [name, email, date]
  )
}
