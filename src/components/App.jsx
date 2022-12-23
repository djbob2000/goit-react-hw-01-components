import './App.css';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transaction/TransactionHistory/TransactionHistory';


import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  const { username, tag, location, stats, avatar } = user;
  return (
    <>

          <Profile
            username={username}
            tag={tag}
            location={location}
            avatar={avatar}
            stats={stats}
          />
          <Statistics title={'Upload stats'} stats={data} />
          <FriendList friends={friends} />

        <TransactionHistory transactions={transactions} />

    </>
  );
};
