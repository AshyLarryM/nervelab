interface DynamicGreetingProps {
    username: string;
}

export function DynamicGreeting({ username }: DynamicGreetingProps) {
    return (
        <div className="mt-6 mb-12 rounded-lg gradient-greeting px-4 py-8 md:mt-2 md:mb-16 md:px-16 md:py-12">
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl text-white mb-2 md:mb-4 text-glow-cyan">Hello, {username}</h2>
                <p className="text-white font-medium text-lg md:text-2xl text-header-glow">Please Login to your account</p>
            </div>
        </div>
    )
}
