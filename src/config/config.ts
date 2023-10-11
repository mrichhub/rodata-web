function booleanEnvValue(property: string): boolean {
	const value = import.meta.env[property] as string
	return (/true/i).test(value)
}

export class Config
{
	static useStrict: boolean = booleanEnvValue("VITE_USE_STRICT_MODE")
}
