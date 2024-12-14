import { UserTableRow } from './UserTableRow.jsx';

import styles from './UserTable.module.css';

export default function UserTable({ data }) {
  return (
    <div className={styles.tableContainer}>
      <table className={`${styles.table} ${styles.tableStriped}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nuotrauka</th>
            <th scope="col">Vardas</th>
            <th scope="col">El. paštas</th>
            <th scope="col">Įrašų kiekis</th>
            <th scope="col">Rolė</th>
            <th scope="col">Registracijos data</th>
            <th scope="col">Statusas</th>
            <th scope="col" className={styles.tableActions}>
              Veiksmai
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <UserTableRow key={item.id} userData={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
