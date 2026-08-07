// Notice: NO "use client" here! This page stays a fast Server Component.
import ConsultationButton from "../components/ConsultationButton";

export default function ServicesPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>ENI Consultants - Services</h1>
      <p>We offer Student Visas and Work Permits worldwide.</p>
      
      {/* We insert our interactive button right here */}
      <div style={{ marginTop: "20px" }}>
        <ConsultationButton />
      </div>
    </main>
  );
}