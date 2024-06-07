import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputValue = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim())
        setInputValue('');
        console.log('Submit')
    }


    return (
        <form onSubmit={onSubmitForm}>
            <input type="text"
             placeholder="Buscar gifs"
              value={inputValue} 
              onChange={onInputValue} /></form>

    )
}
