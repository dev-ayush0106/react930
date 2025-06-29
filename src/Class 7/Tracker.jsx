// App.js
import React, { useReducer, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Tracker.css'

const initialState = JSON.parse(localStorage.getItem('applications')) || [];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter(app => app.id !== action.payload);
    case 'UPDATE_STATUS':
      return state.map(app =>
        app.id === action.payload.id
          ? { ...app, status: action.payload.status }
          : app
      );
    case 'LOAD':
      return action.payload;
    default:
      return state;
  }
}

function Tracker() {
  const [apps, dispatch] = useReducer(reducer, initialState);
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Applied');

  useEffect(() => {
    localStorage.setItem('applications', JSON.stringify(apps));
  }, [apps]);

  const handleAdd = () => {
    if (!company || !role || !date) return;
    const newApp = {
      id: uuidv4(),
      company,
      role,
      date,
      status,
    };
    dispatch({ type: 'ADD', payload: newApp });
    setCompany('');
    setRole('');
    setDate('');
    setStatus('Applied');
  };

  const updateStatus = (id, newStatus) => {
    dispatch({ type: 'UPDATE_STATUS', payload: { id, status: newStatus } });
  };

  const deleteApp = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const getStats = () => {
    const total = apps.length;
    const interviews = apps.filter(app => app.status === 'Interview').length;
    const offers = apps.filter(app => app.status === 'Offer').length;
    const rejections = apps.filter(app => app.status === 'Rejected').length;
    return { total, interviews, offers, rejections };
  };

  const stats = getStats();

  return (
    <div className="container">
      <h1>🎯 Job Application Tracker</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Rejected</option>
          <option>Offer</option>
        </select>
        <button onClick={handleAdd}>Add Application</button>
      </div>

      <div className="stats">
        <h3>📊 Stats</h3>
        <p>Total: {stats.total}</p>
        <p>Interviews: {stats.interviews}</p>
        <p>Offers: {stats.offers}</p>
        <p>Rejections: {stats.rejections}</p>
      </div>

      <div className="list">
        {apps.map((app) => (
          <div key={app.id} className="card">
            <h4>{app.company} - {app.role}</h4>
            <p>Date: {app.date}</p>
            <p>Status:
              <select
                value={app.status}
                onChange={(e) => updateStatus(app.id, e.target.value)}
              >
                <option>Applied</option>
                <option>Interview</option>
                <option>Rejected</option>
                <option>Offer</option>
              </select>
            </p>
            <button onClick={() => deleteApp(app.id)}>🗑 Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tracker;