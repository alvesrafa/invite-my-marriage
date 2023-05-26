"use client"; // Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log("error", error);

  return (
    <div>
      <h2>Opa, convite inválido</h2>
    </div>
  );
}
