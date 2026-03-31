import { useForm } from "react-hook-form";
import { Button } from "./ui/button";

type DemoFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  compoundName: string;
  country: string;
  guardCount: string;
  challenge: string;
};

export default function DemoForm() {
  const { register, handleSubmit, formState } = useForm<DemoFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      compoundName: "",
      country: "",
      guardCount: "",
      challenge: "",
    },
  });

  const onSubmit = (data: DemoFormValues) => {
    console.log("Demo request", data);
  };

  const inputClass =
    "rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/50";
  const labelClass = "text-xs font-semibold uppercase tracking-[0.2em] text-white/50";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label className={labelClass}>First name</label>
          <input
            className={inputClass}
            placeholder="Ahmed"
            {...register("firstName", { required: true })}
          />
        </div>
        <div className="grid gap-2">
          <label className={labelClass}>Last name</label>
          <input
            className={inputClass}
            placeholder="Al-Rashid"
            {...register("lastName", { required: true })}
          />
        </div>
      </div>
      <div className="grid gap-2">
        <label className={labelClass}>Work email</label>
        <input
          className={inputClass}
          placeholder="ahmed@compound.com"
          type="email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="grid gap-2">
        <label className={labelClass}>Compound / facility name</label>
        <input
          className={inputClass}
          placeholder="Al Nakheel Compound"
          {...register("compoundName", { required: true })}
        />
      </div>
      <div className="grid gap-2">
        <label className={labelClass}>Country</label>
        <input
          className={inputClass}
          placeholder="Saudi Arabia"
          {...register("country", { required: true })}
        />
      </div>
      <div className="grid gap-2">
        <label className={labelClass}>Number of guards</label>
        <select
          className={inputClass}
          {...register("guardCount", { required: true })}
        >
          <option value="" className="bg-[#0b0b0d]">Select…</option>
          <option value="1-10" className="bg-[#0b0b0d]">1–10</option>
          <option value="11-25" className="bg-[#0b0b0d]">11–25</option>
          <option value="26-50" className="bg-[#0b0b0d]">26–50</option>
          <option value="51-100" className="bg-[#0b0b0d]">51–100</option>
          <option value="100+" className="bg-[#0b0b0d]">100+</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label className={labelClass}>What's your biggest challenge today? <span className="text-white/30">(optional)</span></label>
        <textarea
          className={`${inputClass} resize-none`}
          placeholder="Briefly describe your current pain point…"
          rows={3}
          {...register("challenge")}
        />
      </div>
      <Button type="submit" variant="primary" disabled={formState.isSubmitting}>
        Book my demo →
      </Button>
    </form>
  );
}
