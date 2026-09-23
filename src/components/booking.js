"use client"

import Cal from "@calcom/embed-react"
import Spacer from "./spacer"

export default function Booking({calLink = "somerabbit/30min"}) {
    return (
        <>
            <Spacer />
            <div className="p20 flex flex-col align-center gap-80">
                <p className="h3 fade--in" data-sal>Schedule a call</p>
                <div className="booking-embed shadow--spread">
                    <Cal className='w-100' calLink={calLink} config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "light" }} />
                </div>
            </div>
        </>
    )
}
