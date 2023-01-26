import {Tooltip} from "@mui/joy";

export default function InfoToolTip({text}) {
    return (
        <Tooltip
            title={text}
            arrow
            placement="top"
        >
            <span className="icon-Gide-Icon">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
            </span>
        </Tooltip>
    )
}