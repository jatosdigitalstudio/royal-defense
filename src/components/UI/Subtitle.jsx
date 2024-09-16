import { Typography } from "@material-tailwind/react"

export default function Subtitle({text}) {
    return (
        <Typography className="inline-flex text-xs border-[1.5px] rounded-lg border border-white bg-white/55 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm py-1 lg:px-4 px-1 font-medium text-primary">
            {text}
        </Typography>
    )
}