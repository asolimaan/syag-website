import { useForm } from "react-hook-form";
import { Button } from "./ui/button";

type DemoFormValues = {
  name: string;
  email: string;
  company: string;
};

export default function DemoForm() {
  const { register, handleSubmit, formState } = useForm<DemoFormValues>({
    defaultValues: { name: "", email: "", company: "" }
  });

  const onSubmit = (data: DemoFormValues) => {
    console.log("Demo request", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-navy">Full name</label>
        <input
          className="rounded-2xl border border-navy/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-electric"
          placeholder="Jordan Lee"
          {...register("name", { required: true })}
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-navy">Work email</label>
        <input
          className="rounded-2xl border border-navy/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-electric"
          placeholder="jordan@fund.com"
          type="email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-semibold text-navy">Company</label>
        <input
          className="rounded-2xl border border-navy/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-electric"
          placeholder="Northwind Capital"
          {...register("company", { required: true })}
        />
      </div>
      <Button type="submit" variant="primary" disabled={formState.isSubmitting}>
        Book a walkthrough
      </Button>
    </form>
  );
}
