import React, { useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/login.scss";
import LogoImage from "../assets/images/logo.png";
import Axios from "axios";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login, register } from "../store/auth/userSlice";
import { Formik } from "formik";

const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("This field is required"),
    password: yup.string().required("This field is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("This field is required"),
    name: yup.string().required("This field is required"),
    dob: yup.string().required("This field is required"),
    sex: yup.string().required("This field is required"),
    maritalStatus: yup.string().required("This field is required"),
    contactPerson: yup.string().required("This field is required"),
    phoneNumber: yup.number().required("This field is required"),
    alternativeNumber: yup.number().required("This field is required"),
    kulam: yup.string().required("This field is required"),
    communityName: yup.string().required("This field is required"),
    createdBy: yup.string().required("This field is required"),
    subject: yup.string().required("This field is required"),
    timeOfBirth: yup.string().required("This field is required"),
    dayOfBirth: yup.string().required("This field is required"),
    placeOfBirth: yup.string().required("This field is required"),
    rasi: yup.string().required("This field is required"),
    star: yup.string().required("This field is required"),
    padham: yup.string().required("This field is required"),
    lagnam: yup.string().required("This field is required"),
    jananaKaala: yup.string().required("This field is required"),
    jananaYear: yup.string().required("This field is required"),
    education: yup.string().required("This field is required"),
    educationDetail: yup.string().required("This field is required"),
    college: yup.string().required("This field is required"),
    jobDetails: yup.string().required("This field is required"),
    employerDetails: yup.string().required("This field is required"),
    employedCountry: yup.string().required("This field is required"),
    income: yup.string().required("This field is required"),
    address: yup.string().required("This field is required"),
    country: yup.string().required("This field is required"),
    state: yup.string().required("This field is required"),
    city: yup.string().required("This field is required"),
    countryLiving: yup.string().required("This field is required"),
    native: yup.string().required("This field is required"),
    website: yup.string().required("This field is required"),
});

