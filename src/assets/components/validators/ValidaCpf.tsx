import React from 'react'

type ValidaCpfResult = {
  valido: boolean
  texto: string
}

export default function ValidaCpf(cpf: string): ValidaCpfResult {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos" }
  }else{

  return { valido: true, texto: "" }
  }
}
