import Link from "next/link";

export function TicketList({ tickets }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th></th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.id}>
            <td>{ticket.id}</td>
            <Link href={`/tickets/details/${ticket.id}`}>{ticket.title}</Link>
            <td>{ticket.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}