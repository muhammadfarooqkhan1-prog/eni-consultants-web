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

    // 1. Basic Validation
    if (!fullName || !email || !phone || !preferredDate) {
      return {
        success: false,
        message: "Please fill out all required fields.",
      };
    }

    // 2. Validate Environment Variables
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error(
        "[Nodemailer Error]: Missing SMTP environment variables in configuration"
      );
      return {
        success: false,
        message:
          "Server configuration error: Missing SMTP credentials. Check server logs.",
      };
    }

    // 3. Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // FIX: false for 587/2525, true ONLY for 465
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
      family: 4, // FIX: Forces IPv4 to prevent ENETUNREACH IPv6 errors on Railway
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    } as any);

    // 4. Construct Email HTML Template
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

    // 5. Send Email
    await transporter.sendMail({
      from: `"ENI Web Booking" <${smtpUser}>`,
      to: "info@eniconsultants.com",
      replyTo: email,
      subject: `New Appointment Booking: ${fullName} (${country})`,
      html: emailHtml,
    });

    return { success: true };
  } catch (error: any) {
    // Detailed error logging to terminal / server logs
    console.error("=== BOOKING ACTION ERROR LOG ===");
    console.error("Message:", error?.message || error);
    console.error("Code:", error?.code);
    console.error("Command:", error?.command);
    console.error("Full Error:", error);
    console.error("================================");

    return {
      success: false,
      message: error?.message || "Failed to submit request due to server error.",
    };
  }
}