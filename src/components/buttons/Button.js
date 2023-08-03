import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const getStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
  }

}))

function Buttons(props) {
  const classes = getStyles()

  return (
    <div >
      <Button
        {...props}
        className={classes.button}
      >
        {props.label}
      </Button>
    </div>
  );
}

export default Buttons;