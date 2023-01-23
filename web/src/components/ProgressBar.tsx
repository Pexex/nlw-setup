import clsx from "clsx";

interface ProgressBarProps {
    progress: number
}

export function ProgressBar(props: ProgressBarProps) {
    return(
        <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
            <div 
                className={clsx("h-3 rounded-xl transition-all", {
                    'bg-zinc-900 border-2 border-zinc-800': props.progress == 0,
                    'bg-violet-900 border-violet-700': props.progress > 0 && props.progress < 20,
                    'bg-violet-800 border-violet-600': props.progress >= 20 && props.progress < 40,
                    'bg-violet-700 border-violet-500': props.progress >= 40 && props.progress < 60,
                    'bg-violet-600 border-violet-500': props.progress >= 60 && props.progress < 80,
                    'bg-violet-500 border-violet-400': props.progress >= 80,
                })}
                style={{
                    width: `${props.progress}%`
                }}
                >

            </div>
        </div>
    );
}