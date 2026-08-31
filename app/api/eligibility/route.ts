import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      countryOfResidence,
      pathway,
      ageGroup,
      educationLevel,
      workExperience,
      englishProficiency,
      hasJobOffer,
      notes,
    } = body;

    // 1. Validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // 2. Styled Dark-Mode HTML Email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #0f172a; padding: 28px; border-radius: 12px; color: #ffffff;">
        <h2 style="color: #ff7027; border-bottom: 2px solid #1e293b; padding-bottom: 12px; margin-top: 0;">
          🎓 New Points Grid & Visa Assessment Request
        </h2>
        <p style="color: #94a3b8; font-size: 14px; margin-bottom: 20px;">
          A candidate has submitted their parameters for eligibility evaluation.
        </p>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #e2e8f0;">
          <thead>
            <tr style="background-color: #1e293b; text-align: left;">
              <th style="padding: 12px; border: 1px solid #334155; color: #ff7027; width: 40%;">Parameter</th>
              <th style="padding: 12px; border: 1px solid #334155; color: #ff7027;">Candidate Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Full Name</td>
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
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Country of Residence</td>
              <td style="padding: 10px; border: 1px solid #334155;">${countryOfResidence}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Target Pathway</td>
              <td style="padding: 10px; border: 1px solid #334155;">${pathway}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Age Group</td>
              <td style="padding: 10px; border: 1px solid #334155;">${ageGroup}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Highest Qualification</td>
              <td style="padding: 10px; border: 1px solid #334155;">${educationLevel}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Work Experience</td>
              <td style="padding: 10px; border: 1px solid #334155;">${workExperience}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">English Proficiency</td>
              <td style="padding: 10px; border: 1px solid #334155;">${englishProficiency}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Overseas Job Offer</td>
              <td style="padding: 10px; border: 1px solid #334155;">${hasJobOffer}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Additional Notes</td>
              <td style="padding: 10px; border: 1px solid #334155;">${notes || "None provided"}</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top: 24px; padding-top: 12px; border-top: 1px solid #1e293b; text-align: center; font-size: 12px; color: #64748b;">
          Sent automatically via <strong>ENI Consultants Web Portal</strong>.
        </div>
      </div>
    `;

    // 3. Send Email via Resend
    const { error } = await resend.emails.send({
      from: "ENI Web Portal <notifications@eniconsultants.com>",
      to: ["info@eniconsultants.com"],
      replyTo: email,
      subject: `Eligibility Check: ${fullName} (${pathway})`,
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
    console.error("Eligibility Handler Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
