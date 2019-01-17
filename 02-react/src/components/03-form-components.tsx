import * as React from 'react';

interface FormProps {
  procedures: Procedure[];
}

interface Procedure {
  ref: string;
  name: string;
}

interface FormState {
  selectedProcedure: string;
}

class Form extends React.PureComponent<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);

    this.state = {
      selectedProcedure: '',
    };
  }

  selectedProcedureChanged = (selectedProcedure: string) => {
    this.setState({
      selectedProcedure,
    });
  };

  render() {
    const { procedures } = this.props;
    const { selectedProcedure } = this.state;
    return (
      <select value={selectedProcedure} onChange={e => this.selectedProcedureChanged(e.currentTarget.value)}>
        <option key="default" value="">
          Choose an option
        </option>
        {procedures.map(p => (
          <option key={p.ref} value={p.ref}>
            {p.name}
          </option>
        ))}
      </select>
    );
  }
}

const Component = (
  <Form
    procedures={[
      { ref: 'AAB-001', name: 'Oil check' },
      { ref: 'AAB-002', name: 'Demo' },
      { ref: 'AAB-003', name: 'Maintenance' },
      { ref: 'AAB-004', name: 'Test' },
    ]}
  />
);
export default Component;
