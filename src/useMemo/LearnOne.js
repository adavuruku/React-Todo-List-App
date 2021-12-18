import React, { useEffect, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function LearnOne({ id }) {
  const [user, setUser] = useState({ name: '', email: '' });
  const [userId, setUserId] = useState(id);

  const fetchUser = async () => {
      console.log('userId ',userId)
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const newUser = await res.json();
    setUser(newUser);
  };
  const onChange = event => {
    setUserId(i => Number(event.target.value) > 0 ? Number(event.target.value) : 1);
  };
//   const onClick = () => setUserId(i => i + 1);
  useEffect(() => {
    fetchUser();
  }, [userId]);
  return (
      <div>
          UserId  
        <input type="number" value={userId} onChange={onChange} />
        
        <ListItem dense divider>
            <ListItemText primary={user.name} secondary={user.email} />
        </ListItem>
      </div>
    
  );
}

export default LearnOne;