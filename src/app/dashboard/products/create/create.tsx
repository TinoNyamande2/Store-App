"use client"
import { ProductCreate, ProductCreateDefaultvalues } from "@/interfaces/product"
import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react"

export const Create = () =>{
    const [inputs,setInputs] = useState<ProductCreate>(ProductCreateDefaultvalues);
    const onFormChange = (event:ChangeEvent) =>{
      
    }
    return (
        <form>
             <TextField size="small" onChange={onFormChange}  name="title" label="Title"/>
             <br/>
             <TextField size="small" onChange={onFormChange}  name="category" label="Category"/>
             <br/>
             <TextField size="small" onChange={onFormChange}  name="description" label="Description"/>
             <br/>
             <TextField size="small" onChange={onFormChange}  name="normalprice" label="Normal Price"/>
             <br/>
             <TextField size="small" onChange={onFormChange}  name="saleprice" label="Sale Price"/>
             <br/>
             <TextField size="small" onChange={onFormChange}  name="delivery" label="Delivery"/>
             <br/>
             <TextField size="small" onChange={onFormChange} type="file"  name="mainimageurl" label="Main Image"/>
        </form>
    )
}