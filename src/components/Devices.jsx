

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import withRoot from '../withRoot';

const styles = (theme) => ({
    root: {
        textAlign: 'left'
    },
});

class Devices extends React.Component {
    render () {
        const { classes, devices } = this.props;

        return (
            <div className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>IMEI1</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Model</TableCell>
                            <TableCell>Owner</TableCell>
                            <TableCell>Mobile</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {devices.map(device => {
                            return (
                                <TableRow key={device.id}>
                                    <TableCell component='th' scope='row'>
                                        {device.imei1}
                                    </TableCell>
                                    <TableCell>{device.brand}</TableCell>
                                    <TableCell>{device.model}</TableCell>
                                    <TableCell>{device.owner}</TableCell>
                                    <TableCell>{device.mobileNumber}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

Devices.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Devices));
