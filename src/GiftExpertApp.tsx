import { useState } from "react"
import { AddCategory, GifGrid } from './components';



export const GiftExpertApp = () => {
  
const [categories, setCategories] = useState(['One Punch'])

console.log('rendering')

const onAddCategory = (newCategory) => {
  // setCategories(prevCategories => [...prevCategories, 'Martina'])
  console.log('on Add1')
  if (categories.includes(newCategory)) return;
  setCategories([...categories, newCategory])
  console.log('on Add2')
}

  return (
    <>
        <h1>Gift Expert App</h1>
        <AddCategory onNewCategory={onAddCategory}/>
        
        
          {categories.map(category => <GifGrid key={category} category={category}/>)}
        
    </>
  )
}
