import React, { ReactElement } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import { AppFormData } from '../App'

interface HomeProps {
  formData: AppFormData
}

const Home = (props: HomeProps): ReactElement => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      DATA
              <p>{props.formData.firstName}</p>
              <p>{props.formData.lastName}</p>
              <p>{props.formData.email}</p>
    </Card>
  );
};

export default Home;
