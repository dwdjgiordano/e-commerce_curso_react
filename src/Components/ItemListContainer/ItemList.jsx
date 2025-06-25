import React from "react"
import { useParams } from "react-router"
import { useState } from "react"
import { useEffect } from "react"

async function ItemList(){

  const respuesta = await fetch('https://dummyjson.com/products')
  //const respuesta = await fetch('https://dummyjson.com/products/category/smartphones')
  const item = await respuesta.json()
  return item.products
}

export default ItemList