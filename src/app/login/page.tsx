'use client'
import { LoginForm } from '@/components/form/LoginForm'
import PageFrame from '@/components/layouts/PageFrame'
import React from 'react'

export default function LoginPage() {
  return (
    <PageFrame showNavbar={true} showFooter={true} showParticles={true} >
      <LoginForm />
    </PageFrame>
  )
}
