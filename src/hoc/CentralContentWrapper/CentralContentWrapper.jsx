import './CentralContentWrapper.scss'

const CentralContentWrapper = (Component) => function HOC() {
    return (
        <>
            <div id='central-content-wrapper'>
                <Component />
            </div>
        </>
    )
}

export default CentralContentWrapper