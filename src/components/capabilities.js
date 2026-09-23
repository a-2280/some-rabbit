import Spacer from "./spacer"

export default function Capabilities({ items = [] }) {
    return (
        <>
            <Spacer className='x2' />
            <div className='p20 flex flex-col align-center gap-80 max-600 ma text-center'>
                <p className='h3 fade--in' data-sal>Capabilities</p>
                <div className="fade--in" data-sal>
                    <p>{items.join(", ")}</p>
                    <p>Full-stack design forward development</p>
                </div>
            </div>
            <Spacer className='x2' />
        </>
    )
}
