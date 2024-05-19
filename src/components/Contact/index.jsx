import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import emailjs from "@emailjs/browser";
import Loader from "react-loaders";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
    const nameArray = ["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"];
    const [letterClass, setLetterClass] = useState("text-animate");
    const refForm = useRef();

    useEffect(() => {
        const changingLetterClass = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 4000);

        return () => clearTimeout(changingLetterClass);
    });

    const sendEmail = (e) => {
        e.preventDefault();
        let templateParams = {
            to_email: "pradivpandeysingh@outlook.com",
            publicKey: "72yaeRhFTC4-n3IoE",
        };
        emailjs.sendForm("service_iyitelx", "template_i60l99e", refForm.current, templateParams).then(
            () => {
                alert("Message sent successfully");
                window.location.reload(false);
            },
            () => {
                alert("Failed to send the message! Please try again !!!");
            }
        );
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters strArray={nameArray} letterClass={letterClass} index={15}></AnimatedLetters>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, asperiores. Consectetur illo voluptates
                        voluptatum dignissimos! Soluta fuga amet blanditiis deserunt.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder="Meassage" required />
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className="info-map">
                    Prajwal Badal,
                    <br />
                    Maharashtra, India.
                    <br />
                    <a href="mailto:prajwalbadalcodes@gmail.com">
                        <span>prajwalbadalcodes@gmail.com</span>
                    </a>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[19.19, 72.9711]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
                        <Marker position={[19.19, 72.9711]}>
                            <Popup>
                                Prajwal's Here <br /> Drop by for a cup of coffee ;)
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"></Loader>
        </>
    );
};

export default Contact;
