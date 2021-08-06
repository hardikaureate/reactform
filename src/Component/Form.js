import React,{useState} from 'react'
import './CSS/style.css'
//import './JS/jquery.min.js'
import bgimage from './images/backgroundgreen.svg'
import CloseIcon from '@material-ui/icons/Close';
import user from '../Component/images/icon-user.png'
import call from '../Component/images/icon-call.png'
import company from '../Component/images/icon-company.png'
import mail from '../Component/images/icon-mail.png'
import send from '../Component/images/icon-send.png'
import arrow from '../Component/images/icon-arrow.png'
import bgcontact from '../Component/images/bg-contact.png'
const Form = () => {
    const [isActive, setActive] = useState(false);
    const [isActiveee, setIsActiveee] = useState(false);
    const [value, setValue] = useState({
		fname: '',
		lname: '',
		email: '',
		phone: '',
		company: '',
		prodesc: '',
		budget1: '',
		budget2: ''
	});

	const onSubmit = (event) => {
		event.preventDefault();
		alert(`Hello ${value.fname} ${value.lname} ${value.lname} ${value.email} ${value.phone} ${value.company} ${value.prodesc}`)
		
	}

	//const onSubmit = (data) => alert(JSON.stringify(data));

	const inputEvent = (event) => {
		console.log(event.target.value)
		console.log(event.target.name)

		//setValue(event);

		if (event !== '') {
			setIsActiveee(true);
		} else {
			setIsActiveee(false);
		}

		const {value, name} = event.target
		setValue((preValue) => {
				//console.log(preValue)
				return {
						...preValue,
						[name] : value,

				}
		})
	}

    /* const ToggleClass = () => {
        setActive(true);
    };
    function handleTextChange(text) {
		setValue(text);

		if (text !== '') {
			setIsActiveee(true);
		} else {
			setIsActiveee(false);
		}
	} */
	
    return (
        <div>
            <div id="wrapper">
		<section className="contact-action">
			<div className="container">
				<p className="common-btn contact-popup" onClick={()=>setActive(!isActive)}>
                    CONTACT US
                </p>
			</div>
		</section>
		{isActive ? <section id="contact-section" className="contact-sectionn bg-dark">
			<div className="contact-wrap d-flex">
					<div className="green-img left">
						<img src={bgimage} alt="backgroungreen" />
					</div>
				    <p className="close-popup" onClick={()=>setActive(!isActive)}><CloseIcon /></p>
					<div className="contact-content">
						<h2 className="contact-title text-white">
							Get <strong> In Touch </strong>
						</h2>
					</div>
					<div className="contact-form">
						<form onSubmit={onSubmit}>
							<div className="control-group half-input">
								<div className="control-input is-floating-label">
                                    <img src={user} alt="user" />
                                    <input type="text"  className="input-field" placeholder="First Name" value={value.fname} onChange={inputEvent} name="fname" required />
                                    <label className={ isActiveee ? "Activeee" : ""} htmlFor="firstname" >First Name</label>
								</div>
                                
								<div className="control-input is-floating-label">
                                <img src={user} alt="user" />
                                    <input type="text"  className="input-field" placeholder="Last Name" value={value.lname} onChange={inputEvent} name="lname" required />
                                    <label className={ isActiveee ? "Activeee" : ""} htmlFor="lastname">Last Name</label>
								</div>
							</div>
							<div className="control-group half-input unwidth">
								<div className="control-input is-floating-label">
                                <img src={mail} alt="user" />
                                    <input type="email"  className="input-field" placeholder="Email" value={value.email} onChange={inputEvent} name="email" required/>
                                    <label className={ isActiveee ? "Activeee" : ""} htmlFor="email">E-mail</label>
								</div>
								<div className="control-input is-floating-label">
                                <img src={call} alt="user" />
                                    <input type="number"  className="input-field" placeholder="Phone Number" value={value.phone} onChange={inputEvent} name="phone" required />
                                    <label className={ isActiveee ? "Activeee" : ""} htmlFor="phone">Phone Number</label>
								</div>
							</div>
							<div className="control-group">
								<div className="control-input is-floating-label">
                                <img src={company} alt="user" />
                                    <input type="text"  className="input-field" placeholder="Company" value={value.company} onChange={inputEvent} name="company" required />
                                    <label className={ isActiveee ? "Activeee" : ""} htmlFor="Company">Company</label>
								</div>
							</div>
							<div className="control-group">
								<div className="control-input is-floating-label">
                                <img src={send} alt="user" />
                                    <textarea type="text"  className="input-field" placeholder="Project Description" value={value.prodesc} onChange={inputEvent} name="prodesc" ></textarea>
                                    <label className={ isActiveee ? "Activeee" : ""} htmlFor="projectdescription">Project Description</label>
								</div>
							</div>
							<div className="control-group check-input">
								<div className="control-input">
									<input type="checkbox" className="check" id="styled-checkbox-1" type="checkbox" value={value.budget1} onChange={inputEvent} name="budget1"/>
									<label className="checkmark" for="styled-checkbox-1"></label>
									<span>My Budget is Greater <br/> than $50,000</span>
								</div>
								<div className="control-input">
									<input type="checkbox" className="check"  id="styled-checkbox-2" type="checkbox" value={value.budget2} onChange={inputEvent} name="budget2" />
									<label className="checkmark" for="styled-checkbox-2"></label>
									<span>My Budget is less <br/> than $50,000</span>
								</div>
							</div>
							<div className="control-group full-button">
								<div className="control-input">
									<input type="reset" value="CANCEL" className="cancle-btn" />
									<input type="submit" value="SEND MESSAGE" className="common-btn" />
								</div>
							</div>
						</form>
					</div>
					<div className="green-img right">
						<img src={bgimage} alt="backgroungreen" />
					</div>
                    <div className="green-img bottom">
                        <img src={bgcontact} alt="backgroungreen" />
                    </div>
				</div>
		</section>
        : null}
 </div>
        </div>
    )
}

export default Form


