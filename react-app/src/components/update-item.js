import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class UpdateItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const item = this.state.item;
    item[field] = value;
    this.setState({item});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateItem(this.state.item)
  }

  render() {

    return (
      <Form data-testid={`update-form-${this.props.item.name}`} onSubmit={this.handleSubmit}>
        <Form.Control data-testid={`update-field-${this.props.item.name}`} name="notes" placeholder="Add Notes" onChange={this.handleChange} />
        <Button variant="success" type="submit">Update Item</Button>
      </Form>
    );
  }
}

export default UpdateItemForm;
