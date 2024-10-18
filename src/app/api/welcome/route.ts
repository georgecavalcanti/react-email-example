import { Resend } from "resend";
import EmailExample from "@/app/email/email-example";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  // const { name, email } = await request.json();

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["delivered@resend.dev"],
    subject: "Example Subject",
    react: EmailExample({}),
  });

  return NextResponse.json({
    status: "OK",
  });
}
