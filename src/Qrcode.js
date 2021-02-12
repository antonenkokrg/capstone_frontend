import React, { useContext } from "react";
import { Container, Button } from 'reactstrap';
import { QRCode } from 'react-qr-svg';
// import { Container } from "reactstrap";
// import "./Home.css";
import UserContext from "./UserContext";
const saveSvgAsPng = require('save-svg-as-png')

function Qrcode() {
    const { currentUser } = useContext(UserContext);
    const imageOptions = {
        scale: 5,
        encoderOptions: 1,
        backgroundColor: 'white',
    }

    console.log(window.location.href)

    const downloadQR = () => {
        saveSvgAsPng.saveSvgAsPng(document.getElementById('123456'), 'shapes.png', imageOptions);
    };
    return (
        <Container className="themed-container">
            <div className="text-center">
                <h1 className="display-4 mb-3">QR Code link</h1>
                <QRCode
                    id="123456"
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    level="Q"
                    style={{ width: 256 }}
                    value={`http://${window.location.hostname}/show/${currentUser}`}
                />
                <br />
                <Button color="secondary" className="mt-4" onClick={downloadQR}>Download QR </Button>
            </div>


        </Container>
    );
}

export default Qrcode
