import React from 'react'
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Segment,
} from 'semantic-ui-react'
import LoginForm from './login';

const Welcome = () => (
  <Segment >
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='key' />
            Login
          </Header>
            <LoginForm />

        </Grid.Column>

        <Grid.Column>
          <Header icon>
              <Icon name='user plus'/>
            Register
          </Header>
          {/* link to /register */}
          <Button primary>Join</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Welcome