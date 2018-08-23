
import React from 'react';
import NewDeviceForm from './components/NewDeviceForm';
import Devices from './components/Devices';
import deviceFields from './constants/device-fields';
import { writeData, readData } from './lib/firestore';
import Header from './components/Header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBusy: false,
            devices: []
        };
    }

    fetchDevices = () => {
        readData('/devices').then((devices) => {
            this.setState(
                Object.assign(this.state, { devices })
            );
        });
    }

    handleAdd = (event) => {
        event.preventDefault();
        this.setState({ ...this.state, isBusy: true });
        const device = deviceFields.reduce((device, f) =>
            Object.assign(device, {
                [f.name]: event.target[f.name].value
            }), {});

        writeData(`/devices/${device.imei1}`, device)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            })
            .then(() => {
                this.fetchDevices();
                this.setState({ ...this.state, isBusy: false });
            });
    }

    componentDidMount () {
        this.fetchDevices();
    }

    render () {
        return (
            <React.Fragment>
                <Header />
                <NewDeviceForm
                    handleAdd={this.handleAdd}
                    deviceFields={deviceFields}
                    isBusy={this.state.isBusy}
                />
                <Devices
                    devices={this.state.devices}
                />
            </React.Fragment>
        );
    }
}

export default App;
