import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Container } from 'reactstrap';
import Chatboot from '../ChatBoot/Chatboot';
import {
    BrowserRouter as Router,
    Switch, Route
} from 'react-router-dom'
import './Profile.css';


const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loafing.....</div>;
    }

    return (
        isAuthenticated && (
            <Container className='d-flex justify-content-around'>
                <section className='card imsSize '>
                    <img
                        className='imgProfile'
                        src={user.picture}
                        alt={user.name}></img>
                </section>
                <section className='align-self-center'>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </section>
                <section>
                    <Button
                        className="btn-primary btn-lg"
                        color="info" onClick={() => ChatbootPage()}>
                        Chatboot
                    </Button>
                </section>
            </Container >
        )
    );
}
function ChatbootPage() {
    return (
        <Router>
                <Route path="/chatboot">
                    <Chatboot />
                </Route>
        </Router>
    );
}

//Export component
export default Profile;