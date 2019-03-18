import React from 'react';
import PropTypes from 'prop-types';

import '@material/react-card/dist/card.css';
import '@material/react-button/dist/button.css';
import '@material/react-typography/dist/typography.css';

import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
} from "@material/react-card";

import Button from '@material/react-button';

import {
    Body1,
    Body2,
    Caption,
    Headline1,
    Headline2,
    Headline3,
    Headline4,
    Headline5,
    Headline6,
    Overline,
    Subtitle1,
    Subtitle2,
} from '@material/react-typography';

class Airport extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onClick, name, city, icao } = this.props;
        return (
            <li>
                <Card className='mdc-card'>
                    <div className='my-card-content'>
                        <h1>{city}</h1>
                        <h4>icao: {icao}</h4>
                        <p>{name}</p>
                        <Button 
                            raised={true} 
                            onClick={() => onClick()}>Get Flights</Button>
                    </div>
                </Card>
            </li>
        );
    }
}
  
Airport.propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    icao: PropTypes.string.isRequired
};

export default Airport;