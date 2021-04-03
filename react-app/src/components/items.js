import React from 'react';

import UpdateItemForm from './update-item';

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';


class Items extends React.Component {

  render() {

    return (
      <section>
        <h2>Items....</h2>
        {
          this.props.itemsList.map((item, idx) =>
            <div key={idx}>
              <Card id="card" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Card.Text>
                    {item.notes}
                  </Card.Text>
                  <Button
                    id="deleteButton"
                    variant="danger"
                    data-testid={`delete-button-${item.name}`}
                    onClick={() => this.props.handleDelete(item._id)}
                  >Delete Item</Button>
                </Card.Body>
              </Card>

              <UpdateItemForm
                item={item}
                updateItem={this.props.updateItem}
              />
            </div>
          )
        }
      </section>
    );
  }
}

export default Items;
