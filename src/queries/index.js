import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
    {
        countries {
            name
            code
            capital
            continent {
                name
            }
            emoji
            emojiU
            currency
        }
    }
`;

export const getCountryQuery = (code) => { 
    return gql`
        {
            country(code: "${code}") {
                name
                native
                capital
                phone
                capital
                emoji
                currency
                languages {
                    code
                    name
                }
                states {
                    code
                    name
                }
            }
        }
`;
}