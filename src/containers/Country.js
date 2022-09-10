import { Container, Spinner, ListGroup, Button } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';

import * as queries from '../queries';

const Country = () => {

    const params = useParams();
    const { loading, error, data } = useQuery(queries.getCountryQuery(params.code));

    if (loading) {
        return (<div className="text-center"><Spinner animation="border" variant="light" /></div>);
    }

    if (error) return <p className="text-danger">Error</p>;

    const country = data.country;

    const languages = country.languages.map(language => {
        return (<li key={language.name}>{language.name} {'('}{language.code}{')'}</li>);
    });

    const states = country.states.map(state => {
        return (<li key={state.name}>{state.name}</li>);
    });

    return (
        <Container>
            <h1 className="display-3">{country.name} {country.emoji}</h1>
            <hr />
            <Container fluid>
                <ListGroup className="text-bg-dark">
                    <ListGroup.Item>Country Code: {params.code}</ListGroup.Item>
                    <ListGroup.Item>Native Name: {country.native}</ListGroup.Item>
                    <ListGroup.Item>Phone Code: {'+'}{country.phone}</ListGroup.Item>
                    <ListGroup.Item>Capital: {country.capital}</ListGroup.Item>
                    <ListGroup.Item>Currency: {country.currency}</ListGroup.Item>
                    <ListGroup.Item>Languages:
                        { languages ? <ul>{languages}</ul> : 'None'}
                    </ListGroup.Item>
                    <ListGroup.Item>States:
                        { states.length !== 0 ? <ul>{states}</ul> : ' None'}
                    </ListGroup.Item>
                </ListGroup>
            </Container>
            <Container fluid className="my-3">
                <Button as={Link} to='/' variant="outline-light" size="lg">Back</Button>
            </Container>
        </Container>
    );
}

export default Country;