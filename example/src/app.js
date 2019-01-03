import React from 'react';
import { Form, Input } from 'formbuilder';
export default class App extends React.Component {
  render(){
    return (
      <div>
        <Form>
          <Input name='name' label='姓名' />
        </Form>
      </div>
    )
  }
}