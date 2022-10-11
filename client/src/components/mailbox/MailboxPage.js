import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../../App.css';
import MailBox from './MailBox';
import { Navigate } from 'react-router-dom';
import Nav from '../common/Nav';

function MailboxPage() {
    let navigate = useNavigate();
  const [mailboxes, setMailboxes] = useState([]);
  const [selectedMailbox, setSelectedMailbox] = useState(-1);
  const [user, setUser] = useState({});

    useEffect(() => {
        let tmp = window.localStorage.getItem('user');
        tmp = JSON.parse(tmp);
        setUser(tmp);

        const fetchMailboxes = async () => {
            let res = await axios.get(`http://localhost:8000/api/mailboxes`);
            let { mailboxes } = res.data;

            setMailboxes(mailboxes);
        }

        fetchMailboxes();
    }, [])
    
    const purchaseMailbox = (idx) => {
        let mailboxId = mailboxes[idx]['_id'];

        let data = {
            mailboxId: mailboxId,
            userId: user._id
        }

        axios.post('http://localhost:8000/api/mailboxes', data)
        .then((res) => {
            navigate('/profile');
        })
        .catch((error) => {
            console.log(error);
        });
    }

  return (
    <div className="App container">
      <Nav />
      <div className="d-flex justify-content-center mb-4">
        <h1>Mailbox Rental</h1>
      </div>
      <div className="d-flex justify-content-between">
        <div className="block">
          {mailboxes.map((mailbox, idx) => (
            <MailBox key={idx} id={idx+1} onClick={() => setSelectedMailbox(idx)} isActive={idx === selectedMailbox} size={mailbox.size} isInUse={mailbox.userId != null && mailbox.userId != ''}/>
          ))}
        </div>
        <div>
          {selectedMailbox != -1 ?
            (
                <div>
                    <h2>Your selected lock is: #{selectedMailbox+1}</h2>
                    <button className='btn btn-primary' onClick={() => purchaseMailbox(selectedMailbox)}>Purchase</button>
                </div>
            )
            :
            <h2>Please select a mailbox.</h2>
          }
        </div>
      </div>
      
    </div>
  );
}

export default MailboxPage;
