import React,{useState} from "react"
function MyComponent () {

    const [name,setName] = useState();
    const [quantity,setQuantity] = useState(1);
    const [comment,setComment] = useState();
    const [payment,setPayment] = useState("");


    const handleNameChange = (e) =>{
        setName(e.target.value);
    }
    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    }
    const handleCommnet = (e) => {
        setComment(e.target.value);
    }
    const handlePayment = (event) => {
        setPayment(event.target.value)
    }

    return(
        <>
        <div>
            <input value={name} onChange={handleNameChange} placeholder="enter your name " ></input>
            <p>Name: {name}</p>
        </div>

        <div>
            <input type="number" value={quantity} onChange={handleQuantity}></input>
            <p>Quantity: {quantity}</p>
        </div>

        <div>
            <textarea type="text" placeholder="enter your instruction" value={comment} onChange={handleCommnet} />
            <p>output: {comment}</p>
        </div>
        
        <select value={payment} onChange={handlePayment}>
        
            <option value="">Select an option</option>
            <option value="nagad">Nagad</option>
            <option value="bikash">bikash</option>
            <option value="visa">Visa</option>
            <option value="master card">Master card</option>
            <option value="on cash">on cash</option>
            
        </select>
        <p>You selected: {payment}</p>
       
        </>
    )
}
export default MyComponent