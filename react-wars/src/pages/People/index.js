import React, {Component} from 'react';
import {APP_STATES} from './config';
import Button from '../../components/Button';
import WelcomeInfo from '../../components/WelcomeInfo';
import Table from '../../components/Table';
import Footer from '../../components/Footer';

class PeoplePage extends Component {
    state = {
        appState: APP_STATES.INIT,
    };

    loadData = () => {
        this.setState({
            appState: APP_STATES.LOADING
        });
        setTimeout(() => {
            this.setState({
                appState: APP_STATES.RESULTS
            })
        }, 2000);
    };

    render() {
        const {appState} = this.state;
        return (
            <div className="container">
                <WelcomeInfo header="Star Wars" paragraph="long time ago"/>
                {
                    appState === APP_STATES.INIT &&
                    <Button className="btn" id="" text="OK" action={this.loadData}/>
                }
                {
                    appState === APP_STATES.LOADING && <p>Loading...</p>
                }
                {
                    appState === APP_STATES.RESULTS && <Table/>
                }
                <Footer/>
            </div>
        );
    }
}

export default PeoplePage;