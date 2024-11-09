import EmailTemplate from "@/app/emails/EmailTemplate";
import { Resend } from "resend";

const resend_api = "re_gZw1iabF_JexLaJWf64WcDRU4ekC1GRTN";
const resend = new Resend(resend_api);
export async function POST(req: Request) {
  const { email } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "This is a test email",
      react: EmailTemplate({ buttonText: "Visit my boilerplate" }),
    });

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}