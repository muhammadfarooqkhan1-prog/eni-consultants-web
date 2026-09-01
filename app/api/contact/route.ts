import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, country, service, message } = body;

    // Validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Styled Dark-Mode HTML Email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #0f172a; padding: 28px; border-radius: 12px; color: #ffffff;">
        <h2 style="color: #ff7027; border-bottom: 2px solid #1e293b; padding-bottom: 12px; margin-top: 0;">
          📬 New Contact Inquiry Submitted
        </h2>
        <p style="color: #94a3b8; font-size: 14px; margin-bottom: 20px;">
          A client has sent a direct message from the website contact page.
        </p>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #e2e8f0;">
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold; width: 35%;">Full Name</td>
              <td style="padding: 10px; border: 1px solid #334155;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Email Address</td>
              <td style="padding: 10px; border: 1px solid #334155;"><a href="mailto:${email}" style="color: #ff7027;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Phone / WhatsApp</td>
              <td style="padding: 10px; border: 1px solid #334155;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Country</td>
              <td style="padding: 10px; border: 1px solid #334155;">${country}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Service Interested In</td>
              <td style="padding: 10px; border: 1px solid #334155;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Message / Notes</td>
              <td style="padding: 10px; border: 1px solid #334155;">${message || "No message attached"}</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top: 24px; padding-top: 12px; border-top: 1px solid #1e293b; text-align: center; font-size: 12px; color: #64748b;">
          Sent automatically via <strong>ENI Consultants Web Portal</strong>.
        </div>
      </div>
    `;

    // Send Email via Resend
    const { error } = await resend.emails.send({
      from: "ENI Web Portal <notifications@eniconsultants.com>",
      to: ["info@eniconsultants.com"],
      replyTo: email,
      subject: `New Inquiry: ${fullName} (${service})`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Contact Handler Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}