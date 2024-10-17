interface DynamicGreetingProps {
    username: string;
}

export function DynamicGreeting({ username }: DynamicGreetingProps) {

    return (
        <div className="mt-6 mb-12 max-w-[300px] md:max-w-[500px] lg:max-w-none rounded-lg gradient-greeting px-4 py-8 md:mt-2 md:mb-16 md:px-16 md:py-12">
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl text-white mb-3 md:mb-4 text-glow-cyan">Hello, {username}</h2>
                <p className="text-white font-medium text-md md:text-3xl text-glow my-2 md:my-4">This is Vector.</p>
                <p className="text-white font-medium text-md md:text-2xl mb-3 text-glow-cyan">Sign in with USERNAME: <span className="text-glow">OrdersAndChaos@nervelabs.ai</span></p>
                <p className="text-white font-medium text-md md:text-2xl text-glow-cyan">Password: <span className="text-glow">NoPickles123!</span></p>
            </div>
        </div>
    )
}
