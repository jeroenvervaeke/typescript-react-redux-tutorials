import * as React from 'react';

interface PersonProps {
  firstName: string;
  lastName: string;
}

class Person extends React.PureComponent<PersonProps> {
  render() {
    const { firstName, lastName } = this.props;

    return (
      <div>
        <h1>Regular componet</h1>
        <div>
          First name: <b>{firstName}</b>
        </div>
        <div>
          Last name: <b>{lastName}</b>
        </div>
      </div>
    );
  }
}

const Component = <Person firstName="Lander" lastName="Dumoulin" />;
export default Component;
