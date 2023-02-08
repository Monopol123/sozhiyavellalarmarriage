import React from 'react';
import { Row, Form, Col } from 'react-bootstrap';
// import {  useNavigate } from "react-router-dom";

const FirstStep = () => {
    // const navigate = useNavigate();

    // const navigateHome = () => {
    //     navigate('/');
    // };
    return (
        <div>
            <h6 className='tabTitleTxt'> Horoscope Details </h6>
            <div className="signUpInnerBox"> 
                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Time Of Birth </Form.Label>
                        <Form.Check
                            type="checkbox"
                            label="Not Known"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />
                        <Col className='inlineFromGrup'> 
                                <Form.Select aria-label="Default select example">
                                    <option value="0" >  Hrs</option>                                
                                    <option value="1"> 1 </option>
                                    <option value="2"> 2 </option>
                                    <option value="3"> 3 </option>
                                    <option value="4"> 4 </option>
                                    <option value="5"> 5 </option>
                                    <option value="6"> 6 </option>
                                    <option value="7"> 7 </option>
                                    <option value="8"> 8 </option>
                                    <option value="9"> 9 </option>
                                    <option value="10"> 10 </option>
                                    <option value="11"> 11 </option>
                                    <option value="12"> 12 </option>
                                </Form.Select>    
                                <Form.Select aria-label="Default select example">
                                    <option value="0" > Min</option>
                                    <option value="1"> 1 </option>
                                    <option value="2"> 2 </option>
                                    <option value="3"> 3 </option>
                                    <option value="4"> 4 </option>
                                    <option value="5"> 5 </option>
                                    <option value="6"> 6 </option>
                                    <option value="7"> 7 </option>
                                    <option value="8"> 8 </option>
                                    <option value="9"> 9 </option>
                                    <option value="10"> 10 </option>
                                    <option value="11"> 11 </option>
                                    <option value="12"> 12 </option>
                                    <option value="13"> 13 </option>
                                    <option value="14"> 14 </option>
                                    <option value="15"> 15 </option>
                                    <option value="16"> 16 </option>
                                    <option value="17"> 17 </option>
                                    <option value="18"> 18 </option>
                                    <option value="19"> 19 </option>
                                    <option value="20"> 20 </option>
                                    <option value="21"> 21 </option>
                                    <option value="22"> 22 </option>
                                    <option value="23"> 23 </option>
                                    <option value="24"> 24 </option>
                                    <option value="25"> 25 </option>
                                    <option value="26"> 26 </option>
                                    <option value="27"> 27 </option>
                                    <option value="28"> 28 </option>
                                    <option value="29"> 29 </option>
                                    <option value="30"> 30 </option>
                                    <option value="31"> 31 </option>
                                    <option value="32"> 32 </option>
                                    <option value="33"> 33 </option>
                                    <option value="34"> 34 </option>
                                    <option value="35"> 35 </option>
                                    <option value="36"> 36 </option>
                                    <option value="37"> 37 </option>
                                    <option value="38"> 38 </option>
                                    <option value="39"> 39 </option>
                                    <option value="40"> 40 </option>
                                    <option value="41"> 41 </option>
                                    <option value="42"> 42 </option>
                                    <option value="43"> 43 </option>
                                    <option value="44"> 44 </option>
                                    <option value="45"> 45 </option>
                                    <option value="46"> 46 </option>
                                    <option value="47"> 47 </option>
                                    <option value="48"> 48 </option>
                                    <option value="49"> 49 </option>
                                    <option value="50"> 50 </option>
                                    <option value="51"> 51 </option>
                                    <option value="52"> 52 </option>
                                    <option value="53"> 53 </option>
                                    <option value="54"> 54 </option>
                                    <option value="55"> 55 </option>
                                    <option value="56"> 56 </option>
                                    <option value="57"> 57 </option>
                                    <option value="58"> 58 </option>
                                    <option value="59"> 59 </option>
                                    <option value="60"> 60 </option>

                                </Form.Select>    
                                <Form.Select aria-label="Default select example">
                                    <option value="0" > AM/PM</option>
                                    <option value="am">AM</option>
                                    <option value="pm">PM</option>
                                </Form.Select>           
                        </Col>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Day Of Birth </Form.Label>
                        <Form.Check
                            type="checkbox"
                            label="Not Known"
                            name="formHorizontalRadios"
                            id="dayofBirth"
                        />
                        <Col> 
                            <Form.Select aria-label="Default select example">
                                <option value="0"> Select Day</option>
                                <option value="Sunday">Sunday</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                            </Form.Select>          
                        </Col>
                    </Form.Group>
                </Row>

                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Place Of Birth </Form.Label>
                    <Form.Check
                        type="checkbox"
                        label="Not Known"
                        name="formHorizontalRadios"
                        id="placeofBirth "
                    />
                    <Col> 
                        <Form.Control type="text" placeholder="Enter Place Of Birth" />        
                    </Col>
                </Form.Group>

                <Row>
                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Rasi </Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="0"> Select Day</option>
                                <option value="1">Mesham / Aries </option>
                                <option value="2">Rishabam / Taurus</option>
                                <option value="3">Mithunam / Gemini</option>
                                <option value="4">Katagam / Cancer</option>
                                <option value="5">Simham / Leo</option>
                                <option value="6">Kanni / Virgo</option>
                                <option value="7">Tula / Libra</option>
                                <option value="8">Vrichigam / Scorpio</option>
                                <option value="9">Dhanus / Sagittarius</option>
                                <option value="10">Makara / Capricorn</option>
                                <option value="11">Kumbha / Aquarius</option>
                                <option value="12">Meena / Pisces</option>
                            </Form.Select>    
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Star </Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="0">Select</option>
                                <option value="17">Anusham</option>
                                <option value="1">Ashwini</option>
                                <option value="23">Avittam</option>
                                <option value="9">Ayilyam</option>
                                <option value="2">Bharani</option>
                                <option value="14">Chitrai</option>
                                <option value="13">Hastham</option>
                                <option value="18">Kettai</option>
                                <option value="3">Krittika</option>
                                <option value="10">Magam</option>
                                <option value="19">Moolam</option>
                                <option value="5">Mrigasira</option>
                                <option value="20">Pooradam</option>
                                <option value="11">Pooram</option>
                                <option value="25">Poorattadhi</option>
                                <option value="8">Poosam</option>
                                <option value="7">Punarpusam</option>
                                <option value="27">Revathi</option>
                                <option value="4">Rohini</option>
                                <option value="24">Sadhayam</option>
                                <option value="15">Swati</option>
                                <option value="6">Thiruvadirai</option>
                                <option value="22">Thiruvonam</option>
                                <option value="21">Uthiradam</option>
                                <option value="12">Uthiram</option>
                                <option value="26">Uthirattadhi</option>
                                <option value="16">Vishakham</option>
                            </Form.Select>        
                    </Form.Group>
                </Row>

                <Row>
                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Padham </Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option selected="selected" value="0">-Select-</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">None</option>
                            </Form.Select>    
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Lagnam </Form.Label>
                            <Form.Select aria-label="Default select example">
                            <option value="0">Select</option>
                                <option value="9">Dhanus / Sagittarius</option>
                                <option value="6">Kanni / Virgo</option>
                                <option value="4">Katagam / Cancer</option>
                                <option value="11">Kumbha / Aquarius</option>
                                <option value="10">Makara / Capricorn</option>
                                <option value="12">Meena / Pisces</option>
                                <option value="1">Mesham / Aries </option>
                                <option value="3">Mithunam / Gemini</option>
                                <option value="2">Rishabam / Taurus</option>
                                <option value="5">Simham / Leo</option>
                                <option value="7">Tula / Libra</option>
                                <option value="8">Vrichigam / Scorpio</option>
                            </Form.Select>        
                    </Form.Group>
                </Row>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Janana Kaala Thisai Erupu </Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option selected="" value="0" >-Select-</option>
                            <option value="1" >Surya</option>
                            <option value="2" >Chandra</option>
                            <option value="3" >Sevvai</option>
                            <option value="4" >Bhudan</option>
                            <option value="5" >Guru</option>
                            <option value="6" >Sukran</option>
                            <option value="7" >Sani</option>
                            <option value="8" >Raghu</option>
                            <option value="9" >Kedhu</option>
                        </Form.Select>  
                        <Col className='inlineFromGrup mt-3'> 

                            <Form.Select aria-label="Default select example">
                                <option selected="" value="0" >-Year-</option>
                            </Form.Select>  
                            
                            <Form.Select aria-label="Default select example">
                                <option selected="" value="0" >-Month-</option>
                            </Form.Select>    
                            
                            <Form.Select aria-label="Default select example">
                                <option selected="" value="0" >-Days-</option>
                            </Form.Select>        
                        </Col>
                    </Form.Group>

                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Sevvai </Form.Label>
                            <Col className='inlineFromGrup justify-content-start'> 
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
                        <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                            <Form.Label> Raaghu </Form.Label>
                            <Col className='inlineFromGrup justify-content-start'> 
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
                    </Row>
                </div>
                <h6 className='tabTitleTxt'> Education & Occupation Details </h6>

                <div className="signUpInnerBox">

                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Education </Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="66" classification="Any Bachelors in Management">ACS</option>
                            <option value="63" classification="Any Bachelors in Management">Any Masters in Management</option>
                            <option value="58" classification="Any Bachelors in Management">BBA</option>
                            <option value="60" classification="Any Bachelors in Management">BBM</option>
                            <option value="61" classification="Any Bachelors in Management">BFM (Financial Management)</option>
                            <option value="62" classification="Any Bachelors in Management">BHM (Hotel Management</option>
                            <option value="64" classification="Any Bachelors in Management">MBA</option>
                            <option value="59" classification="Any Bachelors in Management">MBA / PGDM / PGDBM</option>
                            <option value="65" classification="Any Bachelors in Management">MBE</option>
                            <option value="67" classification="Any Bachelors in Management">MFM (Financial Management)</option>
                            <option value="68" classification="Any Bachelors in Management">MHM  (Hotel Management)</option>
                            <option value="69" classification="Any Bachelors in Management">MHRM (Human Resource Management)</option>
                            <option value="70" classification="Any Bachelors in Management">PGDM</option>

                            <option value="18" classification="Any Bachelors in Engineering">Aeronautical Engineering</option>
                            <option value="19" classification="Any Bachelors in Engineering">B Plan</option>
                            <option value="9" classification="Any Bachelors in Engineering">B.Arch</option>
                            <option value="16" classification="Any Bachelors in Engineering">B.Tech</option>
                            <option value="8" classification="Any Bachelors in Engineering">B.Tech(IT)</option>
                            <option value="10" classification="Any Bachelors in Engineering">B.Tech(Mech)</option>
                            <option value="7" classification="Any Bachelors in Engineering">BCA</option>
                            <option value="11" classification="Any Bachelors in Engineering">BE</option>
                            <option value="17" classification="Any Bachelors in Engineering">BE Or Similar</option>
                            <option value="14" classification="Any Bachelors in Engineering">BE(Civil)</option>
                            <option value="12" classification="Any Bachelors in Engineering">BE(CS)</option>
                            <option value="13" classification="Any Bachelors in Engineering">BE(ECE)</option>
                            <option value="15" classification="Any Bachelors in Engineering">BE(EEE)</option>
                            <option value="6" classification="Any Bachelors in Engineering">BE/B.Tech</option>
                            <option value="20" classification="Any Bachelors in Engineering">BSc IT / Computer Science</option>

                            <option value="122" classification="Others">Any Degree</option>
                            <option value="132" classification="Others">Any Professional Degree</option>
                            <option value="149" classification="Others">B.A.,M.S</option>
                            <option value="144" classification="Others">B.D.S/M.D.S/M.B.B.S/M.D</option>
                            <option value="128" classification="Others">B.E/M.E/MCA/M.SC/MBA</option>
                            <option value="150" classification="Others">B.H.,M.S</option>
                            <option value="137" classification="Others">B.Pharam</option>
                            <option value="148" classification="Others">B.S,M.S</option>
                            <option value="134" classification="Others">BA,L.L.B</option>
                            <option value="126" classification="Others">BE M.S</option>
                            <option value="135" classification="Others">BE,M.S(USA)</option>
                            <option value="136" classification="Others">BE,MS</option>
                            <option value="124" classification="Others">BE/B.TECH/ME/M.TECH</option>
                            <option value="125" classification="Others">BE/MBA</option>
                            <option value="121" classification="Others">BE/MCA</option>
                            <option value="129" classification="Others">BE/MCA/MBA/CA</option>
                            <option value="127" classification="Others">BE/ME</option>
                            <option value="138" classification="Others">CC</option>
                            <option value="145" classification="Others">Doctor or Engineer</option>
                            <option value="141" classification="Others">Engineering master degree or doctor MD MS</option>
                            <option value="140" classification="Others">M.Res</option>
                            <option value="133" classification="Others">M.Tech/MS(Engg)/MD(Doctor)</option>
                            <option value="119" classification="Others">Master Degree</option>
                            <option value="146" classification="Others">MBBS,MD</option>
                            <option value="131" classification="Others">MBBS/MD</option>
                            <option value="142" classification="Others">ME,MBA,MS</option>
                            <option value="143" classification="Others">Medical</option>
                            <option value="139" classification="Others">Medical/IT professional</option>
                            <option value="147" classification="Others">MIB</option>
                            <option value="120" classification="Others">MS/MD/MBA</option>
                            <option value="118" classification="Others">nursing</option>
                            <option value="117" classification="Others">Others</option>
                            <option value="123" classification="Others">PG Degree</option>
                            <option value="130" classification="Others">U.G Degree</option>

                            <option value="40" classification="Any Bachelors in Arts / Science / Commerce">Aviation Degree</option>
                            <option value="33" classification="Any Bachelors in Arts / Science / Commerce">B.Com</option>
                            <option value="39" classification="Any Bachelors in Arts / Science / Commerce">B.COM(ACS)</option>
                            <option value="152" classification="Any Bachelors in Arts / Science / Commerce">B.Com(CA)</option>
                            <option value="36" classification="Any Bachelors in Arts / Science / Commerce">B.Ed</option>
                            <option value="35" classification="Any Bachelors in Arts / Science / Commerce">B.Phil</option>
                            <option value="34" classification="Any Bachelors in Arts / Science / Commerce">B.Sc</option>
                            <option value="32" classification="Any Bachelors in Arts / Science / Commerce">BA</option>
                            <option value="38" classification="Any Bachelors in Arts / Science / Commerce">Bachelor Degree</option>
                            <option value="41" classification="Any Bachelors in Arts / Science / Commerce">BFA</option>
                            <option value="42" classification="Any Bachelors in Arts / Science / Commerce">BFT</option>
                            <option value="37" classification="Any Bachelors in Arts / Science / Commerce">BHM</option>
                            <option value="43" classification="Any Bachelors in Arts / Science / Commerce">BMM (MASS MEDIA)</option>
                            <option value="44" classification="Any Bachelors in Arts / Science / Commerce">BSc</option>
                            <option value="45" classification="Any Bachelors in Arts / Science / Commerce">BSW</option>

                            <option value="75" classification="Any Bachelors in Medicine in General / Dental / Surgeon">B.Pharm</option>
                            <option value="76" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BAMS</option>
                            <option value="73" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BDS</option>
                            <option value="77" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BHMS</option>
                            <option value="79" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BPT</option>
                            <option value="78" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BSMS</option>
                            <option value="80" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BUMS</option>
                            <option value="74" classification="Any Bachelors in Medicine in General / Dental / Surgeon">BVSc</option>
                            <option value="72" classification="Any Bachelors in Medicine in General / Dental / Surgeon">MBBS</option>
                            
                        </Form.Select>  
                        <Form.Text id="passwordHelpBlock" muted>
                            Hold CTRL Key To Select Multiple Items.i.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Education Detail </Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter Education Detail" />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label> College </Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter College" />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Job Title / Details </Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter Job Title / Details" />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Employer Details </Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter Employer Details" />
                        <Form.Text className="text-muted">
                            Don't give any contact information. If any misuse, admin will remove that without your permission.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Day Of Birth </Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="0">Select</option>
                            <option value="3">Afghanistan</option>
                            <option value="16">Aland Islands</option>
                            <option value="6">Albania</option>
                            <option value="62">Algeria</option>
                            <option value="12">American Samoa</option>
                            <option value="1">Andorra</option>
                            <option value="9">Angola</option>
                            <option value="5">Anguilla</option>
                            <option value="10">Antarctica</option>
                            <option value="4">Antigua and Barbuda</option>
                            <option value="11">Argentina</option>
                            <option value="7">Armenia</option>
                            <option value="15">Aruba</option>
                            <option value="14">Australia</option>
                            <option value="13">Austria</option>
                            <option value="17">Azerbaijan</option>
                            <option value="32">Bahamas</option>
                            <option value="24">Bahrain</option>
                            <option value="20">Bangladesh</option>
                            <option value="19">Barbados</option>
                            <option value="36">Belarus</option>
                            <option value="21">Belgium</option>
                            <option value="37">Belize</option>
                            <option value="26">Benin</option>
                            <option value="28">Bermuda</option>
                            <option value="33">Bhutan</option>
                            <option value="30">Bolivia</option>
                            <option value="18">Bosnia and Herzegovina</option>
                            <option value="35">Botswana</option>
                            <option value="34">Bouvet Island</option>
                            <option value="31">Brazil</option>
                            <option value="106">British Indian Ocean Territory</option>
                            <option value="237">British Virgin Islands</option>
                            <option value="29">Brunei</option>
                            <option value="23">Bulgaria</option>
                            <option value="22">Burkina Faso</option>
                            <option value="25">Burundi</option>
                            <option value="117">Cambodia</option>
                            <option value="47">Cameroon</option>
                            <option value="38">Canada</option>
                            <option value="53">Cape Verde</option>
                            <option value="124">Cayman Islands</option>
                            <option value="41">Central African Republic</option>
                            <option value="213">Chad</option>
                            <option value="46">Chile</option>
                            <option value="48">China</option>
                            <option value="54">Christmas Island</option>
                            <option value="39">Cocos Islands</option>
                            <option value="49">Colombia</option>
                            <option value="119">Comoros</option>
                            <option value="45">Cook Islands</option>
                            <option value="50">Costa Rica</option>
                            <option value="98">Croatia</option>
                            <option value="52">Cuba</option>
                            <option value="55">Cyprus</option>
                            <option value="56">Czech Republic</option>
                            <option value="40">Democratic Republic of the Congo</option>
                            <option value="59">Denmark</option>
                            <option value="58">Djibouti</option>
                            <option value="60">Dominica</option>
                            <option value="61">Dominican Republic</option>
                            <option value="219">East Timor</option>
                            <option value="63">Ecuador</option>
                            <option value="65">Egypt</option>
                            <option value="209">El Salvador</option>
                            <option value="88">Equatorial Guinea</option>
                            <option value="67">Eritrea</option>
                            <option value="64">Estonia</option>
                            <option value="69">Ethiopia</option>
                            <option value="72">Falkland Islands</option>
                            <option value="74">Faroe Islands</option>
                            <option value="71">Fiji</option>
                            <option value="70">Finland</option>
                            <option value="75">France</option>
                            <option value="80">French Guiana</option>
                            <option value="175">French Polynesia</option>
                            <option value="214">French Southern Territories</option>
                            <option value="76">Gabon</option>
                            <option value="85">Gambia</option>
                            <option value="79">Georgia</option>
                            <option value="57">Germany</option>
                            <option value="82">Ghana</option>
                            <option value="83">Gibraltar</option>
                            <option value="89">Greece</option>
                            <option value="84">Greenland</option>
                            <option value="78">Grenada</option>
                            <option value="87">Guadeloupe</option>
                            <option value="92">Guam</option>
                            <option value="91">Guatemala</option>
                            <option value="81">Guernsey</option>
                            <option value="86">Guinea</option>
                            <option value="93">Guinea-Bissau</option>
                            <option value="94">Guyana</option>
                            <option value="99">Haiti</option>
                            <option value="96">Heard Island and McDonald Islands</option>
                            <option value="97">Honduras</option>
                            <option value="95">Hong Kong</option>
                            <option value="100">Hungary</option>
                            <option value="109">Iceland</option>
                            <option value="105">India</option>
                            <option value="101">Indonesia</option>
                            <option value="108">Iran</option>
                            <option value="107">Iraq</option>
                            <option value="102">Ireland</option>
                            <option value="104">Isle of Man</option>
                            <option value="103">Israel</option>
                            <option value="110">Italy</option>
                            <option value="44">Ivory Coast</option>
                            <option value="112">Jamaica</option>
                            <option value="114">Japan</option>
                            <option value="111">Jersey</option>
                            <option value="113">Jordan</option>
                            <option value="125">Kazakhstan</option>
                            <option value="115">Kenya</option>
                            <option value="118">Kiribati</option>
                            <option value="243">Kosovo</option>
                            <option value="123">Kuwait</option>
                            <option value="116">Kyrgyzstan</option>
                            <option value="126">Laos</option>
                            <option value="135">Latvia</option>
                            <option value="127">Lebanon</option>
                            <option value="132">Lesotho</option>
                            <option value="131">Liberia</option>
                            <option value="136">Libya</option>
                            <option value="129">Liechtenstein</option>
                            <option value="133">Lithuania</option>
                            <option value="134">Luxembourg</option>
                            <option value="148">Macao</option>
                            <option value="144">Macedonia</option>
                            <option value="142">Madagascar</option>
                            <option value="156">Malawi</option>
                            <option value="158">Malaysia</option>
                            <option value="155">Maldives</option>
                            <option value="145">Mali</option>
                            <option value="153">Malta</option>
                            <option value="143">Marshall Islands</option>
                            <option value="150">Martinique</option>
                            <option value="151">Mauritania</option>
                            <option value="154">Mauritius</option>
                            <option value="245">Mayotte</option>
                            <option value="157">Mexico</option>
                            <option value="73">Micronesia</option>
                            <option value="139">Moldova</option>
                            <option value="138">Monaco</option>
                            <option value="147">Mongolia</option>
                            <option value="140">Montenegro</option>
                            <option value="152">Montserrat</option>
                            <option value="137">Morocco</option>
                            <option value="159">Mozambique</option>
                            <option value="146">Myanmar</option>
                            <option value="160">Namibia</option>
                            <option value="169">Nauru</option>
                            <option value="168">Nepal</option>
                            <option value="166">Netherlands</option>
                            <option value="8">Netherlands Antilles</option>
                            <option value="161">New Caledonia</option>
                            <option value="171">New Zealand</option>
                            <option value="165">Nicaragua</option>
                            <option value="162">Niger</option>
                            <option value="164">Nigeria</option>
                            <option value="170">Niue</option>
                            <option value="163">Norfolk Island</option>
                            <option value="121">North Korea</option>
                            <option value="149">Northern Mariana Islands</option>
                            <option value="167">Norway</option>
                            <option value="172">Oman</option>
                            <option value="178">Pakistan</option>
                            <option value="185">Palau</option>
                            <option value="183">Palestinian Territory</option>
                            <option value="173">Panama</option>
                            <option value="176">Papua New Guinea</option>
                            <option value="186">Paraguay</option>
                            <option value="174">Peru</option>
                            <option value="177">Philippines</option>
                            <option value="181">Pitcairn</option>
                            <option value="179">Poland</option>
                            <option value="184">Portugal</option>
                            <option value="182">Puerto Rico</option>
                            <option value="187">Qatar</option>
                            <option value="42">Republic of the Congo</option>
                            <option value="188">Reunion</option>
                            <option value="189">Romania</option>
                            <option value="191">Russia</option>
                            <option value="192">Rwanda</option>
                            <option value="27">Saint Barthélemy</option>
                            <option value="199">Saint Helena</option>
                            <option value="120">Saint Kitts and Nevis</option>
                            <option value="128">Saint Lucia</option>
                            <option value="141">Saint Martin</option>
                            <option value="180">Saint Pierre and Miquelon</option>
                            <option value="235">Saint Vincent and the Grenadines</option>
                            <option value="242">Samoa</option>
                            <option value="204">San Marino</option>
                            <option value="208">Sao Tome and Principe</option>
                            <option value="193">Saudi Arabia</option>
                            <option value="205">Senegal</option>
                            <option value="190">Serbia</option>
                            <option value="51">Serbia and Montenegro</option>
                            <option value="195">Seychelles</option>
                            <option value="203">Sierra Leone</option>
                            <option value="198">Singapore</option>
                            <option value="202">Slovakia</option>
                            <option value="200">Slovenia</option>
                            <option value="194">Solomon Islands</option>
                            <option value="206">Somalia</option>
                            <option value="246">South Africa</option>
                            <option value="90">South Georgia and the South Sandwich Islands</option>
                            <option value="122">South Korea</option>
                            <option value="68">Spain</option>
                            <option value="130">Sri Lanka</option>
                            <option value="196">Sudan</option>
                            <option value="207">Suriname</option>
                            <option value="201">Svalbard and Jan Mayen</option>
                            <option value="211">Swaziland</option>
                            <option value="197">Sweden</option>
                            <option value="43">Switzerland</option>
                            <option value="210">Syria</option>
                            <option value="226">Taiwan</option>
                            <option value="217">Tajikistan</option>
                            <option value="227">Tanzania</option>
                            <option value="216">Thailand</option>
                            <option value="215">Togo</option>
                            <option value="218">Tokelau</option>
                            <option value="222">Tonga</option>
                            <option value="224">Trinidad and Tobago</option>
                            <option value="221">Tunisia</option>
                            <option value="223">Turkey</option>
                            <option value="220">Turkmenistan</option>
                            <option value="212">Turks and Caicos Islands</option>
                            <option value="225">Tuvalu</option>
                            <option value="238">U.S. Virgin Islands</option>
                            <option value="229">Uganda</option>
                            <option value="228">Ukraine</option>
                            <option value="2">United Arab Emirates</option>
                            <option value="77">United Kingdom</option>
                            <option value="231">United States</option>
                            <option value="230">United States Minor Outlying Islands</option>
                            <option value="232">Uruguay</option>
                            <option value="249">usa</option>
                            <option value="233">Uzbekistan</option>
                            <option value="240">Vanuatu</option>
                            <option value="234">Vatican</option>
                            <option value="236">Venezuela</option>
                            <option value="239">Vietnam</option>
                            <option value="241">Wallis and Futuna</option>
                            <option value="66">Western Sahara</option>
                            <option value="244">Yemen</option>
                            <option value="247">Zambia</option>
                            <option value="248">Zimbabwe</option>
                        </Form.Select>          
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Income </Form.Label>
                        <Col className='inlineFromGrup'> 
                            <Form.Select aria-label="Default select example">
                                <option value="0">Select</option>
                                <option value="1">$ Canadian Dollar (CAD)</option>
                                <option value="2">$ Australian Dollar (AUD)</option>
                                <option value="3">€ Euro Member Countries (EUR)</option>
                                <option value="4">₹ Indian Rupee (INR)</option>
                                <option value="5">¥ Japanese Yen (JPY)</option>
                                <option value="6">£ United Kingdom Pound (GBP)</option>
                                <option value="7">$ United States Dollar (USD)</option>
                            </Form.Select>

                            <Form.Control type="number" placeholder="Enter Rupees" />        


                            <Form.Select aria-label="Default select example">
                                <option value="0">Select</option>
                                <option value="1"> Per Month </option>
                                <option value="2"> Per Annum </option>
                            </Form.Select>

                        </Col>
                    </Form.Group>
            </div>

            <h6 className='tabTitleTxt'> Contact Details </h6>
            <div className="signUpInnerBox">
                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Address </Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter Address" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Country </Form.Label>
                    <Form.Control type="text" placeholder="Enter Country" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label> State </Form.Label>
                    <Form.Control type="text" placeholder="Enter State" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label> City/Town </Form.Label>
                    <Form.Control type="text" placeholder="Enter City/Town" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Country Living In </Form.Label>
                    <Form.Control type="text" placeholder="Enter Country Living In" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Native </Form.Label>
                    <Form.Control type="text" placeholder="Enter Native" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Personal Website/Blog </Form.Label>
                    <Form.Control type="text" placeholder="Enter Personal Website/Blog" />
                    <Form.Text className="text-muted">
                        ( Eg:http://Yourblog.Com )
                    </Form.Text>
                </Form.Group>
            </div>

        </div>
    )
  };
  export default FirstStep;