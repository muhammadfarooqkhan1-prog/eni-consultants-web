"use server";

import { Resend } from "resend";

// Strictly reference process.env — DO NOT paste the actual key string here
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitAppointmentForm(formData: Record<string, string>) {
  try {
    const {
      fullName,
      email,
      phone,
      country,
      service,
      preferredDate,
      preferredTime,
      notes,
    } = formData;

    // 1. Basic Validation
    if (!fullName || !email || !phone || !preferredDate) {
      return {
        success: false,
        message: "Please fill out all required fields.",
      };
    }

    // 2. Email HTML Layout
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; padding: 24px; border-radius: 12px; color: #ffffff;">
        <h2 style="color: #ff7027; border-bottom: 2px solid #1e293b; padding-bottom: 12px; margin-top: 0;">
          📅 New Priority Consultation Request
        </h2>
        <p style="color: #94a3b8; font-size: 14px;">
          A new appointment request has been submitted through the ENI Consultants website.
        </p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px; color: #e2e8f0;">
          <thead>
            <tr style="background-color: #1e293b; text-align: left;">
              <th style="padding: 12px; border: 1px solid #334155; color: #ff7027;">Field</th>
              <th style="padding: 12px; border: 1px solid #334155; color: #ff7027;">Client Details</th>
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
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Current Residence</td>
              <td style="padding: 10px; border: 1px solid #334155;">${country}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Consultation Topic</td>
              <td style="padding: 10px; border: 1px solid #334155;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Preferred Date</td>
              <td style="padding: 10px; border: 1px solid #334155;">${preferredDate}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Preferred Slot</td>
              <td style="padding: 10px; border: 1px solid #334155;">${preferredTime}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold;">Notes</td>
              <td style="padding: 10px; border: 1px solid #334155;">${notes || "None provided"}</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top: 24px; padding-top: 12px; border-top: 1px solid #1e293b; text-align: center; font-size: 12px; color: #64748b;">
          Sent automatically via <strong>ENI Consultants Web Portal</strong>.
        </div>
      </div>
    `;

    // 3. Send Email via Resend API (HTTP Port 443)
    await resend.emails.send({
      from: "ENI Web Booking <onboarding@resend.dev>", // Replace with your domain once verified on Resend
      to: "info@eniconsultants.com",
      replyTo: email,
      subject: `New Appointment Booking: ${fullName} (${country})`,
      html: emailHtml,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Resend API Error:", error);
    return {
      success: false,
      message: error?.message || "Failed to submit request due to server error.",
    };
  }
}