import { Button } from "antd";
import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { VerticalAlignBottomOutlined } from "@ant-design/icons"

export default function LearnButton() {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);

        // gia lap trong thuc te:
        setTimeout(() => {
        setLoading(false);
        }, 2000)
    }

    return (
        <>
            <div className="button">
                <h3>Button Component</h3>
                <Button type="primary" size="large">Click Me</Button>
                <Button type="dashed" icon={<BsFillArrowLeftCircleFill/>} size="small">Click Me</Button>
                <Button type="primary" icon={<VerticalAlignBottomOutlined spin />}>Click Me</Button>
                <Button type="primary" loading={loading} onClick={handleClick} disabled={loading}>Submit</Button>
                <Button type="primary" danger >Submit</Button>
                <Button href="https://react-icons.github.io/react-icons" target="_blank">Click to Open new Tab</Button>
            </div>
        </>
    )
}