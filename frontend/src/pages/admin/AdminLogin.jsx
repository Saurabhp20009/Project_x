import React from 'react'

const AdminLogin = () => {
  
    const imageUrl = '/images/admin_login_background.webp';
    console.log(imageUrl);
    return (
        <div>
            <div style={{ backgroundImage: `url(${imageUrl})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
        </div>
    );
}

export default AdminLogin