const state = [
    { value: "andhra Pradesh", label: " Andhra Pradesh" },
    {
        value: "Andaman and Nicobar Islands",
        label: "Andaman and Nicobar Islands",
    },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chandigarh", label: "Chandigarh" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Dadar and Nagar Haveli", label: "Dadar and Nagar Haveli" },
    { value: "Daman and Diu", label: "Daman and Diu" },
    { value: "Delhi", label: "Delhi" },
    { value: "Lakshadweep", label: "Lakshadweep" },
    { value: "Puducherry", label: "Puducherry" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Manipur", label: "Manipur" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Odisha", label: "Odisha" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Telangana", label: "Telangana" },
    { value: "Tripura", label: "Tripura" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "West Bengal", label: "West Bengal" },
];
const country = [
    { value: "Afghanistan", label: " Afghanistan" },
    { value: "Åland Islands", label: " Åland Islands" },
    { value: "Albania", label: " Albania" },
    { value: "Algeria", label: " Algeria" },
    { value: "American Samoa", label: " American Samoa" },
    { value: "Andorra", label: " Andorra" },
    { value: "Angola", label: " Angola" },
    { value: "Anguilla", label: " Anguilla" },
    { value: "Antarctica", label: " Antarctica" },
    { value: "Antigua and Barbuda", label: " Antigua and Barbuda" },
    { value: "Argentina", label: " Argentina" },
    { value: "Armenia", label: " Armenia" },
    { value: "Aruba", label: " Aruba" },
    { value: "Australia", label: " Australia" },
    { value: "Austria", label: " Austria" },
    { value: "Azerbaijan", label: " Azerbaijan" },
    { value: "Bahamas", label: " Bahamas" },
    { value: "Bahrain", label: " Bahrain" },
    { value: "Bangladesh", label: " Bangladesh" },
    { value: "Barbados", label: " Barbados" },
    { value: "Belarus", label: " Belarus" },
    { value: "Belgium", label: " Belgium" },
    { value: "Belize", label: " Belize" },
    { value: "Benin", label: " Benin" },
    { value: "Bermuda", label: " Bermuda" },
    { value: "Bhutan", label: " Bhutan" },
    { value: "Bolivia", label: " Bolivia" },
    { value: "Bosnia and Herzegovina", label: " Bosnia and Herzegovina" },
    { value: "Botswana", label: " Botswana" },
    { value: "Bouvet Island", label: " Bouvet Island" },
    { value: "Brazil", label: " Brazil" },
    {
        value: "British Indian Ocean Territory",
        label: " British Indian Ocean Territory",
    },
    { value: "Brunei Darussalam", label: " Brunei Darussalam" },
    { value: "Bulgaria", label: " Bulgaria" },
    { value: "Burkina Faso", label: " Burkina Faso" },
    { value: "Burundi", label: " Burundi" },
    { value: "Cambodia", label: " Cambodia" },
    { value: "Cameroon", label: " Cameroon" },
    { value: "Canada", label: " Canada" },
    { value: "Cape Verde", label: " Cape Verde" },
    { value: "Cayman Islands", label: " Cayman Islands" },
    { value: "Central African Republic", label: " Central African Republic" },
    { value: "Chad", label: " Chad" },
    { value: "Chile", label: " Chile" },
    { value: "China", label: " China" },
    { value: "Christmas Island", label: " Christmas Island" },
    { value: "Cocos (Keeling) Islands", label: " Cocos (Keeling) Islands" },
    { value: "Colombia", label: " Colombia" },
    { value: "Comoros", label: " Comoros" },
    { value: "Congo", label: " Congo" },
    {
        value: "Congo, The Democratic Republic of The",
        label: " Congo, The Democratic Republic of The",
    },
    { value: "Cook Islands", label: " Cook Islands" },
    { value: "Costa Rica", label: " Costa Rica" },
    { value: "Cote Divoire", label: " Cote Divoire" },
    { value: "Croatia", label: " Croatia" },
    { value: "Cuba", label: " Cuba" },
    { value: "Cyprus", label: " Cyprus" },
    { value: "Czech Republic", label: " Czech Republic" },
    { value: "Denmark", label: " Denmark" },
    { value: "Djibouti", label: " Djibouti" },
    { value: "Dominica", label: " Dominica" },
    { value: "Dominican Republic", label: " Dominican Republic" },
    { value: "Ecuador", label: " Ecuador" },
    { value: "Egypt", label: " Egypt" },
    { value: "El Salvador", label: " El Salvador" },
    { value: "Equatorial Guinea", label: " Equatorial Guinea" },
    { value: "Eritrea", label: " Eritrea" },
    { value: "Estonia", label: " Estonia" },
    { value: "Ethiopia", label: " Ethiopia" },
    {
        value: "Falkland Islands (Malvinas)",
        label: " Falkland Islands (Malvinas)",
    },
    { value: "Faroe Islands", label: " Faroe Islands" },
    { value: "Fiji", label: " Fiji" },
    { value: "Finland", label: " Finland" },
    { value: "France", label: " France" },
    { value: "French Guiana", label: " French Guiana" },
    { value: "French Polynesia", label: " French Polynesia" },
    {
        value: "French Southern Territories",
        label: " French Southern Territories",
    },
    { value: "Gabon", label: " Gabon" },
    { value: "Gambia", label: " Gambia" },
    { value: "Georgia", label: " Georgia" },
    { value: "Germany", label: " Germany" },
    { value: "Ghana", label: " Ghana" },
    { value: "Gibraltar", label: " Gibraltar" },
    { value: "Greece", label: " Greece" },
    { value: "Greenland", label: " Greenland" },
    { value: "Grenada", label: " Grenada" },
    { value: "Guadeloupe", label: " Guadeloupe" },
    { value: "Guam", label: " Guam" },
    { value: "Guatemala", label: " Guatemala" },
    { value: "Guernsey", label: " Guernsey" },
    { value: "Guinea", label: " Guinea" },
    { value: "Guinea-bissau", label: " Guinea-bissau" },
    { value: "Guyana", label: " Guyana" },
    { value: "Haiti", label: " Haiti" },
    {
        value: "Heard Island and Mcdonald Islands",
        label: " Heard Island and Mcdonald Islands",
    },
    {
        value: "Holy See (Vatican City State)",
        label: " Holy See (Vatican City State)",
    },
    { value: "Honduras", label: " Honduras" },
    { value: "Hong Kong", label: " Hong Kong" },
    { value: "Hungary", label: " Hungary" },
    { value: "Iceland", label: " Iceland" },
    { value: "India", label: " India" },
    { value: "Indonesia", label: " Indonesia" },
    { value: "Iran, Islamic Republic of", label: " Iran, Islamic Republic of" },
    { value: "Iraq", label: " Iraq" },
    { value: "Ireland", label: " Ireland" },
    { value: "Isle of Man", label: " Isle of Man" },
    { value: "Israel", label: " Israel" },
    { value: "Italy", label: " Italy" },
    { value: "Jamaica", label: " Jamaica" },
    { value: "Japan", label: " Japan" },
    { value: "Jersey", label: " Jersey" },
    { value: "Jordan", label: " Jordan" },
    { value: "Kazakhstan", label: " Kazakhstan" },
    { value: "Kenya", label: " Kenya" },
    { value: "Kiribati", label: " Kiribati" },
    {
        value: "Korea, Democratic Peoples Republic of",
        label: " Korea, Democratic Peoples Republic of",
    },
    { value: "Korea, Republic of", label: " Korea, Republic of" },
    { value: "Kuwait", label: " Kuwait" },
    { value: "Kyrgyzstan", label: " Kyrgyzstan" },
    {
        value: "Lao Peoples Democratic Republic",
        label: " Lao Peoples Democratic Republic",
    },
    { value: "Latvia", label: " Latvia" },
    { value: "Lebanon", label: " Lebanon" },
    { value: "Lesotho", label: " Lesotho" },
    { value: "Liberia", label: " Liberia" },
    { value: "Libyan Arab Jamahiriya", label: " Libyan Arab Jamahiriya" },
    { value: "Liechtenstein", label: " Liechtenstein" },
    { value: "Lithuania", label: " Lithuania" },
    { value: "Luxembourg", label: " Luxembourg" },
    { value: "Macao", label: " Macao" },
    {
        value: "Macedonia, The Former Yugoslav Republic of",
        label: " Macedonia, The Former Yugoslav Republic of",
    },
    { value: "Madagascar", label: " Madagascar" },
    { value: "Malawi", label: " Malawi" },
    { value: "Malaysia", label: " Malaysia" },
    { value: "Maldives", label: " Maldives" },
    { value: "Mali", label: " Mali" },
    { value: "Malta", label: " Malta" },
    { value: "Marshall Islands", label: " Marshall Islands" },
    { value: "Martinique", label: " Martinique" },
    { value: "Mauritania", label: " Mauritania" },
    { value: "Mauritius", label: " Mauritius" },
    { value: "Mayotte", label: " Mayotte" },
    { value: "Mexico", label: " Mexico" },
    {
        value: "Micronesia, Federated States of",
        label: " Micronesia, Federated States of",
    },
    { value: "Moldova, Republic of", label: " Moldova, Republic of" },
    { value: "Monaco", label: " Monaco" },
    { value: "Mongolia", label: " Mongolia" },
    { value: "Montenegro", label: " Montenegro" },
    { value: "Montserrat", label: " Montserrat" },
    { value: "Morocco", label: " Morocco" },
    { value: "Mozambique", label: " Mozambique" },
    { value: "Myanmar", label: " Myanmar" },
    { value: "Namibia", label: " Namibia" },
    { value: "Nauru", label: " Nauru" },
    { value: "Nepal", label: " Nepal" },
    { value: "Netherlands", label: " Netherlands" },
    { value: "Netherlands Antilles", label: " Netherlands Antilles" },
    { value: "New Caledonia", label: " New Caledonia" },
    { value: "New Zealand", label: " New Zealand" },
    { value: "Nicaragua", label: " Nicaragua" },
    { value: "Niger", label: " Niger" },
    { value: "Nigeria", label: " Nigeria" },
    { value: "Niue", label: " Niue" },
    { value: "Norfolk Island", label: " Norfolk Island" },
    { value: "Northern Mariana Islands", label: " Northern Mariana Islands" },
    { value: "Norway", label: " Norway" },
    { value: "Oman", label: " Oman" },
    { value: "Pakistan", label: " Pakistan" },
    { value: "Palau", label: " Palau" },
    {
        value: "Palestinian Territory, Occupied",
        label: " Palestinian Territory, Occupied",
    },
    { value: "Panama", label: " Panama" },
    { value: "Papua New Guinea", label: " Papua New Guinea" },
    { value: "Paraguay", label: " Paraguay" },
    { value: "Peru", label: " Peru" },
    { value: "Philippines", label: " Philippines" },
    { value: "Pitcairn", label: " Pitcairn" },
    { value: "Poland", label: " Poland" },
    { value: "Portugal", label: " Portugal" },
    { value: "Puerto Rico", label: " Puerto Rico" },
    { value: "Qatar", label: " Qatar" },
    { value: "Reunion", label: " Reunion" },
    { value: "Romania", label: " Romania" },
    { value: "Russian Federation", label: " Russian Federation" },
    { value: "Rwanda", label: " Rwanda" },
    { value: "Saint Helena", label: " Saint Helena" },
    { value: "Saint Kitts and Nevis", label: " Saint Kitts and Nevis" },
    { value: "Saint Lucia", label: " Saint Lucia" },
    { value: "Saint Pierre and Miquelon", label: " Saint Pierre and Miquelon" },
    {
        value: "Saint Vincent and The Grenadines",
        label: " Saint Vincent and The Grenadines",
    },
    { value: "Samoa", label: " Samoa" },
    { value: "San Marino", label: " San Marino" },
    { value: "Sao Tome and Principe", label: " Sao Tome and Principe" },
    { value: "Saudi Arabia", label: " Saudi Arabia" },
    { value: "Senegal", label: " Senegal" },
    { value: "Serbia", label: " Serbia" },
    { value: "Seychelles", label: " Seychelles" },
    { value: "Sierra Leone", label: " Sierra Leone" },
    { value: "Singapore", label: " Singapore" },
    { value: "Slovakia", label: " Slovakia" },
    { value: "Slovenia", label: " Slovenia" },
    { value: "Solomon Islands", label: " Solomon Islands" },
    { value: "Somalia", label: " Somalia" },
    { value: "South Africa", label: " South Africa" },
    {
        value: "South Georgia and The South Sandwich Islands",
        label: " South Georgia and The South Sandwich Islands",
    },
    { value: "Spain", label: " Spain" },
    { value: "Sri Lanka", label: " Sri Lanka" },
    { value: "Sudan", label: " Sudan" },
    { value: "Suriname", label: " Suriname" },
    { value: "Svalbard and Jan Mayen", label: " Svalbard and Jan Mayen" },
    { value: "Swaziland", label: " Swaziland" },
    { value: "Sweden", label: " Sweden" },
    { value: "Switzerland", label: " Switzerland" },
    { value: "Syrian Arab Republic", label: " Syrian Arab Republic" },
    { value: "Taiwan", label: " Taiwan" },
    { value: "Tajikistan", label: " Tajikistan" },
    {
        value: "Tanzania, United Republic of",
        label: " Tanzania, United Republic of",
    },
    { value: "Thailand", label: " Thailand" },
    { value: "Timor-leste", label: " Timor-leste" },
    { value: "Togo", label: " Togo" },
    { value: "Tokelau", label: " Tokelau" },
    { value: "Tonga", label: " Tonga" },
    { value: "Trinidad and Tobago", label: " Trinidad and Tobago" },
    { value: "Tunisia", label: " Tunisia" },
    { value: "Turkey", label: " Turkey" },
    { value: "Turkmenistan", label: " Turkmenistan" },
    { value: "Turks and Caicos Islands", label: " Turks and Caicos Islands" },
    { value: "Tuvalu", label: " Tuvalu" },
    { value: "Uganda", label: " Uganda" },
    { value: "Ukraine", label: " Ukraine" },
    { value: "United Arab Emirates", label: " United Arab Emirates" },
    { value: "United Kingdom", label: " United Kingdom" },
    { value: "United States", label: " United States" },
    {
        value: "United States Minor Outlying Islands",
        label: " United States Minor Outlying Islands",
    },
    { value: "Uruguay", label: " Uruguay" },
    { value: "Uzbekistan", label: " Uzbekistan" },
    { value: "Vanuatu", label: " Vanuatu" },
    { value: "Venezuela", label: " Venezuela" },
    { value: "Viet Nam", label: " Viet Nam" },
    { value: "Virgin Islands, British", label: " Virgin Islands, British" },
    { value: "Virgin Islands, U.S.", label: " Virgin Islands, U.S." },
    { value: "Wallis and Futuna", label: " Wallis and Futuna" },
    { value: "Western Sahara", label: " Western Sahara" },
    { value: "Yemen", label: " Yemen" },
    { value: "Zambia", label: " Zambia" },
    { value: "Zimbabwe", label: " Zimbabwe" },
];

