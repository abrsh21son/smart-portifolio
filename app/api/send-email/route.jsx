import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { subject, text } = await request.json();

  try {
    await resend.emails.send({
      from: 'abrshtoday@gmail.com',
      to: process.env.NEXT_PUBLIC_EMAIL_RECEIVER,
      subject: subject,
      text: text,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
    });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error sending email' }), {
      status: 500,
    });
  }
}