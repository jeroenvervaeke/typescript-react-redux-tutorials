import * as React from 'react';

interface PersonProps {
  firstName: string;
  lastName: string;
}

const Person = ({ firstName, lastName }: PersonProps) => (
  <div>
    <h1>Functional component</h1>
    <div>
      First name: <b>{firstName}</b>
    </div>
    <div>
      Last name: <b>{lastName}</b>
    </div>
  </div>
);

const Component = <Person firstName="Lander" lastName="Dumoulin" />;
export default Component;
