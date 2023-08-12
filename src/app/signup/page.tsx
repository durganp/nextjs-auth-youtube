'use client';

import Link from 'next/link';
import React, {useState} from 'react';
import {useRouter} from 'next/navigation';

const onSignup = async () => {
  try {
  } catch (err) {}
};

export default function SignupPage() {
  const [user, setUser] = useState({
    userName: '',
    password: '',
    email: '',
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="usernaem"
        type="text"
        placeholder="username"
        value={user.userName}
        onChange={e => setUser({...user, userName: e.target.value})}
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="password"
        placeholder="password"
        value={user.password}
        onChange={e => setUser({...user, password: e.target.value})}
      />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="email"
        type="email"
        placeholder="email"
        value={user.email}
        onChange={e => setUser({...user, email: e.target.value})}
      />
      <button
        onClick={onSignup}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
        Signup here
      </button>
      <Link href="/login">Go to login page </Link>
    </div>
  );
}
