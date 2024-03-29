# Fetch country details using Apollo-GraphQL
Build an application with Apollo client and GraphQL using the below instructions:
- The first page of application should display the list of countries
- Every country should have a details button beside it
- On clicking the details button user should get the details of the respective country
- Make use of the API: https://countries.trevorblades.com/to fetch the data ( To know more about API docs:https://github.com/trevorblades/countries)
- Execute the following query in the playground (GraphQL tool):

  ```graphql
  query GetCountry {
    country(code: "BR") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
  ```

- Similar response should be generated by the application created using Apollo client and GraphQL
- Try to display maximum possible values
