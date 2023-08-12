'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { axios } from 'axios';

const onLogin = async () => {
    try {
    } catch (err) { }
};

export default function LoginPage() {
    const [user, setUser] = useState({
        email: '',
        password: '',

    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Login</h1>
            <hr />
            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="email"
                placeholder="email"
                value={user.email}
                onChange={e => setUser({ ...user, email: e.target.value })}
            />
            <label htmlFor="password">password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                placeholder="password"
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}
            />
            <button
                onClick={onLogin}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
                Login
            </button>
            <Link href="/signup">If don't have id click here </Link>
        </div>
    );
}
