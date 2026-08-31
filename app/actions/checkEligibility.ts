"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitEligibilityForm(formData: Record<string, string>) {
  try {
    const {
      fullName,
      email,
      phone,
      targetCountry,
      educationLevel,
      workExperience,
      englishProficiency,
      notes,
    } = formData;

    // 1. Basic Validation
    if (!fullName || !email || !phone || !targetCountry || !educationLevel) {
      return {
        success: false,
        message: "Please fill out all required fields.",
      };
    }

    // 2. Styled HTML Email Body
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; padding: 24px; border-radius: 12px; color: #ffffff;">
        <h2 style="color: #ff7027; border-bottom: 2px solid #1e293b; padding-bottom: 12px; margin-top: 0;">
          🎓 New Visa Eligibility Assessment Request
        </h2>
        <p style="color: #94a3b8; font-size: 14px;">
          A candidate has submitted their profile details for eligibility evaluation.
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px; color: #e2e8f0;">
          <thead>
            <tr style="background-color: #1e293b; text-align: left;">
              <th style="padding: 12px; border: 1px solid #334155; color: #ff7027;">Field</th>
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
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Target Country</td>
              <td style="padding: 10px; border: 1px solid #334155;">${targetCountry}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Highest Qualification</td>
              <td style="padding: 10px; border: 1px solid #334155;">${educationLevel}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Work Experience</td>
              <td style="padding: 10px; border: 1px solid #334155;">${workExperience || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">English Test Status</td>
              <td style="padding: 10px; border: 1px solid #334155;">${englishProficiency || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Additional Information</td>
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
      subject: `Eligibility Check: ${fullName} (${targetCountry})`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return {
        success: false,
        message: `Email sending failed: ${error.message}`,
      };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Eligibility Check Execution Error:", error);
    return {
      success: false,
      message: error?.message || "Failed to submit request due to a server error.",
    };
  }
}