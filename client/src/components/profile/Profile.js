import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Nav from '../common/Nav';

function Profile(props) {
    let navigate = useNavigate();
    const [mailboxes, setMailboxes] = useState([]);

    useEffect(() => {
        let user = window.localStorage.getItem('user');
        user = JSON.parse(user);

        const fetchMailboxes = async (userId) => {
            let res = await axios.get(`http://localhost:8000/api/private_mailboxes/${userId}`);
            let { mailboxes } = res.data;

            setMailboxes(mailboxes);
        }

        fetchMailboxes(user._id);
    }, []);


    return (
        <div className="container mt-5">
            <Nav />
            <h1>Profile page</h1>

            <h3>Your mailboxes</h3>

            {mailboxes.length > 0 ?
            (
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Size</th>
                                <th>Pin Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mailboxes.map(mailbox => (
                                <tr key={mailbox._id}>
                                    <td>{mailbox._id}</td>
                                    <td>{mailbox.size}</td>
                                    <td>{mailbox.pinNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>   
                    <button className="btn btn-primary" onClick={() => navigate('/mailboxes')}>Add new mailbox</button>
                </div>
            )
            :
            'You currently have no mailboxes.'
            }
        </div>
        
    );
}

export default Profile;