'use client'
import React, { useState, useCallback, useActionState } from 'react'
import { redirect, useSearchParams } from 'next/navigation'
import JoinForm from '../components/JoinForm'
import { processJoin } from '../services/actions'
import { Value } from 'sass'

const JoinContainer = () => {
  const searchParams = useSearchParams()
  const params = { redirectUrl: searchParams.get('redirectUrl') }
  const actionState = useActionState(processJoin, params)
  const [form, setForm] = useState({
    gender: 'FEMALE',
  })
  for (const [k, v] of searchParams.entries()) {
    params
  }
  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }, [])

  const onClick = useCallback((field, value) => {
    setForm((form) => ({ ...form, [field]: value }))
  }, [])

  const onSelectDate = useCallback((date) => {
    setForm((form) => ({ ...form, birthDt: date }))
  }, [])
  return (
    <JoinForm
      actionState={actionState}
      form={form}
      onChange={onChange}
      onClick={onClick}
      onSelectDate={onSelectDate}
    />
  )
}

export default React.memo(JoinContainer)