const rasi = [
    { value: "Mesham / Aries", label: "Mesham / Aries" },
    { value: "Rishabam / Taurus", label: "Rishabam / Taurus" },
    { value: "Mithunam / Gemini", label: "Mithunam / Gemini" },
    { value: "Katagam / Cancer", label: "Katagam / Cancer" },
    { value: "Simham / Leo", label: "Simham / Leo" },
    { value: "Kanni / Virgo", label: "Kanni / Virgo" },
    { value: "Tula / Libra", label: "Tula / Libra" },
    { value: "Vrichigam / Scorpio", label: "Vrichigam / Scorpio" },
    { value: "Dhanus / Sagittarius", label: "Dhanus / Sagittarius" },
    { value: "Makara / Capricorn", label: "Makara / Capricorn" },
    { value: "Kumbha / Aquarius", label: "Kumbha / Aquarius" },
    { value: "Meena / Pisces", label: "Meena / Pisces" },
];

const community = [
    { value: "sozhiya vellalar", label: "sozhiya vellalar" },
    { value: "Illathu Pillai", label: "Illathu Pillai" },
    { value: "Thuluva Vellalar", label: "Thuluva Vellalar" },
    { value: "Kodikal Pillai", label: "Kodikal Pillai" },
    { value: "Karaikattu Pillai", label: "Karaikattu Pillai" },
    { value: "Pandiya Vellalar", label: "Pandiya Vellalar" },
    { value: "Veerakodi Vellalar", label: "Veerakodi Vellalar" },
    { value: "Senaithalaivar", label: "Senaithalaivar" },
    { value: "Arunattu Vellalar", label: "Arunattu Vellalar" },
    { value: "nanjilvellalar", label: "nanjilvellalar" },
    { value: "Saiva Pillai", label: "Saiva Pillai" },
    { value: "Kongu Vellalar", label: "Kongu Vellalar" },
];

