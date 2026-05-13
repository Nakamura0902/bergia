import StudentForm from "./StudentForm";
import EnterpriseForm from "./EnterpriseForm";

export default function FormsSection() {
  return (
    <section className="py-24 bg-[#0b0b12]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#16162a] border border-white/10 rounded-2xl p-8">
            <StudentForm />
          </div>
          <div className="bg-[#16162a] border border-white/10 rounded-2xl p-8">
            <EnterpriseForm />
          </div>
        </div>
      </div>
    </section>
  );
}
