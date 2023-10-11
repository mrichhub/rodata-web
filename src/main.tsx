import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.tsx"
import { Config } from "./config/config.ts"
import "./main.scss"

const root = ReactDOM.createRoot(document.getElementById("root")!)

if (Config.useStrict) {
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	)
}
else {
	root.render(
		<App />
	)
}
