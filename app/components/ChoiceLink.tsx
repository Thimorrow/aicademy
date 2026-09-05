import Link from "next/link";

export function ChoiceLink({
  href,
  title,
  hint,
}: {
  href: string
  title: string
  hint: string
}) {
  return (
    <Link className="choice" href={href}>
      <span className="title">{title}</span>
      <span className="hint">{hint}</span>
    </Link>
  );
}

export function Progress({ step }: { step: 1 | 2 }) {
  return (
    <p className="progress">
      <span className="sr-only">Question {step} of 2.</span>
      <b aria-hidden="true">{step}</b>
      <span aria-hidden="true">of 2</span>
    </p>
  );
}
