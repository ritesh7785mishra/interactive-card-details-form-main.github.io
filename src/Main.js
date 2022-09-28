import React,{useState} from 'react'
import './Main.css'
import cardBackImg from "./images/bg-card-back.png"
import cardFrontImg from "./images/bg-card-front.png"
import mainImg from "./images/bg-main-desktop.png"
import tickLogo from "./images/check-line.png"

function Main() {
    const[cardData, setCardData] = useState({
        cardNumber:"",
        name:"",
        month:"",
        year:"",
        cvc:""
    })

    const [confirmed, setConfirmed] = useState(false)
    console.log(confirmed)

    const{cardNumber,name,month,year,cvc} = cardData;

     const handleChange = (event) => {
        setCardData({...cardData,
          [event.target.name]: event.target.value
        })
      }

  return (
    <div className="main">
        < div className="left__section">
                <img className='bg__img' src={mainImg} alt=""/>

                <img src={cardFrontImg} alt="" className="cardFront__bg" />
                <img  src={cardBackImg} alt="" className="cardBack__bg" />

                <div className="circles">
                    <div className="white__circle"></div>
                    <div className="transparent__circle"></div>      
                </div>
        
                <p className="card__number">
                    {cardNumber}
                </p>

                <div className="exp__name">
                    <p className="name" placeholder=''>
                            {name}
                    </p>
                    <p className="expiry">
                            <span>{month}</span>/<span>{year}</span>
                    </p>
                </div>
                
                <p className="cvc__cardBack">{cvc}</p>
        </div> 

       <div className="right__section">
      
        <div className='main__content'>
            <div className="before__submit" style={{display: confirmed ? 'none' : 'block'}} >
                    <div className="cardholder__name">
                        <h4  className="name__title text">CARDHOLDER NAME</h4>
                        <input name='name' onChange={(e)=>{ handleChange(e)}} value={name} type="text" placeholder='e.g. Jane Appleseed' className="name__input input" />
                    </div>
                    <div className="cardnumber">
                    <h4 className="number__title text" >CARD NUMBER</h4>
                        <input name='cardNumber' onChange={(e)=>{ handleChange(e)}} value={cardNumber} type="text" placeholder='e.g. 1234 5678 9123 0000' className="number__input input" />
                    </div> 
                    <div className="exp__cvc">
                        <div className="exp__date ">
                            <h4 className="exp__title">EXP. DATE (MM/YY)</h4>
                            <div className="exp__inputContainer">
                                <input name='month' onChange={(e)=>{ handleChange(e)}} value={month} type="text" placeholder='MM' className="exp__inputMonth" />
                                <input name='year'onChange={(e)=>{ handleChange(e)}} value={year}type="text" placeholder='YY' className="exp__inputYear" />
                            </div>
                        </div>
                        <div className="cvc">
                            <h4 className="cvc__title text">CVC</h4>
                            <input name ='cvc' onChange={(e)=>{ handleChange(e)}} value={cvc} type="text" className="cvc__input input" placeholder='e.g. 123'/>
                        </div>
                    </div>
            </div>

                    

            <div className="submit" style={{display: confirmed ? "block": "none"}}>
                    <div>
                        <div className="tick"><img src={tickLogo} alt="" className="tick__logo" /></div>
                        
                        <h1 className="thankyou">THANK YOU!</h1>
                        <p className='added'>We've added your card details</p>
                    </div>
            </div>

            <button onClick={()=>{setConfirmed(!confirmed)}} className="confirm__btn">{confirmed?"Continue":"Confirm"}</button>
        </div>
                    
        </div>
       
    </div>

  )
}

export default Main