import { useEffect, useState } from 'react';
import { PageTitle } from '../../components/admin/PageTitle';
import { UserTable } from '../../components/admin/UserTable';

export function AdminBlockedAccounts() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(
      'https://social-website-final-backend.onrender.com/api/admin/accounts/blocked',
      {
        method: 'GET',
        credentials: 'include',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setTableData(data.list);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <PageTitle title="Visos blokuotos paskyros" />
      <UserTable data={tableData} />
    </>
  );
}
