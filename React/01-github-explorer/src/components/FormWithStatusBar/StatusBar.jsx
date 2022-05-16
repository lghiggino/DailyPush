import './FormWithStatusBar.scss';

export function StatusBar({progress}) {
    return (
        <div className="progress-bar-wrapper">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    )
}