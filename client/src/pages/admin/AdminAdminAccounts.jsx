import { useEffect, useState } from "react";
import { PageTitle } from "../../components/admin/PageTitle";
import { UserTable } from "../../components/admin/UserTable";

export function AdminAdminAccounts() {
    const [tableData, setTableData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5114/api/admin/accounts/admins', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    setTableData(data.list);
                } else {
                    setError("Error: " + data.msg || "Unknown error");
                }
            })
            .catch((err) => {
                setError("Failed to fetch admins: " + err.message);
                console.error("Fetch error:", err);
            });        
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <PageTitle title="Visos administratorių paskyros" />
            <UserTable data={tableData} />
        </>
    );
}
