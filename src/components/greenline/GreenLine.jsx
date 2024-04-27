import { useTheme } from "@emotion/react"

export const GreenLine = () => {
    const theme = useTheme();
    return <>
    <div style={{ backgroundColor: theme.palette.primary[400], height: '1px' }}><br /></div>
    </>
}