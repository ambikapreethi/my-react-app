import React from "react";
import { useState } from "react";

function Child({data})
{
    const childData="Hi parent how r u ?";
return(
<button onClick={()=>data(childData)}>send child data to parent</button>

)

}
export default Child;