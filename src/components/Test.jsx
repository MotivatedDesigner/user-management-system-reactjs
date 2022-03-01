import { memo } from "react";
export const Test = memo(({data}) => {
  console.log('test');
  return (
    <ul>
      { data.map(item => <li>{item}</li>) }  
    </ul>
  )
})
