/* eslint-disable react/prop-types */
import styles from './Table.module.css';
import { UserRoleSelect } from './UserRoleSelect';
import defaultUserImage from '../../assets/userDefaultProfile.svg';
import { useState } from 'react';
import { API_RESPONSE_STATUS } from '../../lib/enums';
import { formatProfileDate } from '../../lib/formatProfileTime';

export function UserTableRow({ userData }) {
  const [canDelete, setCanDelete] = useState(true);
  let statusText = '';
  let statusStyle = '';

  switch (userData.status) {
    case 1:
      statusText = 'initial';
      statusStyle = 'bg-warning';
      break;
    case 2:
      statusText = 'active';
      statusStyle = 'bg-success';
      break;
    case 3:
      statusText = 'blocked';
      statusStyle = 'bg-danger';
      break;

    default:
      statusText = 'initial';
      statusStyle = 'bg-info';
      break;
  }

  function handleDelete() {
    fetch(
      'https://social-website-final-backend.onrender.com/api/admin/accounts/' +
        userData.id,
      {
        method: 'DELETE',
        credentials: 'include',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === API_RESPONSE_STATUS.SUCCESS) {
          setCanDelete(false);
        }
      })
      .catch(console.error);
  }

  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableCell}>{userData.id}</td>
      <td className={styles.tableCell}>
        <img
          className={styles.profileImage}
          src={userData.profile_image || defaultUserImage}
          alt={userData.username}
        />
      </td>
      <td className={styles.tableCell}>{userData.username}</td>
      <td className={styles.tableCell}>{userData.email}</td>
      <td className={styles.tableCell}>{userData.post_count}</td>
      <td className={styles.tableCell}>
        <UserRoleSelect userId={userData.id} currentRole={userData.role} />
      </td>
      <td className={styles.tableCell}>
        {formatProfileDate(userData.registered_at)}
      </td>
      <td className={styles.tableCell}>
        <span className={`badge rounded-pill ${statusStyle}`}>
          {statusText}
        </span>
      </td>
      <td className={styles.tableCell}>
        {canDelete && (
          <button
            onClick={handleDelete}
            className={`btn btn-danger btn-sm ${styles.deleteButton}`}
            type="button"
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  );
}
