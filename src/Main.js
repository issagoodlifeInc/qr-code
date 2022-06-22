import qrcode from "./images/image-qr-code.png";

export default function Main() {
    return (
        <main className="container main">
<img src={qrcode} alt="QR Scan" className="main--img" />
<h1 className="main--title">Improve your front-end skills by building projects</h1>
<p className="main--content">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </main>
    )
}