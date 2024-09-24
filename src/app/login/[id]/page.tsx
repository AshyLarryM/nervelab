import { DynamicGreeting } from '@/components/DynamicGreeting';
import { LoginForm } from '@/components/form/LoginForm'
import PageFrame from '@/components/layouts/PageFrame'
import React from 'react'

export default async function LoginPageById({ params }: { params: { id: string } }) {

    const username = params?.id || 'Anonymous';

    return (
        <PageFrame showNavbar={true} showFooter={true} showParticles={true}>
            <div className="flex flex-col justify-center items-center flex-grow mt-32">
                <DynamicGreeting username={username} />
                <LoginForm />
            </div>
        </PageFrame>
    );
}