function SignUpPage() {
    const url =
        "https://sozhiyavellalarmarriage.com/matrimonyApp/UserController/usr_registration";
    const [formData, setFormData] = useState({
        name: "",
        emailAddress: "",
        password: "",
        confirmPassword: "",
        dob: "",
        sex: "",
        maritalStatus: "",
        contactPerson: "",
        phoneNumber: "",
        alternativeNumber: "",
        kulam: "",
        communityName: "",
        createdBy: "",
        subject: "",
        timeOfBirth: "",
        dayofBirth: "",
        placeofBirth: "",
        rasi: "",
        star: "",
        padham: "",
        lagnam: "",
        jananaKaala: "",
        jananaYear: "",
        education: "",
        college: "",
        jobDetails: "",
        employerDetails: "",
        employedCountry: "",
        website: "",
        id: "",
        userPhoto: "",
    });

    const [steps, setSteps] = useState([
        { key: "firstStep", isDone: true },
        { key: "secondStep", isDone: false },
    ]);

    const [activeStep, setActiveStep] = useState(steps[0]);

    const navigate = useNavigate();

    const handleNext = () => {
        if (steps[steps.length - 1].key === activeStep.key) {
            // alert('You have completed all steps.');

            return;
        }

        const index = steps.findIndex((x) => x.key === activeStep.key);
        setSteps((prevStep) =>
            prevStep.map((x) => {
                if (x.key === activeStep.key) x.isDone = true;
                return x;
            })
        );
        setActiveStep(steps[index + 1]);
    };

    const handleBack = () => {
        const index = steps.findIndex((x) => x.key === activeStep.key);
        if (index === 0) return;

        setSteps((prevStep) =>
            prevStep.map((x) => {
                if (x.key === activeStep.key) x.isDone = false;
                return x;
            })
        );
        setActiveStep(steps[index - 1]);
    };

    const [timeOfBirth, settimeOfBirths] = useState(true);
    const [dayofBirth, setdayofBirths] = useState(true);
    const [placeofBirth, setplaceofBirths] = useState(true);

    const dispatch = useDispatch();

    return (
        <>
            <div className="d-lg-flex half signUpUI">
                <div className="login-bg"></div>
                <div className="contents">
                    <Container>
                        <Row className="align-items-center justify-content-center loginRowBox">
                            <Col md={8} lg={8} xs={12} className="m-auto">
                                <Link to="/">
                                    <img src={LogoImage} alt="logo" className="logoImg" />
                                </Link>

                                <Formik
                                    initialValues={formData}
                                    validationSchema={validationSchema}
                                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                                        setSubmitting(true);
                                        const data = {
                                            name: values.name,
                                            emailAddress: values.email,
                                            password: values.password,
                                            confirmPassword: values.confirmPassword,
                                            dob: values.dob,
                                            sex: values.sex,
                                            maritalStatus: values.maritalStatus,
                                            contactPerson: values.contactPerson,
                                            phoneNumber: values.phoneNumber,
                                            alternativeNumber: values.alternativeNumber,
                                            kulam: values.kulam,
                                            communityName: values.communityName,
                                            createdBy: values.createdBy,
                                            subject: values.subject,
                                            timeOfBirth: values.timeOfBirth,
                                            dayofBirth: values.dayofBirth,
                                            placeofBirth: values.placeofBirth,
                                            rasi: values.rasi,
                                            star: values.star,
                                            padham: values.padham,
                                            lagnam: values.lagnam,
                                            jananaKaala: values.jananaKaala,
                                            jananaYear: values.jananaYear,
                                            education: values.education,
                                            college: values.college,
                                            jobDetails: values.jobDetails,
                                            employerDetails: values.employerDetails,
                                            employedCountry: values.employedCountry,
                                            website: values.website,
                                            userPhoto: values.file.name, 
                                            type: values.file.type,
                                            size: `${values.file.size} bytes`
                                            
                                        };
                                        const { payload } = await dispatch(register(data));
                                        console.log("payload", payload);
                                        navigate("/profile/" + data.usr_id);
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleBlur,
                                        handleChange,
                                        handleSubmit,
                                        isSubmitting,
                                        setFieldValue,
                                    }) => (
                                        <Form onSubmit={handleSubmit}>
                                            <div className="wizardApp">
                                                <div className="box">
                                                    <div className="steps">
                                                        <ul className="nav">
                                                            {steps.map((step, i) => {
                                                                return (
                                                                    <li
                                                                        key={i}
                                                                        className={`${activeStep.key === step.key
                                                                                ? "active"
                                                                                : ""
                                                                            } ${step.isDone ? "done" : ""}`}
                                                                    >
                                                                        <div>
                                                                            {" "}
                                                                            Step {i + 1}
                                                                            <br />
                                                                            <span>{step.label} </span>
                                                                        </div>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </div>

                                                    <div className="step-component">
                                                        {/* {activeStep.component()} */}
                                                        {steps[0].key === activeStep.key && (
                                                            <div className="step1">
                                                                <Form.Group
                                                                    as={Col}
                                                                    className="mb-3"
                                                                    controlId="emailId"
                                                                >
                                                                    <Form.Label> Email address </Form.Label>
                                                                    <Form.Control
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.email}
                                                                        type="email"
                                                                        name="email"
                                                                        placeholder="Enter email"
                                                                    />
                                                                    {touched.email && errors.email ? (
                                                                        <div className="errorMessage">
                                                                            {errors.email}
                                                                        </div>
                                                                    ) : null}
                                                                </Form.Group>

                                                                <Row>
                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="userPassword"
                                                                    >
                                                                        <Form.Label> Password </Form.Label>
                                                                        <Form.Control
                                                                            type="password"
                                                                            placeholder="Password"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            id="Password"
                                                                            name="password"
                                                                            value={values.password}
                                                                        />
                                                                        {touched.password && errors.password ? (
                                                                            <div className="errorMessage">
                                                                                {errors.password}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="userPassword"
                                                                    >
                                                                        <Form.Label> Confirm Password </Form.Label>
                                                                        <Form.Control
                                                                            type="password"
                                                                            placeholder="Confirm Password"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            id="confirmPassword"
                                                                            name="confirmPassword"
                                                                            value={values.confirmPassword}
                                                                        />
                                                                        {touched.confirmPassword &&
                                                                            errors.confirmPassword ? (
                                                                            <div className="errorMessage">
                                                                                {errors.confirmPassword}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>
                                                                </Row>

                                                                <Form.Group
                                                                    as={Col}
                                                                    className="mb-3"
                                                                    controlId="name"
                                                                >
                                                                    <Form.Label> Name </Form.Label>
                                                                    <Form.Control
                                                                        type="text"
                                                                        placeholder="Enter Name"
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.name}
                                                                        name="name"
                                                                    />
                                                                    {touched.name && errors.name ? (
                                                                        <div className="errorMessage">
                                                                            {errors.name}
                                                                        </div>
                                                                    ) : null}
                                                                </Form.Group>

                                                                <Row>
                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="dob"
                                                                    >
                                                                        <Form.Label> DOB </Form.Label>
                                                                        <Form.Control
                                                                            type="date"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.dob}
                                                                            name="dob"
                                                                        />
                                                                        {touched.dob && errors.dob ? (
                                                                            <div className="errorMessage">
                                                                                {errors.dob}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="sex"
                                                                    >
                                                                        <Form.Label> Sex </Form.Label>
                                                                        <Form.Select
                                                                            aria-label="Default select example"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.sex}
                                                                            name="sex"
                                                                        >
                                                                            <option> Select Gender</option>
                                                                            <option value="Male">Male</option>
                                                                            <option value="Female">Female</option>
                                                                            <option value="Other">Other</option>
                                                                        </Form.Select>
                                                                        {touched.sex && errors.sex ? (
                                                                            <div className="errorMessage">
                                                                                {errors.sex}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>
                                                                </Row>
                                                                <Row>
                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="maritalStatus"
                                                                    >
                                                                        <Form.Label> Marital Status </Form.Label>
                                                                        <Form.Select
                                                                            aria-label="Default select example"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.maritalStatus}
                                                                            name="maritalStatus"
                                                                        >
                                                                            <option value="0"> Select Status </option>
                                                                            <option value="Unmarried ">
                                                                                Unmarried{" "}
                                                                            </option>
                                                                            <option value="Divorced">
                                                                                Divorced{" "}
                                                                            </option>
                                                                            <option value="Widow / Widower">
                                                                                Widow / Widower{" "}
                                                                            </option>
                                                                            <option value="Awaiting divorce">
                                                                                Awaiting divorce{" "}
                                                                            </option>
                                                                        </Form.Select>

                                                                        {touched.maritalStatus &&
                                                                            errors.maritalStatus ? (
                                                                            <div className="errorMessage">
                                                                                {errors.maritalStatus}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="contactPerson"
                                                                    >
                                                                        <Form.Label>
                                                                            {" "}
                                                                            Contact Person Name{" "}
                                                                        </Form.Label>
                                                                        <Form.Control
                                                                            type="text"
                                                                            placeholder="Enter Contact Person Name"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.contactPerson}
                                                                            name="contactPerson"
                                                                        />
                                                                        {touched.contactPerson &&
                                                                            errors.contactPerson ? (
                                                                            <div className="errorMessage">
                                                                                {errors.contactPerson}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>
                                                                </Row>
                                                                <Row>
                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="phoneNumber"
                                                                    >
                                                                        <Form.Label> Phone Number </Form.Label>
                                                                        <Form.Control
                                                                            type="number"
                                                                            placeholder="Enter Phone Number"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.phoneNumber}
                                                                            name="phoneNumber"
                                                                        />
                                                                        {touched.phoneNumber &&
                                                                            errors.phoneNumber ? (
                                                                            <div className="errorMessage">
                                                                                {errors.phoneNumber}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="alternativeNumber"
                                                                    >
                                                                        <Form.Label>
                                                                            {" "}
                                                                            Alternative Number{" "}
                                                                        </Form.Label>
                                                                        <Form.Control
                                                                            type="number"
                                                                            placeholder="Enter Alternative Number"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.alternativeNumber}
                                                                            name="alternativeNumber"
                                                                        />
                                                                        {touched.alternativeNumber &&
                                                                            errors.alternativeNumber ? (
                                                                            <div className="errorMessage">
                                                                                {errors.alternativeNumber}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>
                                                                </Row>

                                                                <Row>
                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="kulam"
                                                                    >
                                                                        <Form.Label> Kulam </Form.Label>
                                                                        <Form.Select
                                                                            aria-label="Default select example"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.kulam}
                                                                            name="kulam"
                                                                        >
                                                                            <option value="0"> Select Kulam </option>
                                                                            <option value="Aadai">Aadai</option>
                                                                            <option value="Aadhi">Aadhi</option>
                                                                            <option value="Aanthai">Aanthai</option>
                                                                            <option value="Aavan">Aavan</option>
                                                                            <option value="Agni">Agni</option>
                                                                            <option value="Alagan">Alagan</option>
                                                                            <option value="7">Andhai</option>
                                                                            <option value="8">Andhuvan</option>
                                                                            <option value="9">Ariyan</option>
                                                                            <option value="10">Bala</option>
                                                                            <option value="11">Cheran</option>
                                                                            <option value="12">Dananjayan</option>
                                                                            <option value="13">Devendran</option>
                                                                            <option value="14">Eala</option>
                                                                            <option value="15">Eenjan</option>
                                                                            <option value="16">Ennai</option>
                                                                            <option value="17">Indhiran</option>
                                                                            <option value="18">Kaadai</option>
                                                                            <option value="19">Kaadan</option>
                                                                            <option value="20">Kaari</option>
                                                                            <option value="21">Kaavalar</option>
                                                                            <option value="22">Kadunthuli</option>
                                                                            <option value="23">Kalli</option>
                                                                            <option value="24">Kanakkan</option>
                                                                            <option value="25">Kanavaalan</option>
                                                                            <option value="26">Kannan</option>
                                                                            <option value="27">Kannandhai</option>
                                                                            <option value="28">Kannivaadiyan</option>
                                                                            <option value="29">Keerai</option>
                                                                            <option value="30">Koorai</option>
                                                                            <option value="31">Koventhan</option>
                                                                            <option value="32">Kuzhaayan</option>
                                                                            <option value="33">Maadai</option>
                                                                            <option value="34">Maniyan</option>
                                                                            <option value="35">Mazhluazhlagar</option>
                                                                            <option value="36">Medhi </option>
                                                                            <option value="92">Mullai</option>
                                                                            <option value="37">Mullukkadhan </option>
                                                                            <option value="38">Muthan</option>
                                                                            <option value="39">Neelan</option>
                                                                            <option value="40">Neerunni</option>
                                                                            <option value="41">Odhaalar</option>
                                                                            <option value="42">Olukkar</option>
                                                                            <option value="43">Paaliyan</option>
                                                                            <option value="93">Padari</option>
                                                                            <option value="44">Padhuman</option>
                                                                            <option value="45">Padukkunni</option>
                                                                            <option value="46">Pala</option>
                                                                            <option value="47">Panakkadai</option>
                                                                            <option value="48">Panayan</option>
                                                                            <option value="49">Pandhan</option>
                                                                            <option value="50">Pandiyan</option>
                                                                            <option value="51">Paniyan</option>
                                                                            <option value="52">Pannai</option>
                                                                            <option value="53">Pavalan</option>
                                                                            <option value="54">Payiran</option>
                                                                            <option value="55">Periyan</option>
                                                                            <option value="56">Perunkudi</option>
                                                                            <option value="57">Pillan</option>
                                                                            <option value="58">Podiyan</option>
                                                                            <option value="59">Ponnan</option>
                                                                            <option value="60">Poochandhi</option>
                                                                            <option value="61">Poonthai</option>
                                                                            <option value="62">Poosan</option>
                                                                            <option value="63">Porulthantha</option>
                                                                            <option value="64">Saakadai</option>
                                                                            <option value="65">Sanagan</option>
                                                                            <option value="66">Sathandhai</option>
                                                                            <option value="67">Sathuvaraayan</option>
                                                                            <option value="68">Sedan</option>
                                                                            <option value="69">Sellan</option>
                                                                            <option value="70">Sempon</option>
                                                                            <option value="71">Sempoothan</option>
                                                                            <option value="72">Sengannan</option>
                                                                            <option value="73">Sengunni</option>
                                                                            <option value="74">Seralan</option>
                                                                            <option value="75">Seran</option>
                                                                            <option value="76">Sevadi</option>
                                                                            <option value="77">Sevvayan</option>
                                                                            <option value="78">Sevventhi</option>
                                                                            <option value="79">Sowriyan</option>
                                                                            <option value="80">Surapi</option>
                                                                            <option value="81">Thazhinji</option>
                                                                        </Form.Select>

                                                                        {touched.kulam && errors.kulam ? (
                                                                            <div className="errorMessage">
                                                                                {errors.kulam}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="communityName"
                                                                    >
                                                                        <Form.Label> community Name </Form.Label>
                                                                        <Form.Select
                                                                            aria-label="Default select example"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.communityName}
                                                                            name="communityName"
                                                                        >
                                                                            <option value="0">Select</option>
                                                                            {community.map((item, i) => {
                                                                                return (
                                                                                    <option key={i} value={item.value}>
                                                                                        {item.label}
                                                                                    </option>
                                                                                );
                                                                            })}
                                                                        </Form.Select>
                                                                        {touched.communityName &&
                                                                            errors.communityName ? (
                                                                            <div className="errorMessage">
                                                                                {errors.communityName}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>
                                                                </Row>

                                                                <Row>
                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="createdBy"
                                                                    >
                                                                        <Form.Label> Created by </Form.Label>
                                                                        <Form.Select
                                                                            aria-label="Default select example"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.createdBy}
                                                                            name="createdBy"
                                                                        >
                                                                            <option value="0">-Select-</option>
                                                                            <option value="Self">Self</option>
                                                                            <option value="Parents">Parents</option>
                                                                            <option value="Sister">Sister</option>
                                                                            <option value="Brother">Brother</option>
                                                                            <option value="Relative">Relative</option>
                                                                            <option value="Friend">Friend</option>
                                                                            <option value="Others">Others</option>
                                                                        </Form.Select>
                                                                        {touched.createdBy && errors.createdBy ? (
                                                                            <div className="errorMessage">
                                                                                {errors.createdBy}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>
                                                                </Row>

                                                                <Form.Group
                                                                    className="mb-3"
                                                                    controlId="subject"
                                                                >
                                                                    <Form.Label>Subject </Form.Label>
                                                                    <Form.Control
                                                                        as="textarea"
                                                                        rows={3}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        value={values.subject}
                                                                        name="subject"
                                                                    />
                                                                    {touched.subject && errors.subject ? (
                                                                        <div className="errorMessage">
                                                                            {errors.subject}
                                                                        </div>
                                                                    ) : null}
                                                                </Form.Group>
                                                            </div>
                                                        )}

                                                        {/* step 2 ------------- */}

                                                        {steps[1].key === activeStep.key && (
                                                            <div>
                                                                <h6 className="tabTitleTxt">
                                                                    {" "}
                                                                    Horoscope Details{" "}
                                                                </h6>
                                                                <div className="signUpInnerBox">
                                                                    <Row>
                                                                        <Form.Group
                                                                            as={Col}
                                                                            className="mb-3"
                                                                            controlId="timeOfBirth"
                                                                        >
                                                                            <Form.Label> Time Of Birth </Form.Label>
                                                                            <Form.Check
                                                                                type="checkbox"
                                                                                label="Not Known"
                                                                                name="formHorizontalRadios"
                                                                                id="formHorizontalRadios2"
                                                                                onClick={() =>
                                                                                    settimeOfBirths(!timeOfBirth)
                                                                                }
                                                                            />
                                                                            {timeOfBirth && (
                                                                                <Col>
                                                                                    <Form.Control
                                                                                        type="time"
                                                                                        placeholder="Enter Time Of Birth"
                                                                                        onChange={handleChange}
                                                                                        onBlur={handleBlur}
                                                                                        value={values.timeOfBirth}
                                                                                        name="timeOfBirth"
                                                                                    />
                                                                                </Col>
                                                                            )}
                                                                            {touched.timeOfBirth &&
                                                                                errors.timeOfBirth ? (
                                                                                <div className="errorMessage">
                                                                                    {errors.timeOfBirth}
                                                                                </div>
                                                                            ) : null}
                                                                        </Form.Group>

                                                                        <Form.Group
                                                                            as={Col}
                                                                            className="mb-3"
                                                                            controlId="dayofBirth"
                                                                        >
                                                                            <Form.Label> Day Of Birth </Form.Label>
                                                                            <Form.Check
                                                                                type="checkbox"
                                                                                label="Not Known"
                                                                                name="formHorizontalRadios"
                                                                                id="dayofBirth"
                                                                                onClick={() =>
                                                                                    setdayofBirths(!dayofBirth)
                                                                                }
                                                                            />
                                                                            {dayofBirth && (
                                                                                <Col>
                                                                                    <Form.Select
                                                                                        aria-label="Default select example"
                                                                                        onChange={handleChange}
                                                                                        onBlur={handleBlur}
                                                                                        value={values.dayOfBirth}
                                                                                        name="dayOfBirth"
                                                                                    >
                                                                                        <option value="0">
                                                                                            {" "}
                                                                                            Select Day
                                                                                        </option>
                                                                                        <option value="Sunday">
                                                                                            Sunday
                                                                                        </option>
                                                                                        <option value="Monday">
                                                                                            Monday
                                                                                        </option>
                                                                                        <option value="Tuesday">
                                                                                            Tuesday
                                                                                        </option>
                                                                                        <option value="Wednesday">
                                                                                            Wednesday
                                                                                        </option>
                                                                                        <option value="Thursday">
                                                                                            Thursday
                                                                                        </option>
                                                                                        <option value="Friday">
                                                                                            Friday
                                                                                        </option>
                                                                                        <option value="Saturday">
                                                                                            Saturday
                                                                                        </option>
                                                                                    </Form.Select>
                                                                                </Col>
                                                                            )}

                                                                            {touched.dayOfBirth &&
                                                                                errors.dayOfBirth ? (
                                                                                <div className="errorMessage">
                                                                                    {errors.dayOfBirth}
                                                                                </div>
                                                                            ) : null}
                                                                        </Form.Group>
                                                                    </Row>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="placeofBirth"
                                                                    >
                                                                        <Form.Label> Place Of Birth </Form.Label>
                                                                        <Form.Check
                                                                            type="checkbox"
                                                                            label="Not Known"
                                                                            name="formHorizontalRadios"
                                                                            id="placeofBirth "
                                                                            onClick={() =>
                                                                                setplaceofBirths(!placeofBirth)
                                                                            }
                                                                        />
                                                                        {placeofBirth && (
                                                                            <Col>
                                                                                <Form.Control
                                                                                    type="text"
                                                                                    placeholder="Enter Place Of Birth"
                                                                                    onChange={handleChange}
                                                                                    onBlur={handleBlur}
                                                                                    value={values.placeOfBirth}
                                                                                    name="placeOfBirth"
                                                                                />
                                                                            </Col>
                                                                        )}

                                                                        {touched.placeOfBirth &&
                                                                            errors.placeOfBirth ? (
                                                                            <div className="errorMessage">
                                                                                {errors.placeOfBirth}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Row>
                                                                        <Form.Group
                                                                            as={Col}
                                                                            className="mb-3"
                                                                            controlId="rasi"
                                                                        >
                                                                            <Form.Label> Rasi </Form.Label>
                                                                            <Form.Select
                                                                                aria-label="Default select example"
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                value={values.rasi}
                                                                                name="rasi"
                                                                            >
                                                                                <option value="0"> Select Day</option>
                                                                                {rasi.map((item, i) => {
                                                                                    return (
                                                                                        <option key={i} value={item.value}>
                                                                                            {item.label}
                                                                                        </option>
                                                                                    );
                                                                                })}
                                                                            </Form.Select>

                                                                            {touched.rasi && errors.rasi ? (
                                                                                <div className="errorMessage">
                                                                                    {errors.rasi}
                                                                                </div>
                                                                            ) : null}
                                                                        </Form.Group>

                                                                        <Form.Group
                                                                            as={Col}
                                                                            className="mb-3"
                                                                            controlId="star"
                                                                        >
                                                                            <Form.Label> Star </Form.Label>
                                                                            <Form.Select
                                                                                aria-label="Default select example"
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                value={values.star}
                                                                                name="star"
                                                                            >
                                                                                <option value="0">Select</option>
                                                                                <option value="Anusham">Anusham</option>
                                                                                <option value="Ashwini">Ashwini</option>
                                                                                <option value="Avittam">Avittam</option>
                                                                                <option value="Ayilyam">Ayilyam</option>
                                                                                <option value="Bharani">Bharani</option>
                                                                                <option value="Chitrai">Chitrai</option>
                                                                                <option value="Hastham">Hastham</option>
                                                                                <option value="Kettai">Kettai</option>
                                                                                <option value="Krittika">Krittika</option>
                                                                                <option value="Magam">Magam</option>
                                                                                <option value="Moolam">Moolam</option>
                                                                                <option value="Mrigasira">Mrigasira</option>
                                                                                <option value="Pooradam">Pooradam</option>
                                                                                <option value="Pooradam">Pooradam</option>
                                                                                <option value="Poorattadhi">Poorattadhi</option>
                                                                                <option value="Poosam">Poosam</option>
                                                                                <option value="Punarpusam">Punarpusam</option>
                                                                                <option value="Revathi">Revathi</option>
                                                                                <option value="Rohini">Rohini</option>
                                                                                <option value="Sadhayam">Sadhayam</option>
                                                                                <option value="Swati">Swati</option>
                                                                                <option value="Thiruvadirai">Thiruvadirai</option>
                                                                                <option value="Thiruvonam">Thiruvonam</option>
                                                                                <option value="Uthiradam">Uthiradam</option>
                                                                                <option value="Uthiram">Uthiram</option>
                                                                                <option value="Uthirattadhi">Uthirattadhi</option>
                                                                                <option value="Vishakham">Vishakham</option>
                                                                            </Form.Select>

                                                                            {touched.star && errors.star ? (
                                                                                <div className="errorMessage">
                                                                                    {errors.star}
                                                                                </div>
                                                                            ) : null}
                                                                        </Form.Group>
                                                                    </Row>

                                                                    <Row>
                                                                        <Form.Group
                                                                            as={Col}
                                                                            className="mb-3"
                                                                            controlId="padham"
                                                                        >
                                                                            <Form.Label> Padham </Form.Label>
                                                                            <Form.Select
                                                                                aria-label="Default select example"
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                value={values.padham}
                                                                                name="padham"
                                                                            >
                                                                                <option selected value="0">
                                                                                    -Select-
                                                                                </option>
                                                                                <option value="1">1</option>
                                                                                <option value="2">2</option>
                                                                                <option value="3">3</option>
                                                                                <option value="4">4</option>
                                                                                <option value="5">None</option>
                                                                            </Form.Select>
                                                                            {touched.padham && errors.padham ? (
                                                                                <div className="errorMessage">
                                                                                    {errors.padham}
                                                                                </div>
                                                                            ) : null}
                                                                        </Form.Group>

                                                                        <Form.Group
                                                                            as={Col}
                                                                            className="mb-3"
                                                                            controlId="lagnam"
                                                                        >
                                                                            <Form.Label> Lagnam </Form.Label>
                                                                            <Form.Select
                                                                                aria-label="Default select example"
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                value={values.lagnam}
                                                                                name="lagnam"
                                                                            >
                                                                                <option value="0">Select</option>
                                                                                <option value="9">
                                                                                    Dhanus / Sagittarius
                                                                                </option>
                                                                                <option value="6">Kanni / Virgo</option>
                                                                                <option value="4">
                                                                                    Katagam / Cancer
                                                                                </option>
                                                                                <option value="11">
                                                                                    Kumbha / Aquarius
                                                                                </option>
                                                                                <option value="10">
                                                                                    Makara / Capricorn
                                                                                </option>
                                                                                <option value="12">
                                                                                    Meena / Pisces
                                                                                </option>
                                                                                <option value="1">
                                                                                    Mesham / Aries{" "}
                                                                                </option>
                                                                                <option value="3">
                                                                                    Mithunam / Gemini
                                                                                </option>
                                                                                <option value="2">
                                                                                    Rishabam / Taurus
                                                                                </option>
                                                                                <option value="5">Simham / Leo</option>
                                                                                <option value="7">Tula / Libra</option>
                                                                                <option value="8">
                                                                                    Vrichigam / Scorpio
                                                                                </option>
                                                                            </Form.Select>
                                                                            {touched.lagnam && errors.lagnam ? (
                                                                                <div className="errorMessage">
                                                                                    {errors.lagnam}
                                                                                </div>
                                                                            ) : null}
                                                                        </Form.Group>
                                                                    </Row>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="jananaKaala"
                                                                    >
                                                                        <Form.Label>
                                                                            {" "}
                                                                            Janana Kaala Thisai Erupu{" "}
                                                                        </Form.Label>
                                                                        <Form.Select
                                                                            aria-label="Default select example"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.jananaKaala}
                                                                            name="jananaKaala"
                                                                        >
                                                                            <option selected value="0">
                                                                                -Select-
                                                                            </option>
                                                                            <option value="1">Surya</option>
                                                                            <option value="2">Chandra</option>
                                                                            <option value="3">Sevvai</option>
                                                                            <option value="4">Bhudan</option>
                                                                            <option value="5">Guru</option>
                                                                            <option value="6">Sukran</option>
                                                                            <option value="7">Sani</option>
                                                                            <option value="8">Raghu</option>
                                                                            <option value="9">Kedhu</option>
                                                                        </Form.Select>
                                                                        {touched.jananaKaala &&
                                                                            errors.jananaKaala ? (
                                                                            <div className="errorMessage">
                                                                                {errors.jananaKaala}
                                                                            </div>
                                                                        ) : null}
                                                                        <Col className="inlineFromGrup mt-3">


                                                                            <Form.Group
                                                                                as={Col}
                                                                                className="mb-3"
                                                                                controlId="jananaYear"
                                                                            >
                                                                                <Form.Control
                                                                                    type="date"
                                                                                    onChange={handleChange}
                                                                                    onBlur={handleBlur}
                                                                                    value={values.jananaYear}
                                                                                    name="jananaYear"
                                                                                />
                                                                                {touched.jananaYear && errors.jananaYear ? (
                                                                                    <div className="errorMessage">
                                                                                        {errors.jananaYear}
                                                                                    </div>
                                                                                ) : null}
                                                                            </Form.Group>
                                                                        </Col>
                                                                    </Form.Group>

                                                                    <Row>
                                                                        <Form.Group
                                                                            as={Col}
                                                                            className="mb-3"
                                                                            controlId="formBasicEmail"
                                                                        >
                                                                            <Form.Label> Sevvai </Form.Label>
                                                                            <Col className="inlineFromGrup justify-content-start">
                                                                                <Form.Check
                                                                                    type="checkbox"
                                                                                    label="Yes"
                                                                                    name="formHorizontalRadios"
                                                                                    id="placeofBirth "
                                                                                />

                                                                                <Form.Check
                                                                                    type="checkbox"
                                                                                    label="Not"
                                                                                    name="formHorizontalRadios"
                                                                                    id="placeofBirth "
                                                                                />
                                                                            </Col>
                                                                        </Form.Group>
                                                                        <Form.Group
                                                                            as={Col}
                                                                            className="mb-3"
                                                                            controlId="formBasicEmail"
                                                                        >
                                                                            <Form.Label> Raaghu </Form.Label>
                                                                            <Col className="inlineFromGrup justify-content-start">
                                                                                <Form.Check
                                                                                    type="radio"
                                                                                    label="Yes"
                                                                                    name="Yes"
                                                                                    id="raaghu-yes"
                                                                                />

                                                                                <Form.Check
                                                                                    type="radio"
                                                                                    label="Not"
                                                                                    name="Not"
                                                                                    id="raaghu-not"
                                                                                />
                                                                            </Col>
                                                                        </Form.Group>
                                                                    </Row>
                                                                </div>
                                                                <h6 className="tabTitleTxt">
                                                                    {" "}
                                                                    Education & Occupation Details{" "}
                                                                </h6>

                                                                <div className="signUpInnerBox">
                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="education"
                                                                    >
                                                                        <Form.Label> Education </Form.Label>
                                                                        <Form.Select
                                                                            aria-label="Default select example"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.education}
                                                                            name="education"
                                                                        >
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Management"
                                                                            >
                                                                                ACS
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Management"
                                                                            >
                                                                                Any Masters in Management
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Management"
                                                                            >
                                                                                BBA
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Management"
                                                                            >
                                                                                BBM
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Management"
                                                                            >
                                                                                BFM (Financial Management)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Management"
                                                                            >
                                                                                BHM (Hotel Management){" "}
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Management"
                                                                            >
                                                                                MBA
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Management"
                                                                            >
                                                                                MBA / PGDM / PGDBM
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Management"
                                                                            >
                                                                                MBE
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Management"
                                                                            >
                                                                                MFM (Financial Management)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Management"
                                                                            >
                                                                                MHM (Hotel Management)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Management"
                                                                            >
                                                                                MHRM (Human Resource Management)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Management"
                                                                            >
                                                                                PGDM
                                                                            </option>

                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                Aeronautical Engineering
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                B Plan
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                B.Arch
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                B.Tech
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                B.Tech(IT)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                B.Tech(Mech)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                BCA
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                BE
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                BE Or Similar
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                BE(Civil)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                BE(CS)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                BE(ECE)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                BE(EEE)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                BE/B.Tech
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Engineering"
                                                                            >
                                                                                BSc IT / Computer Science
                                                                            </option>

                                                                            <option
                                                                                value="Bachelors2"
                                                                                classification="Others"
                                                                            >
                                                                                Any Degree
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors2"
                                                                                classification="Others"
                                                                            >
                                                                                Any Professional Degree
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors9"
                                                                                classification="Others"
                                                                            >
                                                                                B.A.,M.S
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors4"
                                                                                classification="Others"
                                                                            >
                                                                                B.D.S/M.D.S/M.B.B.S/M.D
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors8"
                                                                                classification="Others"
                                                                            >
                                                                                B.E/M.E/MCA/M.SC/MBA
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors0"
                                                                                classification="Others"
                                                                            >
                                                                                B.H.,M.S
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors7"
                                                                                classification="Others"
                                                                            >
                                                                                B.Pharam
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors8"
                                                                                classification="Others"
                                                                            >
                                                                                B.S,M.S
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors4"
                                                                                classification="Others"
                                                                            >
                                                                                BA,L.L.B
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors6"
                                                                                classification="Others"
                                                                            >
                                                                                BE M.S
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors5"
                                                                                classification="Others"
                                                                            >
                                                                                BE,M.S(USA)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors6"
                                                                                classification="Others"
                                                                            >
                                                                                BE,MS
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors4"
                                                                                classification="Others"
                                                                            >
                                                                                BE/B.TECH/ME/M.TECH
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors5"
                                                                                classification="Others"
                                                                            >
                                                                                BE/MBA
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors1"
                                                                                classification="Others"
                                                                            >
                                                                                BE/MCA
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors9"
                                                                                classification="Others"
                                                                            >
                                                                                BE/MCA/MBA/CA
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors7"
                                                                                classification="Others"
                                                                            >
                                                                                BE/ME
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors8"
                                                                                classification="Others"
                                                                            >
                                                                                CC
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors5"
                                                                                classification="Others"
                                                                            >
                                                                                Doctor or Engineer
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors1"
                                                                                classification="Others"
                                                                            >
                                                                                Engineering master degree or doctor MD
                                                                                MS
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors0"
                                                                                classification="Others"
                                                                            >
                                                                                M.Res
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors3"
                                                                                classification="Others"
                                                                            >
                                                                                M.Tech/MS(Engg)/MD(Doctor)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors9"
                                                                                classification="Others"
                                                                            >
                                                                                Master Degree
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors6"
                                                                                classification="Others"
                                                                            >
                                                                                MBBS,MD
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors1"
                                                                                classification="Others"
                                                                            >
                                                                                MBBS/MD
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors2"
                                                                                classification="Others"
                                                                            >
                                                                                ME,MBA,MS
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors3"
                                                                                classification="Others"
                                                                            >
                                                                                Medical
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors9"
                                                                                classification="Others"
                                                                            >
                                                                                Medical/IT professional
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors7"
                                                                                classification="Others"
                                                                            >
                                                                                MIB
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors0"
                                                                                classification="Others"
                                                                            >
                                                                                MS/MD/MBA
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors8"
                                                                                classification="Others"
                                                                            >
                                                                                nursing
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors7"
                                                                                classification="Others"
                                                                            >
                                                                                Others
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors3"
                                                                                classification="Others"
                                                                            >
                                                                                PG Degree
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors0"
                                                                                classification="Others"
                                                                            >
                                                                                U.G Degree
                                                                            </option>

                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                Aviation Degree
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                B.Com
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                B.COM(ACS)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors2"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                B.Com(CA)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                B.Ed
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                B.Phil
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                B.Sc
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                BA
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                Bachelor Degree
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                BFA
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                BFT
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                BHM
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                BMM (MASS MEDIA)
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                BSc
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Arts / Science / Commerce"
                                                                            >
                                                                                BSW
                                                                            </option>

                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Medicine in General / Dental / Surgeon"
                                                                            >
                                                                                B.Pharm
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Medicine in General / Dental / Surgeon"
                                                                            >
                                                                                BAMS
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Medicine in General / Dental / Surgeon"
                                                                            >
                                                                                BDS
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Medicine in General / Dental / Surgeon"
                                                                            >
                                                                                BHMS
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Medicine in General / Dental / Surgeon"
                                                                            >
                                                                                BPT
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Medicine in General / Dental / Surgeon"
                                                                            >
                                                                                BSMS
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Medicine in General / Dental / Surgeon"
                                                                            >
                                                                                BUMS
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Medicine in General / Dental / Surgeon"
                                                                            >
                                                                                BVSc
                                                                            </option>
                                                                            <option
                                                                                value="Bachelors"
                                                                                classification="Any Bachelors in Medicine in General / Dental / Surgeon"
                                                                            >
                                                                                MBBS
                                                                            </option>
                                                                        </Form.Select>
                                                                        <Form.Text
                                                                            id="passwordHelpBlock"
                                                                            muted
                                                                            className="d-block pt-1"
                                                                        >
                                                                            Hold CTRL Key To Select Multiple Items.
                                                                        </Form.Text>
                                                                        {touched.education && errors.education ? (
                                                                            <div className="errorMessage">
                                                                                {errors.education}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="educationDetail"
                                                                    >
                                                                        <Form.Label> Education Detail </Form.Label>
                                                                        <Form.Control
                                                                            as="textarea"
                                                                            rows={3}
                                                                            placeholder="Enter Education Detail"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.educationDetail}
                                                                            name="educationDetail"
                                                                        />
                                                                        {touched.educationDetail &&
                                                                            errors.educationDetail ? (
                                                                            <div className="errorMessage">
                                                                                {errors.educationDetail}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="college"
                                                                    >
                                                                        <Form.Label> College </Form.Label>
                                                                        <Form.Control
                                                                            as="textarea"
                                                                            rows={3}
                                                                            placeholder="Enter College"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.college}
                                                                            name="college"
                                                                        />
                                                                        {touched.college && errors.college ? (
                                                                            <div className="errorMessage">
                                                                                {errors.college}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="jobDetails"
                                                                    >
                                                                        <Form.Label>
                                                                            {" "}
                                                                            Job Title / Details{" "}
                                                                        </Form.Label>
                                                                        <Form.Control
                                                                            as="textarea"
                                                                            rows={3}
                                                                            placeholder="Enter Job Title / Details"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.jobDetails}
                                                                            name="jobDetails"
                                                                        />
                                                                        {touched.jobDetails && errors.jobDetails ? (
                                                                            <div className="errorMessage">
                                                                                {errors.jobDetails}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="employerDetails"
                                                                    >
                                                                        <Form.Label> Employer Details </Form.Label>
                                                                        <Form.Control
                                                                            as="textarea"
                                                                            rows={3}
                                                                            placeholder="Enter Employer Details"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.employerDetails}
                                                                            name="employerDetails"
                                                                        />
                                                                        <Form.Text className="text-muted d-block pt-1">
                                                                            Don't give any contact information. If any
                                                                            misuse, admin will remove that without
                                                                            your permission.
                                                                        </Form.Text>
                                                                        {touched.employerDetails &&
                                                                            errors.employerDetails ? (
                                                                            <div className="errorMessage">
                                                                                {errors.employerDetails}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="employedCountry"
                                                                    >
                                                                        <Form.Label>
                                                                            {" "}
                                                                            Currently Employed Country{" "}
                                                                        </Form.Label>
                                                                        <Form.Select
                                                                            aria-label="Default select example"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.employedCountry}
                                                                            name="employedCountry"
                                                                        >
                                                                            <option value="0">Select</option>
                                                                            {country.map((item, i) => {
                                                                                return (
                                                                                    <option key={i} value={item.value}>
                                                                                        {item.label}
                                                                                    </option>
                                                                                );
                                                                            })}
                                                                        </Form.Select>
                                                                        {touched.employedCountry &&
                                                                            errors.employedCountry ? (
                                                                            <div className="errorMessage">
                                                                                {errors.employedCountry}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="formBasicEmail"
                                                                    >
                                                                        <Form.Label> Income </Form.Label>
                                                                        <Col className="inlineFromGrup">
                                                                            <Form.Select
                                                                                onChange={handleChange}
                                                                                onBlur={handleBlur}
                                                                                value={values.income}
                                                                                name="income"
                                                                                aria-label="Default select example"
                                                                            >
                                                                                <option value="0">Select</option>
                                                                                <option value="1">
                                                                                    $ Canadian Dollar (CAD)
                                                                                </option>
                                                                                <option value="2">
                                                                                    $ Australian Dollar (AUD)
                                                                                </option>
                                                                                <option value="3">
                                                                                    € Euro Member Countries (EUR)
                                                                                </option>
                                                                                <option value="4">
                                                                                    ₹ Indian Rupee (INR)
                                                                                </option>
                                                                                <option value="5">
                                                                                    ¥ Japanese Yen (JPY)
                                                                                </option>
                                                                                <option value="6">
                                                                                    £ United Kingdom Pound (GBP)
                                                                                </option>
                                                                                <option value="7">
                                                                                    $ United States Dollar (USD)
                                                                                </option>
                                                                            </Form.Select>

                                                                            <Form.Control
                                                                                type="number"
                                                                                placeholder="Enter Rupees"
                                                                            />

                                                                            <Form.Select aria-label="Default select example">
                                                                                <option value="0">Select</option>
                                                                                <option value="1"> Per Month </option>
                                                                                <option value="2"> Per Annum </option>
                                                                            </Form.Select>
                                                                        </Col>

                                                                        {touched.income && errors.income ? (
                                                                            <div className="errorMessage">
                                                                                {errors.income}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>
                                                                </div>

                                                                <h6 className="tabTitleTxt">
                                                                    {" "}
                                                                    Contact Details{" "}
                                                                </h6>
                                                                <div className="signUpInnerBox">
                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="address"
                                                                    >
                                                                        <Form.Label> Address </Form.Label>
                                                                        <Form.Control
                                                                            as="textarea"
                                                                            rows={3}
                                                                            placeholder="Enter Address"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.address}
                                                                            name="address"
                                                                        />{" "}
                                                                        {touched.address && errors.address ? (
                                                                            <div className="errorMessage">
                                                                                {errors.address}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="country"
                                                                    >
                                                                        <Form.Label> Country </Form.Label>
                                                                        <Form.Select
                                                                            aria-label="Default select example"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.country}
                                                                            name="country"
                                                                        >
                                                                            <option value="0">Select Country</option>
                                                                            {country.map((item, i) => {
                                                                                return (
                                                                                    <option key={i} value={item.value}>
                                                                                        {item.label}
                                                                                    </option>
                                                                                );
                                                                            })}
                                                                        </Form.Select>

                                                                        {touched.country && errors.country ? (
                                                                            <div className="errorMessage">
                                                                                {errors.country}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="state"
                                                                    >
                                                                        <Form.Label> State </Form.Label>
                                                                        <Form.Select
                                                                            aria-label="Default select example"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.state}
                                                                            name="state"
                                                                        >
                                                                            <option value="0">Select State</option>
                                                                            {state.map((item, i) => {
                                                                                return (
                                                                                    <option key={i} value={item.value}>
                                                                                        {item.label}
                                                                                    </option>
                                                                                );
                                                                            })}
                                                                        </Form.Select>

                                                                        {touched.state && errors.state ? (
                                                                            <div className="errorMessage">
                                                                                {errors.state}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="city"
                                                                    >
                                                                        <Form.Label> City/Town </Form.Label>
                                                                        <Form.Control
                                                                            type="text"
                                                                            placeholder="Enter City/Town"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.city}
                                                                            name="city"
                                                                        />

                                                                        {touched.city && errors.city ? (
                                                                            <div className="errorMessage">
                                                                                {errors.city}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="countryLiving"
                                                                    >
                                                                        <Form.Label> Country Living In </Form.Label>
                                                                        <Form.Select
                                                                            aria-label="Default select example"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.countryLiving}
                                                                            name="countryLiving"
                                                                        >
                                                                            <option value="0">
                                                                                Select Country Living In
                                                                            </option>
                                                                            {country.map((item, i) => {
                                                                                return (
                                                                                    <option key={i} value={item.value}>
                                                                                        {item.label}
                                                                                    </option>
                                                                                );
                                                                            })}
                                                                        </Form.Select>

                                                                        {touched.countryLiving &&
                                                                            errors.countryLiving ? (
                                                                            <div className="errorMessage">
                                                                                {errors.countryLiving}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="native"
                                                                    >
                                                                        <Form.Label> Native </Form.Label>
                                                                        <Form.Control
                                                                            type="text"
                                                                            placeholder="Enter Native"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.native}
                                                                            name="native"
                                                                        />
                                                                        {touched.native && errors.native ? (
                                                                            <div className="errorMessage">
                                                                                {errors.native}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>

                                                                    <Form.Group
                                                                        as={Col}
                                                                        className="mb-3"
                                                                        controlId="website"
                                                                    >
                                                                        <Form.Label>
                                                                            {" "}
                                                                            Personal Website/Blog{" "}
                                                                        </Form.Label>
                                                                        <Form.Control
                                                                            type="text"
                                                                            placeholder="Enter Personal Website/Blog"
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            value={values.website}
                                                                            name="website"
                                                                        />
                                                                        <Form.Text className="text-muted d-block pt-1">
                                                                            ( Eg:http://Yourblog.Com )
                                                                        </Form.Text>
                                                                        {touched.website && errors.website ? (
                                                                            <div className="errorMessage">
                                                                                {errors.website}
                                                                            </div>
                                                                        ) : null}
                                                                    </Form.Group>
                                                                    <Form.Group
                                                                        controlId="formFile"
                                                                        className="mb-3"
                                                                    >
                                                                        <Form.Label>
                                                                            {" "}
                                                                            Upload your Horoscope image{" "}
                                                                        </Form.Label>
                                                                        <Form.Control
                                                                            type="file"
                                                                            className="horoscope_file"
                                                                            onChange={(event) => {
                                                                                setFieldValue("file", event.currentTarget.files[0]);
                                                                              }}
                                                                            name="file"
                                                                        />
                                                                    </Form.Group>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="btn-component submitBtnBox">
                                                        <Button
                                                            className="btn backBtn"
                                                            type="button"
                                                            onClick={handleBack}
                                                            disabled={steps[0].key === activeStep.key}
                                                        >
                                                            {" "}
                                                            Back{" "}
                                                        </Button>
                                                        <Button
                                                            className={
                                                                steps[steps.length - 1].key !== activeStep.key
                                                                    ? "nextBtn"
                                                                    : "d-none"
                                                            }
                                                            onClick={handleNext}
                                                        >
                                                            {" "}
                                                            Next{" "}
                                                        </Button>
                                                        <Button
                                                            type="submit"
                                                            onClick={handleNext}
                                                            disabled={
                                                                steps[steps.length - 1].key !==
                                                                activeStep.key || isSubmitting
                                                            }
                                                        >
                                                            {" "}
                                                            Sign Up{" "}
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default SignUpPage;
