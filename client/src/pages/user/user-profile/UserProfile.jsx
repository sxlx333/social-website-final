import { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import { formatProfileDate } from '../../../../../client/src/lib/formatProfileTime.js';
import style from './UserProfile.module.css';
import defaultUserImage from '../../../assets/userDefaultProfile.svg';

export function UserProfile() {
  const { role, email, registeredAt, profileImage, updateProfileImage } =
    useContext(UserContext);
  const [image, setImage] = useState(profileImage);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const formattedRegisteredAt = formatProfileDate(registeredAt);

  function handleImageUpdate(e) {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);

      const formData = new FormData();
      formData.append('user_profile_image', file);

      fetch('http://localhost:5114/api/upload/profile', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 'success') {
            setImage(data.path);
            updateProfileImage(data.path);
          }
        })
        .catch(console.error);
    }
  }

  return (
    <div className={style.pageWrapper}>
      <main className={style.mainContainer}>
        <div className={`container px-4 ${style.userProfileContainer}`}>
          <div className="row align-items-center mb-5">
            <h1 className="text-center">Vartotojo profilis</h1>
          </div>
          <div className="row g-lg-5">
            <div className={`${style.profileHeader} mb-3`}>
              <img
                className={`${style.profileImage} ${style.fadeIn}`}
                src={image || defaultUserImage}
                alt="User"
              />
              <form>
                <input
                  id="profileImageInput"
                  onChange={handleImageUpdate}
                  type="file"
                  style={{ display: 'none' }}
                />
                <label
                  htmlFor="profileImageInput"
                  className={style.customButton}
                >
                  Pakeisti profilio nuotrauką
                </label>
              </form>
              {selectedFileName && (
                <p className={style.fileName}>
                  Selected file: {selectedFileName}
                </p>
              )}
            </div>
          </div>
          <div className={style.detailsGrid}>
            <div className={style.detailCard}>
              <p className={style.sectionHeader}>Rolė</p>
              <p className={style.sectionText}>{role}</p>
            </div>
            <div className={style.detailCard}>
              <p className={style.sectionHeader}>El. paštas</p>
              <p className={style.sectionText}>{email}</p>
            </div>
            <div className={style.detailCard}>
              <p className={style.sectionHeader}>Registracijos data</p>
              <p className={style.sectionText}>{formattedRegisteredAt}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
