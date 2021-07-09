import "./EditPaymentMethod.css";

export const EditPaymentMethod = () => {
    return (
        <div className="packages-page-container">
        <h1>Payment Method</h1>
        <form className="modal-form card-form">
            <input className="card-number" name="card-number" type="text" maxLength={19} placeholder="Card number"/>
            <div>
                <input className="expiry-date" name="expiry-date" type="text" maxLength={5} placeholder="Expiry date"/>
                <input className="cvv-number" name="cvv" type="text" maxLength={3} placeholder="CVV" /> 
            </div>
            <div>
                <button type="submit" className="standard-button">
                    Save
                </button>
                <button type="submit" className="standard-button text-button">
                    Undo changes
                </button>
            </div>  
        </form>
    </div>
  );
};
