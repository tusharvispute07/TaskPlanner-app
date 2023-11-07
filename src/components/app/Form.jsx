import React, {useState} from "react";
import Button from "./Button";
import Input from "./Input";

export default function Form(props){
    const [inputValue, setInputValue] = useState("")
    function handleInput(event){
        const userInput = event.target.value
        setInputValue(userInput)
    }

    function handleAddClick(event){
        event.preventDefault()
        props.addItem({name: inputValue})
        setInputValue("")
    }

    return (
        <form>
            <Input onInput={handleInput} value={inputValue} />
            <Button onClick = {handleAddClick} />
        </form>
    )
}