"use server";

import nodemailer from "nodemailer";

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

    if (!fullName || !email || !phone || !preferredDate) {
      return { success: false, message: "Please fill out all required fields." };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

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
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold; background-color: #0f172a;">Full Name</td>
              <td style="padding: 10px; border: 1px solid #334155; background-color: #0f172a;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold; background-color: #1e293b;">Email Address</td>
              <td style="padding: 10px; border: 1px solid #334155; background-color: #1e293b;"><a href="mailto:${email}" style="color: #ff7027;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold; background-color: #0f172a;">Phone / WhatsApp</td>
              <td style="padding: 10px; border: 1px solid #334155; background-color: #0f172a;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold; background-color: #1e293b;">Current Residence</td>
              <td style="padding: 10px; border: 1px solid #334155; background-color: #1e293b;">${country}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold; background-color: #0f172a;">Consultation Topic</td>
              <td style="padding: 10px; border: 1px solid #334155; background-color: #0f172a;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold; background-color: #1e293b;">Preferred Date</td>
              <td style="padding: 10px; border: 1px solid #334155; background-color: #1e293b;">${preferredDate}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold; background-color: #0f172a;">Preferred Slot</td>
              <td style="padding: 10px; border: 1px solid #334155; background-color: #0f172a;">${preferredTime}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #334155; font-weight: bold; background-color: #1e293b;">Background / Goal Notes</td>
              <td style="padding: 10px; border: 1px solid #334155; background-color: #1e293b;">${notes || "None provided"}</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top: 24px; padding-top: 12px; border-top: 1px solid #1e293b; text-align: center; font-size: 12px; color: #64748b;">
          Sent automatically via <strong>ENI Consultants Web Portal</strong>.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"ENI Web Booking" <${process.env.SMTP_USER}>`,
      to: "info@eniconsultants.com",
      replyTo: email,
      subject: `New Appointment Booking: ${fullName} (${country})`,
      html: emailHtml,
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to process appointment request:", error);
    return { success: false, message: "Server error. Please try again later." };
  }
}