import React, { useState, useEffect } from "react";

export default function UserProfile() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        data.fullName = `${data.firstName} ${data.lastName}`;
        setUser(data);
      });
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.fullName}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
