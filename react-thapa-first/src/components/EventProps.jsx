
import "./EV.css";

export const EventProps = () => {

    const handleWitUser = (user) => {
        alert(`Hey, ${user} welcome on First Button`)
    }

    const handleWithEnter = () => {
        alert(`Hey, welcome on second Button`)
    }


    return (
        <>
            <WelcomUser
                onButtonClick={() => handleWitUser("DJ")}
                onElementEnter={handleWithEnter}
            />
        </>
    )
}

const WelcomUser = (props) => {

    const { onButtonClick, onElementEnter } = props;

    const handleGreetings = () => {
        console.log("Hey User Welcome Greetings");
        onButtonClick();
    }

    return (
        <>
            <button onClick={onButtonClick}>Click Me</button>
            <button onMouseEnter={onElementEnter}>Hover Me</button>
            <button onClick={handleGreetings}>Greeting</button>
        </>
    )
}