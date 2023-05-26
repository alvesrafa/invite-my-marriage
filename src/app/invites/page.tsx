import { findAll, findInfo } from "@/api/invite";

export default async function Invites() {
  // const {} = usePagination({ pageSize: 10 });
  // const {} = useSession()
  const { answered, answeredYes, answeredNo, notAnswered } = await findInfo();

  const invites = await findAll();

  return (
    <div>
      <div className="mb-4">
        <p>Quantidade respondida: {answered}</p>
        <p>Quantidade que vai: {answeredYes}</p>
        <p>Quantidade negada: {answeredNo}</p>
        <p>Falta responder: {notAnswered}</p>
      </div>

      <table className="table-auto">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade de convidados</th>
            <th>Vai?</th>
          </tr>
        </thead>
        <tbody>
          {invites.map((invite) => (
            <tr key={invite.id}>
              <td>{invite.name}</td>
              <td>{invite.quantity}</td>
              <td>
                {!invite?.answer
                  ? "---"
                  : invite?.answer === "yes"
                  ? "Sim"
                  : "Não"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
