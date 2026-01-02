import React from 'react';
import { Card } from 'react-bootstrap'

const Player = ({
    name,
    team,
    nationality,
    jerseyNumber,
    age,
    image

}) => {
    return (
        <Card
            style={{
                width: "18rem",
                margin: "15px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
        >
            <Card.Img
                variant="top"
                src={image}
                style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Team:</strong> {team}
                    <br />
                    <strong>Nationality:</strong> {nationality}
                    <br />
                    <strong>Jersey Number:</strong> {jerseyNumber}
                    <br />
                    <strong>Age:</strong> {age}
                </Card.Text>
            </Card.Body>


        </Card>
    );
};

//default props
Player.defaultProps = {
    name: "Unknown Player",
    team: "Unknown Team",
    nationality: "Unknown",
    jerseyNumber: "N/A",
    age: "N/A",
    image: "https://via.placeholder.com/250x250?text=No+Image",
};
export default Player; 