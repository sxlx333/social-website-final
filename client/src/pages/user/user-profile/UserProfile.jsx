import { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import { formatProfileDate } from '../../../../../client/src/lib/formatProfileTime.js';
import style from './UserProfile.module.css';

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
    <main>
      <div className={`container px-4 ${style.userProfileContainer}`}>
        <div className="row align-items-center mb-5">
          <h1>Vartotojo profilis</h1>
        </div>
        <div className="row g-lg-5">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <img
              className={`${style.profileImage} fadeIn`}
              src={image}
              alt="User"
            />
            <form>
              <input
                id="profileImageInput"
                onChange={handleImageUpdate}
                type="file"
                style={{ display: 'none' }}
              />
              <label htmlFor="profileImageInput" className={style.customButton}>
                Change Profile Picture
              </label>
            </form>
            {selectedFileName && (
              <p className={style.fileName}>
                Selected file: {selectedFileName}
              </p>
            )}
          </div>
        </div>
        <div className="row g-lg-5">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <p className={style.sectionHeader}>Rolė</p>
            <p className={style.sectionText}>{role}</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <p className={style.sectionHeader}>El. paštas</p>
            <p className={style.sectionText}>{email}</p>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <p className={style.sectionHeader}>Registracijos data</p>
            <p className={style.sectionText}>{formattedRegisteredAt}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
