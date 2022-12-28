import React, { useState } from 'react'
import "./Select.css"

const Select = ({options, onSelect, defaultOption=1}) => {
  return (
      <div>
          <select onChange={(evt) => onSelect(Number(evt.target.value))}>


              <options value={defaultOption} />
              <options value={defaultOption} />

              {
                  options.map((val) => (
                      <option value={val.value}>{val.text}</option> 
                    //   key ??? como pongo ? key = {} CORRECCION
                  ))
              }
          </select>      
    </div>
  )
}

const options = [
    { value: 1, text: "5 cm" },
    { value: 2, text: "8 cm" },

]

export default function Caso1() {
    const [option, setOption] = useState(1);

    function onAdd(value) {
        setOption(value);
        console.log(value)
    }
    return (
        <>
            {/* //{option === 1 ?
         
                // <img src=""></img>
                //     :
                //     <img src=""></img>                
            //} */}
             
            <Select
                options={options}
                onSelect={onAdd}
                defaultOption={option}
            />
        </>
    )
}

