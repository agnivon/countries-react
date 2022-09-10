import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CountryCard = (props) => {
    return (
        <Card bg="dark" text="white" className="border border-2 border-light">
            <Card.Body>
                <Card.Title>{props.country.name} {props.country.emoji}</Card.Title>
                <Card.Subtitle className="mb-2 text-light">Code: {props.country.code}</Card.Subtitle>
                <Card.Text>
                    Capital: {props.country.capital}
                    <br />
                    Currency: {props.country.currency}
                </Card.Text>
                <Button as={Link} to={`/country/${props.country.code}`} variant="outline-light">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default CountryCard;