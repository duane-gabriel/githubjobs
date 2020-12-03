import React from 'react';
import styled from 'styled-components';

import GlobalStyle, { Container } from 'style/global';
import SearchBar from 'components/SearchBar';
import Aside from 'components/Aside';
import ListItem from 'components/ListItem';
import Logo from 'components/Logo';
import { getJobs } from 'api/jobs';

function App() {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    async function get() {
      const data = await getJobs();
      console.log(data);
      setJobs(data);
    }
    get();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container className='App'>
        <Logo />
        <SearchBar />
        <Content>
          <Aside />
          <div>
            {jobs &&
              jobs.map((job) => (
                <ListItem
                  companyName={job.company}
                  logoUrl={job.company_logo}
                  jobTitle={job.title}
                  location={job.location}
                  type={job.type}
                  created={job.created_at}
                  key={job.id}
                />
              ))}
          </div>
        </Content>
      </Container>
    </>
  );
}

const Content = styled.section`
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10px;
  margin-top: 42px;
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: 1fr;
  }
`;

export default App;
