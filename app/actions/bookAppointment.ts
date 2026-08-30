"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.re_4cjYgxRo_F1ktoE9JHPujP5apGYHqgVkU);

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
      return {
        success: false,
        message: "Please fill out all required fields.",
      };
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f172a; padding: 24px; border-radius: 12px; color: #ffffff;">
        <h2 style="color: #ff7027;">📅 New Priority Consultation Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Topic:</strong> ${service}</p>
        <p><strong>Date/Slot:</strong> ${preferredDate} (${preferredTime})</p>
        <p><strong>Notes:</strong> ${notes || "None"}</p>
      </div>
    `;

    // Resend sends over HTTPS (Port 443) — Guaranteed not to time out on Railway
    await resend.emails.send({
      from: "ENI Web Booking <onboarding@resend.dev>", // Or your domain once verified
      to: "info@eniconsultants.com",
      replyTo: email,
      subject: `New Appointment Booking: ${fullName} (${country})`,
      html: emailHtml,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Resend Email Error:", error);
    return {
      success: false,
      message: error?.message || "Failed to submit request due to server error.",
    };
  }
}