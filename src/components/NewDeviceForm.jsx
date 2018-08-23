
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import withRoot from '../withRoot';

const styles = (theme) => ({
  root: {
    textAlign: 'left',
    flexGrow: 1
  },
});

class NewDeviceForm extends React.Component {
  render () {
    const { classes, handleAdd, deviceFields, isBusy } = this.props;
    const fields = deviceFields
      .map(field => (
        <Grid
          item
          xs={12}
          sm={6}
          key={field.name}
        >
          <TextField
            name={field.name}
            label={field.friendlyName}
            className={classes.root}
            fullWidth
            required={field.required}
          />
        </Grid>
      ));

    return (
      <div className={classes.root}>
        <Typography variant='display1'>
          New device
        </Typography>
        <form onSubmit={handleAdd} className={classes.root}>
          <Grid container spacing={24}>
            {fields}
          </Grid>
          <br />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            disabled={isBusy}
          >
            Add
          </Button>
          {isBusy ? <LinearProgress /> : null}
        </form>
      </div>
    );
  }
}

NewDeviceForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(NewDeviceForm));
