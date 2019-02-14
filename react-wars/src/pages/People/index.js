import React, {Component} from 'react';
import {APP_STATES, TABLE_COLUMNS} from './config';
import Button from '../../components/Button';
import WelcomeInfo from '../../components/WelcomeInfo';
import Table from '../../components/Table';
import Footer from '../../components/Footer';

class PeoplePage extends Component {
    state = {
        appState: APP_STATES.INIT,
        people: [],
    };

    loadData = () => {
        this.setState({
            appState: APP_STATES.LOADING
        });
        fetch('https://swapi.co/api/people')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Error");
                }
            })
            .then(response => {
                this.setState({
                    people: response.results,
                    appState: APP_STATES.RESULTS,
                });
            })
            .catch(error => {
                this.setState({appState: APP_STATES.ERROR});
            })
    };

    render() {
        const {appState, people} = this.state;
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
                    appState === APP_STATES.ERROR && <p>Something went wrong.</p>
                }
                {
                    appState === APP_STATES.RESULTS && <Table columns={TABLE_COLUMNS} items={people}/>
                }
                <Footer/>
            </div>
        );
    }
}

export default PeoplePage;