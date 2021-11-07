import React from 'react';
import ReactDOM from 'react-dom';

import Profile from './components/social-profile/Profile';
import user from './user.json';

import Statistics from './components/statistics/Statistics';
import statisticalData from './statistical-data.json';

import FriendList from './components/friend-list/FriendList';
import friends from './friends.json';

import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactions from './transactions.json';

import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={statisticalData} />
    <Statistics stats={statisticalData} />

    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />
  </React.StrictMode>,
  document.getElementById('root')
);