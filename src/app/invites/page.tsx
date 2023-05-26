import { findInfo } from "@/api/invite";
import { InviteTable } from "./table";

export default async function Invites() {
  const { answered, answeredYes, answeredNo, notAnswered } = await findInfo();

  return (
    <div className="w-full">
      <div className="mb-4">
        <p>Qnt. respondida: {answered}</p>
        <p>Qnt. que vai: {answeredYes}</p>
        <p>Qnt. negada: {answeredNo}</p>
        <p>Não respondido: {notAnswered}</p>
      </div>

      <InviteTable />
    </div>
  );
}
