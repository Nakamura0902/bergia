import StudentForm from "./StudentForm";
import EnterpriseForm from "./EnterpriseForm";

export default function FormsSection() {
  return (
    <section style={{ background: "#0b0b12", padding: "80px 0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="rounded-2xl p-8"
            style={{ background: "#16162a", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <StudentForm />
          </div>
          <div
            className="rounded-2xl p-8"
            style={{ background: "#16162a", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <EnterpriseForm />
          </div>
        </div>
      </div>
    </section>
  );
}
