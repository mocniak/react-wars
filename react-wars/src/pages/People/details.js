import React, {Component} from 'react';
import WelcomeInfo from '../../components/WelcomeInfo';
import {APP_STATES} from './config';

class Details extends Component {
    state = {
        appState: APP_STATES.LOADING,
        personDetails: {},
        personId: this.props.match.params.id,
    };

    componentDidMount() {
        console.log(this.props);
        this.loadPersonData();
    }

    loadPersonData = () => {
        fetch('http://localhost:8000/people/' + this.state.personId)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 404) {
                    this.props.history.push("/404")
                } else {
                    throw new Error("Error!");
                }
            })
            .then(response => {
                this.setState({
                    appState: APP_STATES.RESULTS,
                    personDetails: response,
                });
            })
            .catch(error => {
                this.setState({appState: APP_STATES.ERROR});
            });
    };

    render() {
        const {appState, personDetails} = this.state;
        return (
            <div className="details-page">
                <WelcomeInfo header="something"/>
                {
                    appState === APP_STATES.LOADING && <p>Loading...</p>
                }
                {
                    appState === APP_STATES.ERROR && <p>ERROR!</p>
                }
                {
                    appState === APP_STATES.RESULTS &&
                    <React.Fragment>
                        <p>Name: {personDetails.name}</p>
                        <p>Mass: {personDetails.mass}</p>
                        <p>Height: {personDetails.height}</p>
                        <p>Hair: {personDetails.hair_color}</p>
                        <p>Skin: {personDetails.skin_color}</p>
                        <p>Eyes: {personDetails.eye_color}</p>
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default Details;