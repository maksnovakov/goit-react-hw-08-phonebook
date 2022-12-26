import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import styles from './RegistrationPage.module.css';

export default function RegistrationPage() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({ name: '', email: '', password: '' });

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = event => {
        event.prevDefault();
        dispatch(authOperations.register({ ...form }));
        setForm({ name: '', email: '', password: '' });
    };

    const { name, email, password } = form;

    return (
        <div className={styles.section}>
            <h2 className={styles.title}>Please enter your registration details</h2>
            <form onSubmit={handleSubmit}>
                <label className={styles.label}>
                    Name
                    <input
                        className={styles.input}
                        type='text'
                        name='name'
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces."
                        placeholder='Example John'
                        required
                        value={name}
                        onChange={handleChange}
                    />
                </label>
                <label className={styles.input}>
                    Email
                    <input
                        className={styles.input}
                        type='email'
                        name='email'
                        pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
                        title="Enter your email"
                        placeholder='Example user@gmail.com'
                        required
                        value={email}
                        onChange={handleChange}
                    />
                </label>
                <label className={styles.label}>
                    Password
                    <input
                        type='password'
                        name='password'
                        required
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <button type='submit' className={styles.button}>
                    Register
                </button>
            </form>
        </div>
    );
}