import { Resend } from "resend";
import ConfirmEmail from "@/app/emails/confirm-email";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email } = await request.json();

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [email || "delivered@resend.dev"],
    subject: "Confirm your Mentions account",
    react: ConfirmEmail({ name }),
  });

  return NextResponse.json({
    status: "OK",
  });
}
