/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ROLE } from '../../lib/enums';
import style from './UserRoleSelect.module.css';
export function UserRoleSelect({ userId, currentRole }) {
  const [newRole, setNewRole] = useState(currentRole);

  function handleChange(e) {
    setNewRole(e.target.value);

    fetch(
      'https://social-website-gandalizdis.onrender.com/api/admin/change-account-role',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          userId: userId,
          newRole: e.target.value,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);
  }

  return (
    <select
      name="role"
      value={newRole}
      onChange={handleChange}
      className={style.userRoleSelect}
    >
      {Object.values(ROLE)
        .filter((role) => role !== ROLE.PUBLIC)
        .map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
    </select>
  );
}
