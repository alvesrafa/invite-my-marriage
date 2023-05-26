import { findInfo } from "@/api/invite";

export default async function Info() {
  const test = async () => {
    "use server";
    const { answered, answeredYes, answeredNo, notAnswered } = await findInfo();
  };

  return (
    <div className="mb-4">
      <p>Qnt. respondida: {answered}</p>
      <p>Qnt. que vai: {answeredYes}</p>
      <p>Qnt. negada: {answeredNo}</p>
      <p>Não respondido: {notAnswered}</p>
    </div>
  );
}
