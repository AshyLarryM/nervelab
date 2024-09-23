import { LoginForm } from '@/components/form/LoginForm'
import PageFrame from '@/components/layouts/PageFrame'
import React from 'react'

export default async function LoginPageById({ params }: { params: { id: string } }) {

    console.log(params?.id);

    const userName = params?.id || 'Anonymous';

    return (
        <PageFrame showNavbar={true} showFooter={true} showParticles={true} >
            <div className='flex justify-center items-center mt-12'>
                <h2 className='text-4xl text-white '>Hello {userName}</h2>
            </div>
            <LoginForm />
        </PageFrame>
    )
}
