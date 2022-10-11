import './MailBox.css';

const MailBox = (props) => {
    const { isActive, onClick, size, id, isInUse } = props;
    let cName = `box ${size}`;
    if (isActive) {
        cName += ' active';
    }
    if (isInUse) {
        cName += ' inuse';
    }

    return (
        <div className={cName} onClick={onClick}>
            <div className="top-half">
                <div className="lock"></div>
            </div>
            <div className="bot-half">
                <h3>{id}</h3>
            </div>
        </div>
    );
}

export default MailBox;