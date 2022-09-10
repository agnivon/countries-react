import { useState } from 'react';
import { Container, Col, Row, Spinner, Form } from 'react-bootstrap';
import { useQuery } from '@apollo/client';


import CountryCard from '../components/CountryCard';
import * as queries from '../queries';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { loading, error, data } = useQuery(queries.GET_COUNTRIES);

    if (loading) {
        return (<div className="text-center"><Spinner animation="border" variant="light" /></div>);
    }

    if (error) return <p className="text-danger">Error</p>;

    let countries = data.countries;

    if (searchQuery !== '') {
        countries = countries.filter(country => {
            return (Object.values(country)
            .map(value => String(value).toLowerCase())
            .join(' ')
            .includes(searchQuery.toLowerCase()));
        });
    }

    countries = countries.map(country => {
        return (<Col key={country.code}><CountryCard country={country} /></Col>);
    });


    return (
        <Container>
            <Container fluid>
                <Form.Group className="mb-3">
                    <Form.Control size="lg" type="text" placeholder="Search countries" className="fs-4 text-bg-dark" onChange={(event) => setSearchQuery(event.target.value)} />
                </Form.Group>
            </Container>
            <Container fluid>
                <Row xs={1} md={2} className="g-4">
                    {countries}
                </Row>
            </Container>
        </Container>
    )
}

export default Home;