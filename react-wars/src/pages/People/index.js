import React, {Component} from 'react';
import Button from '../../components/Button';
import WelcomeInfo from '../../components/WelcomeInfo';
import Footer from '../../components/Footer';

class PeoplePage extends Component {
    render() {
        return (
            <div className="container">
                <WelcomeInfo header="Star Wars" paragraph="long time ago"/>
                <Button className="btn" id="" text="OK" action={()=> alert('Click')}/>
                <Footer/>
            </div>
        );
    }
}

export default PeoplePage;